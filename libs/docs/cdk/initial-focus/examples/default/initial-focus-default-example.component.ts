import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InitialFocusDirective } from '@fundamental-ngx/cdk/utils';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { FormControlModule, FormItemComponent, FormLabelComponent } from '@fundamental-ngx/core/form';
import { LinkComponent } from '@fundamental-ngx/core/link';

@Component({
    selector: 'fdk-initial-focus-default-example',
    templateUrl: './initial-focus-default-example.component.html',
    styles: [
        `
            .fdk-initial-focus-control-buttons .fd-button {
                margin: 0.375rem;
            }

            .fdk-initial-focus-examples {
                margin: 0.375rem;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        ButtonModule,
        NgIf,
        InitialFocusDirective,
        LinkComponent,
        RouterLink,
        FormItemComponent,
        FormLabelComponent,
        FormControlModule
    ]
})
export class InitialFocusDefaultExampleComponent {
    currentExample: string;

    showExample(example: string): void {
        this.currentExample = example;
    }
}
