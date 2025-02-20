import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    DATE_TIME_FORMATS,
    DatetimeAdapter,
    FD_DATETIME_FORMATS,
    FdDate,
    FdDatetimeAdapter
} from '@fundamental-ngx/core/datetime';
import { PlatformDatetimePickerComponent } from '@fundamental-ngx/platform/form';

@Component({
    selector: 'fdp-platform-datetime-picker-update-on-blur-example',
    template: `<label for="update-on-blur">Datetime picker:</label>
        <fdp-datetime-picker
            name="update-on-blur"
            placeholder="MM/dd/YYYY, hh:mm aa"
            [(ngModel)]="date"
            [processInputOnBlur]="true"
        ></fdp-datetime-picker>
        <br />
        <div>Selected Date: {{ date.toDate() | date : 'MM/dd/YYYY, hh:mm aa' }}</div> `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // Note that this is usually provided in the root of your application.
        // Due to the limit of this example we must provide it on this level.
        {
            provide: DatetimeAdapter,
            useClass: FdDatetimeAdapter
        },
        {
            provide: DATE_TIME_FORMATS,
            useValue: FD_DATETIME_FORMATS
        }
    ],
    standalone: true,
    imports: [PlatformDatetimePickerComponent, FormsModule, DatePipe]
})
export class PlatformDatetimePickerUpdateOnBlurExampleComponent {
    date = new FdDate(2020, 11, 27, 14, 30);
}
