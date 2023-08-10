import { Component, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { DialogService } from '@fundamental-ngx/core/dialog';
import { animate, style, transition, trigger, state } from '@angular/animations';

const defaults = {
    delayEnter: '200ms',
    delayLeave: '0ms',
    timingEnter: '500ms',
    timingLeave: '400ms'
};

@Component({
    selector: 'fd-dialog-swipe-example',
    templateUrl: './dialog-swipe-example.component.html',
    styleUrls: ['./dialog-swipe-example.component.scss'],
    animations: [
        trigger('inRTL', [
            state('in', style({ transform: 'translate(0)' })),
            transition(
                ':enter',
                [style({ transform: 'translate(100vw)' }), animate('{{timingEnter}} {{delayEnter}} ease-in-out')],
                { params: { delayEnter: defaults.delayEnter, timingEnter: defaults.timingEnter } }
            )
        ]),
        trigger('outRTL', [
            state('in', style({ transform: 'translate(0)' })),
            transition(
                ':leave',
                [
                    style({ transform: 'translate(0)' }),
                    animate('{{timingLeave}} {{delayLeave}} ease-in-out', style({ transform: 'translateX(-100vw)' }))
                ],
                { params: { delayLeave: defaults.delayLeave, timingLeave: defaults.timingLeave } }
            )
        ]),
        trigger('outQuickRTL', [
            state('in', style({ transform: 'translate(0)' })),
            transition(
                ':leave',
                [
                    style({ transform: 'translate(0)' }),
                    animate('{{timingLeave}} {{delayLeave}} ease-in-out', style({ transform: 'translateX(-100vw)' }))
                ],
                { params: { delayLeave: '100ms', timingLeave: '100ms' } }
            )
        ]),
        trigger('inSlowRTL', [
            state('in', style({ transform: 'translate(0)' })),
            transition(':enter', [style({ transform: 'translate(100vw)' }), animate('1s 200ms ease-in-out')])
        ])
    ]
})
export class DialogSwipeExampleComponent {
    elementSelected: boolean = false;
    elementArr: number[] = [1, 2, 3, 4, 5];
    dialogTitle: string = 'Swipe Dialog';

    @ViewChild('Cont') container: ElementRef;

    constructor(private _dialogService: DialogService) {}

    openDialog(dialog: TemplateRef<any>): void {
        const dialogRef = this._dialogService.open(dialog, {
            width: '700px',
            height: '500px',
            draggable: true,
            verticalPadding: false
        });
    }

    openNewElement() {
        this.container.nativeElement.innerHTML = `<fd-dialog-body>
        <div
            class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--vertical fd-form-group"
        >
            <div class="fd-row fd-form-item">
                <div class="fd-col">
                    <label class="fd-form-label" for="input-2224-title">Title:</label>
                </div>
                <div class="fd-col">
                    <input
                        class="fd-input"
                        type="text"
                        id="input-2224-title"
                        placeholder="More Pineapple facts"
                        value="More Pineapple facts"
                    />
                </div>
            </div>
            <div class="fd-row fd-form-item">
                <div class="fd-col">
                    <label class="fd-form-label" for="text-2434-info">Fact:</label>
                </div>
                <div class="fd-col">
                    <textarea class="fd-textarea" id="text-2434-info">textarea</textarea>
                </div>
            </div>
        </div>
    </fd-dialog-body`;
        this.elementSelected = true;
        this.dialogTitle = 'New Element';
    }

    openElement(numb: number) {
        this.container.nativeElement.innerHTML = ` The natural (or most common) pollinator of the pineapple is the hummingbird. Pollination is required for
        seed formation; the presence of seeds negatively affects the quality of the fruit. In Hawaii, where
        pineapple is cultivated on an agricultural scale, importation of hummingbirds is prohibited for this
        reason.
        The natural (or most common) pollinator of the pineapple is the hummingbird. Pollination is required for
        seed formation; the presence of seeds negatively affects the quality of the fruit. In Hawaii, where
        pineapple is cultivated on an agricultural scale, importation of hummingbirds is prohibited for this
        reason. `;
        this.elementSelected = true;
        this.dialogTitle = 'Element ' + numb;
    }

    returnToMain() {
        this.dialogTitle = 'Swipe Dialog';
        this.container.nativeElement.innerHTML = ``;
        this.elementSelected = false;
    }
}
