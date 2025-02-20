import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { OverflowLayoutModule } from '@fundamental-ngx/core/overflow-layout';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item.component';
import { IconModule } from '@fundamental-ngx/core/icon';
import { PopoverModule } from '@fundamental-ngx/core/popover';
import { MenuModule } from '@fundamental-ngx/core/menu';
import { LinkModule } from '@fundamental-ngx/core/link';
import { PortalModule } from '@angular/cdk/portal';
import { PipeModule } from '@fundamental-ngx/cdk/utils';
import { ContentDensityModule } from '@fundamental-ngx/core/content-density';
import { I18nModule } from '@fundamental-ngx/i18n';

@NgModule({
    imports: [
        CommonModule,
        IconModule,
        PopoverModule,
        MenuModule,
        LinkModule,
        PortalModule,
        PipeModule,
        ContentDensityModule,
        OverflowLayoutModule,
        ButtonModule,
        I18nModule
    ],
    exports: [BreadcrumbComponent, BreadcrumbItemComponent, LinkModule, ContentDensityModule],
    declarations: [BreadcrumbComponent, BreadcrumbItemComponent]
})
export class BreadcrumbModule {}
