import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-intersection-observer-header',
    templateUrl: './intersection-observer-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntersectionObserverHeaderComponent {}
