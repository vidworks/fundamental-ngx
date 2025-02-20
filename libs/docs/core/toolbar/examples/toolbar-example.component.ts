import { Component } from '@angular/core';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { IconModule } from '@fundamental-ngx/core/icon';
import { TitleComponent } from '@fundamental-ngx/core/title';
import {
    ToolbarComponent,
    ToolbarItemDirective,
    ToolbarLabelDirective,
    ToolbarSeparatorComponent,
    ToolbarSpacerDirective
} from '@fundamental-ngx/core/toolbar';

@Component({
    selector: 'fd-toolbar-type-example',
    templateUrl: './toolbar-type-example.component.html',
    standalone: true,
    imports: [ToolbarComponent, ToolbarLabelDirective]
})
export class ToolbarTypeExampleComponent {}

@Component({
    selector: 'fd-toolbar-title-example',
    templateUrl: './toolbar-title-example.component.html',
    standalone: true,
    imports: [TitleComponent, ToolbarComponent, IconModule]
})
export class ToolbarTitleExampleComponent {}

@Component({
    selector: 'fd-toolbar-spacer-example',
    templateUrl: './toolbar-spacer-example.component.html',
    standalone: true,
    imports: [ToolbarComponent, ToolbarLabelDirective, ToolbarSpacerDirective]
})
export class ToolbarSpacerExampleComponent {}

@Component({
    selector: 'fd-toolbar-separator-example',
    templateUrl: './toolbar-separator-example.component.html',
    standalone: true,
    imports: [ToolbarComponent, ToolbarLabelDirective, ToolbarSeparatorComponent]
})
export class ToolbarSeparatorExampleComponent {}

@Component({
    selector: 'fd-toolbar-overflow-priority-example',
    templateUrl: './toolbar-overflow-priority-example.component.html',
    standalone: true,
    imports: [ToolbarComponent, ButtonModule, ToolbarItemDirective]
})
export class ToolbarOverflowPriorityExampleComponent {}

@Component({
    selector: 'fd-toolbar-overflow-grouping-example',
    templateUrl: './toolbar-overflow-grouping-example.component.html',
    standalone: true,
    imports: [ToolbarComponent, ButtonModule, ToolbarItemDirective]
})
export class ToolbarOverflowGroupingExampleComponent {}

@Component({
    selector: 'fd-toolbar-size-example',
    templateUrl: './toolbar-size-example.component.html',
    standalone: true,
    imports: [ToolbarComponent, ContentDensityDirective, ToolbarLabelDirective]
})
export class ToolbarSizeExampleComponent {}
