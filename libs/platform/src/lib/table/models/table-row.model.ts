import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { TableDataSource } from '../domain';
import { TableRowType } from '../enums';
import { TableState } from '../interfaces';

export type TableRowState = 'editable' | 'readonly';

/**
 * Table row entity
 * Used to represent table row in the template
 */
export interface TableRow<T = any> {
    /**
     * Row semantic type
     */
    type: TableRowType.ITEM | TableRowType.GROUP | TableRowType.TREE;

    /**
     * Indicates if row is selected. It also supports intermediate state
     */
    checked: boolean | null;

    /**
     * Index of a "value" in data source list
     */
    index: number;

    /**
     * Data model it represents
     */
    readonly value: T;

    /**
     * Reference to a parent if any
     */
    parent: TableRow | null;

    /**
     * Nesting level
     */
    level: number;

    /**
     * Expandable
     */
    expandable: boolean;

    /**
     * Expanded/Collapsed
     */
    expanded: boolean;

    /**
     * If item should be hidden. Used to skip rendering
     */
    hidden: boolean;

    /**
     * If the row is navigatable
     */
    navigatable: boolean;

    /**
     * Row state: readonly or editable.
     */
    state: TableRowState;

    /**
     * Children table rows.
     */
    children: TableRow[];

    /**
     * Children Data Source instance.
     */
    childrenDataSource?: TableDataSource<T>;

    children$: Observable<T[]>;

    expanded$: Observable<boolean>;

    childrenLoading: boolean;

    page: number;

    /**
     * Fetches child rows data.
     * @param state Table state.
     */
    fetch(state: TableState): void;

    setChildren(children: TableRow<T>[]): void;
}

export type TableRowClass<T = any> = string | ((row: T) => string);

export class TableRowImpl<T> implements TableRow<T> {
    /** @hidden */
    private _dsStreamSub: Subscription | undefined;
    /** @hidden */
    private _childrenSubject = new BehaviorSubject<T[]>([]);
    /** @hidden */
    public children$ = this._childrenSubject.asObservable();

    /** @hidden */
    set expanded(value: boolean) {
        if (value === this._expanded) {
            return;
        }
        this._expanded = value;
        this._expandedSubject.next(value);
    }

    get expanded(): boolean {
        return this._expanded;
    }

    childrenLoading = false;

    page = 1;

    /** @hidden */
    private _expanded = false;

    readonly childrenLoading$ = new BehaviorSubject<boolean>(false);

    /** @hidden */
    private _expandedSubject = new BehaviorSubject<boolean>(this._expanded);

    /** Observable of the expanded state. */
    expanded$ = this._expandedSubject.asObservable();

    /** @hidden */
    private _children: T[] = [];
    /** @hidden */
    constructor(
        public type: TableRowType.ITEM | TableRowType.GROUP | TableRowType.TREE,
        public checked: boolean,
        public index: number,
        public readonly value: T,
        public parent: TableRow | null,
        public level: number,
        public expandable: boolean,
        public hidden: boolean,
        public navigatable: boolean,
        public state: TableRowState,
        public children: TableRow[],
        public childrenDataSource?: TableDataSource<T>,
    ) {
        this._dsStreamSub = this.childrenDataSource?.open().subscribe((items) => {
            if (this.index === 1) {
                debugger;
            }
            this.type = this.childrenDataSource!.dataProvider.totalItems > 0 ? TableRowType.TREE : this.type;
            this._children = [...this._children, ...items];
            this._childrenSubject.next(this._children);
        });

        this.childrenDataSource?.onDataReceived().subscribe(() => {
            this.childrenLoading = false;
            this.childrenLoading$.next(false);
        });

        this.childrenDataSource?.onDataRequested().subscribe(() => {
            this.childrenLoading = true;
            this.childrenLoading$.next(true);
        });

    }

    /** @hidden */
    fetch(tableState: TableState): void {
        this.childrenDataSource?.fetch(tableState);
    }

    /** @hidden */
    setChildren(children: TableRow<T>[]): void {
        this.children = children;
    }
}

/** @hidden */
export function isTableRow<T = any>(row: TableRow<T>): row is TableRow<T> {
    return row && row.type !== undefined && row.value !== undefined && row.index >= 0 && row.state !== undefined;
}
