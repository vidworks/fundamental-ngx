import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { GridListItemType, GridListModule } from '@fundamental-ngx/core/grid-list';
import { LinkComponent } from '@fundamental-ngx/core/link';

interface GridListItem {
    id: number;
    title: string;
    description: string;
    type?: GridListItemType;
    counter?: number;
}

@Component({
    selector: 'fd-grid-list-default-example',
    templateUrl: './grid-list-example.component.html',
    styleUrls: ['./grid-list-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [GridListModule, ButtonModule, ContentDensityDirective, NgFor, AvatarModule, LinkComponent, RouterLink]
})
export class GridListDefaultExampleComponent {
    list: GridListItem[] = [
        {
            id: 1,
            title: 'Title 1',
            description: 'Description 1'
        },
        {
            id: 2,
            title: 'Title 2',
            description: 'Description 2'
        },
        {
            id: 3,
            title: 'Title 3',
            description: 'Description 3',
            type: 'navigation',
            counter: 15
        },
        {
            id: 4,
            title: 'Title 4',
            description: 'Description 4'
        },
        {
            id: 5,
            title: 'Title 5',
            description: 'Description 5'
        },
        {
            id: 6,
            title: 'Title 6',
            description: 'Description 6'
        }
    ];

    navigate(): void {
        alert('Navigation event');
    }

    showAlert(message: string): void {
        alert('Clicked on ' + message);
    }
}
