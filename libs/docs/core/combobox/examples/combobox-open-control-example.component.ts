import { Component } from '@angular/core';
import { ComboboxModule } from '@fundamental-ngx/core/combobox';
import { FormItemComponent, FormLabelComponent } from '@fundamental-ngx/core/form';

@Component({
    selector: 'fd-combobox-open-control-example',
    templateUrl: './combobox-open-control-example.component.html',
    standalone: true,
    imports: [FormItemComponent, FormLabelComponent, ComboboxModule]
})
export class ComboboxOpenControlExampleComponent {
    dropdownValues = ['Apple', 'Pineapple', 'Banana', 'Kiwi', 'Strawberry'];

    handleIsOpenChange(isOpen: boolean): void {
        if (isOpen) {
            alert('Combobox Opened');
        } else {
            alert('Combobox Closed');
        }
    }
}
