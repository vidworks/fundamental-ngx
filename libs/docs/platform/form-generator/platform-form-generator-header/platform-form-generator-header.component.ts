import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FocusableGridDirective } from '@fundamental-ngx/cdk/utils';
import { TableModule } from '@fundamental-ngx/core/table';
import {
    DescriptionComponent,
    DocPageComponent,
    HeaderComponent,
    HeaderTabsComponent,
    ImportComponent
} from '@fundamental-ngx/docs/shared';
import { defaultFormGeneratorHintOptions } from '@fundamental-ngx/platform/form';

@Component({
    selector: 'fd-platform-form-generator-header',
    templateUrl: './platform-form-generator-header.component.html',
    standalone: true,
    imports: [
        DocPageComponent,
        HeaderComponent,
        DescriptionComponent,
        FocusableGridDirective,
        TableModule,
        NgFor,
        ImportComponent,
        HeaderTabsComponent
    ]
})
export class PlatformFormGeneratorHeaderComponent {
    defaultHintOptions = Object.keys(defaultFormGeneratorHintOptions).map((propName) => [
        propName,
        JSON.stringify(defaultFormGeneratorHintOptions[propName])
    ]);
    Elementtype = [
        ['input', 'placeholder, message', 'specifies an input field where the user can enter data.'],
        ['multi-input', 'placeholder', 'is an input with multiple selection enabled.'],
        ['number', 'controlType="number", placeholder', 'pecifies an input field where the user can enter a number'],
        ['password:', 'controlType="number"', 'ospecifies an input field where the user can enter a password.'],
        [
            'checkbox',
            'choices: () => ["choices"]',
            'specifies square boxes which are ticked (checked) when the user select one or more options.'
        ],
        ['radio', 'choices: ["choices"]', 'allows the user to see all options and select one'],
        ['editor', '', 'is a text-field area where the user can include a short text.'],
        [
            'select',
            'choices: ["choices"]',
            'is a combination of select and option components where the list of options is shown in the dropdown format.'
        ],
        ['list', 'choices: ["choices"]', 'shows all the options in the dropdown format.'],
        ['datepicker', ' ', 'is a combination of "input-group", "popover" and "calendar" to select a date.'],
        [
            'switch',
            'default: false',
            'is used to activate or deactivate an element. The default value of switch is false.'
        ]
    ];
}
