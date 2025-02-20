import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ButtonModule } from '@fundamental-ngx/core/button';
import { IconModule } from '@fundamental-ngx/core/icon';
import { TitleModule } from '@fundamental-ngx/core/title';
import { BarModule } from '@fundamental-ngx/core/bar';
import { BusyIndicatorModule } from '@fundamental-ngx/core/busy-indicator';
import {
    DynamicComponentService,
    DynamicPortalComponent,
    InitialFocusModule,
    ResizeModule,
    TemplateModule
} from '@fundamental-ngx/cdk/utils';

import { DialogComponent } from './dialog.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';
import { DialogService } from './dialog-service/dialog.service';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { DialogDefaultComponent } from './dialog-default/dialog-default.component';
import { DialogCloseButtonComponent } from './dialog-close-button/dialog-close-button.component';
import { DialogTitleDirective } from './directives/dialog-title.directive';
import { ScrollbarModule } from '@fundamental-ngx/core/scrollbar';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';

const declarations = [
    DialogComponent,
    DialogBodyComponent,
    DialogFooterComponent,
    DialogHeaderComponent,
    DialogDefaultComponent,
    DialogContainerComponent,
    DialogCloseButtonComponent,
    DialogTitleDirective
];

@NgModule({
    declarations: [declarations],
    imports: [
        BarModule,
        IconModule,
        TitleModule,
        CommonModule,
        ButtonModule,
        ResizeModule,
        TemplateModule,
        DragDropModule,
        InitialFocusModule,
        BusyIndicatorModule,
        A11yModule,
        ScrollbarModule,
        PortalModule,
        OverlayModule,
        DynamicPortalComponent
    ],
    exports: [declarations, BarModule, TitleModule, TemplateModule, InitialFocusModule],
    providers: [DialogService, DynamicComponentService]
})
export class DialogModule {}
