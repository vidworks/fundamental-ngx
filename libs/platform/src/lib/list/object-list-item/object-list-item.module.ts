import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { CheckboxModule } from '@fundamental-ngx/core/checkbox';
import { FormModule } from '@fundamental-ngx/core/form';
import { IconModule } from '@fundamental-ngx/core/icon';
import { ListModule } from '@fundamental-ngx/core/list';
import { PipeModule } from '@fundamental-ngx/cdk/utils';
import { ObjectIdentifierModule } from '@fundamental-ngx/core/object-identifier';
import { ObjectMarkerModule } from '@fundamental-ngx/core/object-marker';
import { ObjectNumberModule } from '@fundamental-ngx/core/object-number';
import { RadioModule } from '@fundamental-ngx/core/radio';
import { PlatformLinkModule } from '@fundamental-ngx/platform/link';
import { PlatformObjectStatusModule } from '@fundamental-ngx/platform/object-status';
import { PlatformObjectAttributeModule } from '@fundamental-ngx/platform/object-attribute';
import { ObjectListItemComponent } from './object-list-item.component';
import { ObjectListItemRowComponent } from './object-list-item-row.component';
import { I18nModule } from '@fundamental-ngx/i18n';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ContentDensityModule } from '@fundamental-ngx/core/content-density';

@NgModule({
    declarations: [ObjectListItemComponent, ObjectListItemRowComponent],
    imports: [
        CommonModule,
        IconModule,
        FormsModule,
        FormModule,
        ListModule,
        PipeModule,
        PlatformLinkModule,
        RouterModule,
        AvatarModule,
        PlatformObjectStatusModule,
        CheckboxModule,
        RadioModule,
        I18nModule,
        ObjectMarkerModule,
        ObjectNumberModule,
        ObjectIdentifierModule,
        PlatformObjectAttributeModule,
        ButtonModule,
        ContentDensityModule
    ],
    exports: [ObjectListItemComponent, ObjectListItemRowComponent, ContentDensityModule]
})
export class ObjectListItemModule {}
