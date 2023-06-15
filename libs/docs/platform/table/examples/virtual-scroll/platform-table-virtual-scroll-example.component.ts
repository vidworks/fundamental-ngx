import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FdDate } from '@fundamental-ngx/core/datetime';
import {
    TableDataSource,
    TableDataProvider,
    TableState
} from '@fundamental-ngx/platform/table';
import { TableItem } from '../../../../../platform/src/lib/table/interfaces';

let index = 0;

@Component({
    selector: 'fdp-platform-table-virtual-scroll-example',
    templateUrl: './platform-table-virtual-scroll-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PlatformTableVirtualScrollExampleComponent {
    source: TableDataSource<ExampleItem>;

    constructor() {
        this.source = new TableDataSource(new TableDataProviderExample());
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

/**
 * Table Data Provider Example
 *
 */
export class TableDataProviderExample extends TableDataProvider<ExampleItem> {
    items: ExampleItem[] = [];
    totalItems = 5000;
    startIndex = 0;

    constructor(public level = 0) {
        super();
    }

    fetch(tableState?: TableState): Observable<ExampleItem[]> {
        this.items = generateItems(10, this.level);

        this.startIndex = this.items.length;

        return of(this.items);
    }
}

function generateItems(size = 100, level = 0): ExampleItem[] {
    return new Array(size).fill(null).map(() => ({
        name: 'Laptops ' + index++,
        children: level === 0 ? new TableDataSource(new TableDataProviderExample(level + 1)) : []
    }))
}

