import { Component } from '@angular/core';

@Component({
    selector: 'fd-extended-menu-example',
    template: `
        <p><b>Toggle button value:</b> {{ toggleValue }}</p>
        <p><b>Sort value:</b> {{ sortValue | json }}</p>
        <p><b>Text input value:</b> {{ textValue | json }}</p>
        <button fd-button label="Extended items" [fdMenu]="true" [fdMenuTrigger]="extendedMenu"></button>

        <fd-menu #extendedMenu>
            <li fd-menu-item>
                <button fd-menu-interactive toggle [(ngModel)]="toggleValue">
                    <span fd-menu-title>Toggle button</span>
                </button>
            </li>

            <li fd-menu-item fdMenuSegmentedButtonHeader [(ngModel)]="sortValue">
                <button fd-menu-interactive>
                    <fd-menu-addon position="before" glyph="sort"></fd-menu-addon>
                    <span fd-menu-title>Sort</span>
                </button>
            </li>

            <li fd-menu-item fdMenuSegmentedButtonOption value="asc">
                <button fd-menu-interactive>
                    <span fd-menu-title>Ascending</span>
                </button>
            </li>

            <li fd-menu-item fdMenuSegmentedButtonOption value="desc">
                <button fd-menu-interactive>
                    <span fd-menu-title>Descending</span>
                </button>
            </li>

            <li fd-menu-item fdMenuSegmentedButtonOption [value]="null">
                <button fd-menu-interactive>
                    <span fd-menu-title>None</span>
                </button>
            </li>
            <li fd-menu-item>
                <div fd-menu-interactive>
                    <input
                        fd-form-control
                        fd-menu-item-input
                        [(ngModel)]="textValue"
                        type="text"
                        id="extendedMenuInputMenuItem"
                        placeholder="Field placeholder text"
                    />
                </div>
            </li>
        </fd-menu>
    `
})
export class ExtendedMenuExampleComponent {
    toggleValue = false;
    sortValue: 'asc' | 'desc' | null = null;
    textValue = '';
}
