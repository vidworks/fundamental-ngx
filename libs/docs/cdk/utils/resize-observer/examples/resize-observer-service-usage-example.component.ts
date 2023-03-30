import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ResizeObserverService } from '@fundamental-ngx/cdk/utils';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'fd-resize-observer-service-usage-example',
    template: `
        <div #divElement>This will be the element on which we will observe the resize.</div>
        <p>
            {{ (observer$ | async)?.contentRect | json }}
        </p>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResizeObserverServiceUsageExampleComponent implements AfterViewInit {
    @ViewChild('divElement') divElement: ElementRef<HTMLDivElement>;
    resizeObserverService = inject(ResizeObserverService);
    observer$: Observable<ResizeObserverEntry>;

    ngAfterViewInit(): void {
        console.log(this.divElement);
        this.observer$ = this.resizeObserverService.observe(this.divElement).pipe(map(([entry]) => entry));
        this.observer$.subscribe((entries) => {
            console.log(entries);
        });
    }
}
