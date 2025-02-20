import { Component } from '@angular/core';
import { ActionSheetModule } from '@fundamental-ngx/core/action-sheet';
import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { FeedListItemModule } from '@fundamental-ngx/core/feed-list-item';

@Component({
    selector: 'fd-fli-mobile-example',
    templateUrl: './fli-mobile-example.component.html',
    standalone: true,
    imports: [FeedListItemModule, AvatarModule, ActionSheetModule, ButtonModule, ContentDensityDirective]
})
export class FliMobileExampleComponent {}
