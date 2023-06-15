import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter, inject,
    Input,
    Output, QueryList,
    SimpleChanges,
    TrackByFunction, ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import { DND_ITEM, DndItem, FocusableItemPosition, Nullable } from '@fundamental-ngx/cdk/utils';
import { ContentDensityMode, ContentDensityObserver } from '@fundamental-ngx/core/content-density';
import { ROW_HEIGHT } from '../../constants';
import { TableScrollableDirective } from '../../directives';
import { SelectionMode, SelectionModeValue, TableRowType } from '../../enums';
import { CollectionGroup } from '../../interfaces';
import { TableRow, TableRowActivateEvent, TableRowClass } from '../../models';
import { TableColumnResizeService } from '../../table-column-resize.service';
import { TableService } from '../../table.service';
import { TableColumn } from '../table-column/table-column';

@Component({
    // We need to apply the Component to a tbody, so, the selector should contain attribute.
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tbody[fdp-table-body]',
    templateUrl: './table-body.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'fdpTableBody'
})
export class TableBodyComponent<T = any> {
    /**
     * Tracking function that will be used to check the differences in data changes.
     * Used similarly to `ngFor` `trackBy` function.
     * Accepts a function that takes two parameters, index and item.
     */
    @Input()
    trackBy: TrackByFunction<T>;

    /**
     * Height of the row, required for the virtualScroll,
     * default is 44px in cozy, 32px in compact and 24px in condensed (set automatically)
     */
    @Input()
    rowHeight = ROW_HEIGHT.get(ContentDensityMode.COZY)!;

    /** String or function to calculate additional rows' CSS classes. */
    @Input()
    rowsClass: TableRowClass<T>;

    /** Whether table row can be clicked */
    @Input()
    rowsActivable = false;

    /** Value with the key of the row item's field to compute semantic state of the row. */
    @Input()
    semanticHighlighting: string;

    /** Toggle for page-scrolling feature. */
    @Input()
    pageScrolling = false;

    /** Number of items per page. */
    @Input()
    pageSize: Nullable<number>;

    /** Page scrolling threshold in px. */
    @Input()
    pageScrollingThreshold = 80;

    /** Sets selection mode for the table. 'single' | 'multiple' | 'none' */
    @Input()
    selectionMode: SelectionModeValue = SelectionMode.NONE;

    /** Value with the key of the row item's field to enable selecting.  */
    @Input()
    selectableKey: string;

    /** Whether to allow for row reordering on tree tables via drag and drop. */
    @Input()
    enableRowReordering = true;

    @Input()
    tableRows: TableRow[] = [];

    @Input()
    tableRowsInViewport: TableRow[] = [];

    /**
     * Columns to be rendered as a pop-in columns.
     */
    @Input()
    poppingColumns: TableColumn[] = [];

    /**
     * Columns to be rendered in the template
     */
    @Input()
    visibleColumns: TableColumn[] = [];

    @Input()
    rowsDraggable = false;

    @Input()
    tableColumnsLength = 0;

    @Input()
    isShownSelectionColumn = false;

    @Input()
    navigatedRowIndex = -1;

    /**
     * Whether to highlight navigated row.
     */
    @Input()
    highlightNavigatedRow = false;

    /** Whether tree mode is enabled. */
    @Input()
    isTreeTable: boolean;

    @Input()
    rtl = false;

    /**
     * Whether to fix the table header and footer. Default is true.
     * Note that if the table contains freezable columns, the header and
     * footer will be fixed automatically, regardless of this input value.
     * */
    @Input()
    fixed = true;

    /**
     *  When True, the checked state of each tree item depends on the checked
     *  state of its parent or direct child.
     */
    @Input()
    enableTristateMode = false;

    @Input()
    id: string;

    @Input()
    semanticHighlightingColumnWidth = 0;

    @Input()
    isShownNavigationColumn = false;

    @Input()
    cellMockVisible = false;

    @Input()
    freezableColumns: Map<string, number> = new Map();

    @Input()
    freezableEndColumns: Map<string, number> = new Map();

    @Input()
    groupRulesMap: Map<string, CollectionGroup> = new Map();

    @Input()
    keyToColumnMap: Map<string, TableColumn> = new Map();

    /** The column `name` to freeze columns up to and including. */
    @Input()
    freezeColumnsTo: string;

    /** The column `name` to freeze columns after and including. */
    @Input()
    freezeEndColumnsTo: string;

    @Input()
    selectionColumnWidth = 0;

    @Input()
    level = 0;

    /** Event fired when the row clicked. */
    @Output()
    readonly rowActivate = new EventEmitter<TableRowActivateEvent<T>>();

    @Output()
    readonly toggleGroupRow = new EventEmitter<TableRow>();

    @Output()
    rowClick = new EventEmitter<{row: TableRow, event?: Event}>();

    @Output()
    dragRowFromKeyboard = new EventEmitter<{dir: string, event: Event, currentRowIndex: number, mode: 'shift' | 'group'}>();

    @Output()
    cellClick = new EventEmitter<{colIdx: number, row: TableRow<T>}>();

    @Output()
    scrollToOverlappedCell = new EventEmitter<void>();

    @Output()
    cellFocused = new EventEmitter<{position: FocusableItemPosition,
        columnLabel: string,
        nestingLevel: number | null}>();

    @Output()
    toggleMultiSelectRow = new EventEmitter<{rowToToggle: TableRow, event?: Event}>();

    @Output()
    toggleSingleSelectableRow = new EventEmitter<TableRow>();

    @Output()
    dragDropStart = new EventEmitter<void>();

    @ViewChildren(DND_ITEM)
    dndItems: QueryList<DndItem>;

    /** @hidden */
    readonly SELECTION_MODE = SelectionMode;

    /** @hidden */
    readonly _tableRowType = TableRowType;

    /** @hidden */
    readonly contentDensityObserver = inject(ContentDensityObserver);

    /** @hidden */
    readonly _tableColumnResizeService = inject(TableColumnResizeService);

    /** @hidden */
    private readonly _tableService = inject(TableService);

    readonly _tableScrollable = inject(TableScrollableDirective);

    /**
     * @hidden
     * Mapping function for the trackBy, provided by the user.
     * Is needed, because we are wrapping user supplied data into a `TableRow` class.
     */
    _rowTrackBy: TrackByFunction<TableRow<T>> = (index, row) => index;

    /** @hidden */
    ngOnChanges(changes: SimpleChanges): void {
        if ('trackBy' in changes) {
            this._rowTrackBy =
                typeof this.trackBy === 'function'
                    ? (index, item) => this.trackBy(index, item.value)
                    : (undefined as any);
        }
    }

    /** @hidden */
    _emitRowActivate(row: TableRow<T>): void {
        if (!this.rowsActivable) {
            return;
        }

        const rowIndex = this.tableRows.indexOf(row);
        this.rowActivate.emit(new TableRowActivateEvent<T>(rowIndex, row.value));
    }

    /** @hidden */
    _isTreeRow(row: TableRow): boolean {
        return row.type === TableRowType.TREE;
    }

    /**
     * This method is used in both css class condition and in the (keydown.enter) handler. We want
     * to make sure that we also allow keyboard handling for the non-tree cells.
     *
     * @param cellIndex
     * @param row
     * @param event Optional event that is used only for the keydown even handler
     * @hidden
     */
    _isTreeRowFirstCell(cellIndex: number, row: TableRow, event?: Event): boolean {
        return (cellIndex === 0 && this._isTreeRow(row)) || (!!event && !this._isTreeRow(row));
    }

    _onIntersect(isVisible: boolean, row: TableRow): void {
        console.log(isVisible);
        if (!isVisible || row.childrenLoading || !row.childrenDataSource) {
            return;
        }

        row.fetch(this._tableService.getTableState());
    }

    fetch(row: TableRow): void {
        row.fetch(this._tableService.getTableState());
    }
}
