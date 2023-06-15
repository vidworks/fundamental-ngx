import { ChangeDetectionStrategy, Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';

import { FdDate } from '@fundamental-ngx/core/datetime';
import {
    TableDataSource,
    TableDataProvider,
    TableState,
    TableComponent,
    TableRow,
    TableRowToggleOpenStateEvent, TableRowsRearrangeEvent, TableRowSelectionChangeEvent, TableItem
} from '@fundamental-ngx/platform/table';

let index = 0;

@Component({
    selector: 'fdp-platform-table-page-scrolling-example',
    templateUrl: './platform-table-page-scrolling-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PlatformTablePageScrollingExampleComponent {
    sourceProvider = new TableDataProviderExample();
    source = new TableDataSource<ExampleItem>(this.sourceProvider);

    @ViewChild(TableComponent)
    table: TableComponent;

    constructor() {
        this.source = new TableDataSource(new TableDataProviderExample());
    }

    alert(message: string): void {
        alert(message);
    }

    onRowToggleOpenState(event: TableRowToggleOpenStateEvent<ExampleItem>): void {
        console.log(event);
    }

    onRowsRearrange(event: TableRowsRearrangeEvent<ExampleItem>): void {
        console.log(event);
    }

    toggleFirstRow(): void {
        this.table.toggleGroupRows(0);
    }

    onRowSelectionChange(event: TableRowSelectionChangeEvent<TableRow<any>>) {
        console.log(event);
    }

    get loading(): Observable<boolean> {
        return of(false);
    }
}

export interface ExampleItem extends TableItem<ExampleItem, 'children'> {
    name: string;
    description?: string;
    price?: {
        value: number;
        currency: string;
    };
    status?: string;
    statusColor?: string;
    date?: FdDate;
    verified?: boolean;
}

function getNestedValue<T extends Record<string, any>>(key: string, object: T): any {
    return key.split('.').reduce((a, b) => (a ? a[b] : null), object);
}

export class TableDataProviderExample extends TableDataProvider<ExampleItem> {
    items: ExampleItem[] = [];
    totalItems = 5000;
    totalItemsLoaded = 0;

    constructor(public level = 0) {
        super();
        this.totalItems = this.level === 0 ? 10 : 5000;
    }

    fetch(tableState?: TableState): Observable<ExampleItem[]> {
        this.items = generateItems(10, this.level, this.totalItemsLoaded);
        this.totalItemsLoaded += this.items.length;

        return of(this.items).pipe(delay(1000));
    }
}

function generateItems(size = 100, level = 0, startIndex = 0): ExampleItem[] {
    return new Array(size).fill(null).map(() => ({
        name: `Laptops  ${startIndex++} (Level ${level + 1})`,
        children: level < 2 ? new TableDataSource(new TableDataProviderExample(level + 1)) : []
    }))
}
