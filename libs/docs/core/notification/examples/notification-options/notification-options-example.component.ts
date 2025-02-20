import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ActionSheetComponent, ActionSheetModule } from '@fundamental-ngx/core/action-sheet';
import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { MessageStripComponent } from '@fundamental-ngx/core/message-strip';
import { MessageToastModule, MessageToastService } from '@fundamental-ngx/core/message-toast';
import { NotificationModule } from '@fundamental-ngx/core/notification';

@Component({
    selector: 'fd-notification-options-example',
    templateUrl: './notification-options-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NotificationModule,
        AvatarModule,
        ButtonModule,
        MessageStripComponent,
        ActionSheetModule,
        MessageToastModule
    ]
})
export class NotificationOptionsExampleComponent {
    @ViewChild(ActionSheetComponent)
    actionSheetComponent: ActionSheetComponent;

    expanded = true;

    constructor(private _messageToastService: MessageToastService) {}

    actionPicked(action: string): void {
        this.openMessageToast(action);
        this.actionSheetComponent.close();
    }

    openMessageToast(action: string): void {
        const content = `${action} action performed`;
        this._messageToastService.open(content, {
            duration: 2000
        });
    }
}
