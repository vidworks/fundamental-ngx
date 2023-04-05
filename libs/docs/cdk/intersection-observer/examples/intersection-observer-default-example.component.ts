import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    ElementRef,
    inject,
    AfterViewInit,
    ChangeDetectorRef
} from '@angular/core';
import { DestroyedService, IntersectionObserverService } from '@fundamental-ngx/cdk/utils';
import { takeUntil } from 'rxjs';

@Component({
    template: 'This is rendered with a component',
    standalone: true
})
export class PlaceholderComponent {}

@Component({
    selector: 'fundamental-ngx-intersection-observer-default-example',
    template: `
        <div class="reporting">
            <p>
                item 1 is visible: <span [class.visible]="item1Intersecting">{{ item1Intersecting }}</span>
            </p>
            <p>
                item 2 is visible: <span [class.visible]="item2Intersecting">{{ item2Intersecting }}</span>
            </p>
        </div>
        <div class="item item-1" #item1>
            <span class="label"> item 1 </span>
        </div>
        <div class="item item-2" style="left: 0; right: 0; width: initial" #item2>
            <ng-template [fdkRenderWhenInView]="componentRenderer"></ng-template>
            <ng-template [fdkRenderWhenInView]="templateRef"></ng-template>
            <ng-template fdkRenderWhenInView>
                <div>Bla bla from inline template</div>
            </ng-template>
            <ng-template #templateRef>
                <div>Bla bla from template</div>
            </ng-template>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            :host {
                position: relative;
                display: block;
                height: calc(100vh + 15rem);
            }

            .reporting {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .reporting > p > span {
                display: inline-block;
                padding: 0.5rem;
                background-color: brown;
                color: white;
            }

            .reporting > p > .visible {
                background-color: green;
            }

            .item {
                background-color: brown;
                position: absolute;
                width: 10rem;
                height: 5rem;
            }

            .item > .label {
                line-height: 5rem;
                text-align: center;
                color: white;
                display: block;
            }
            .item.item-1 {
                top: 0;
            }

            .item.item-2 {
                bottom: 0;
            }
        `
    ],
    providers: [DestroyedService]
})
export class IntersectionObserverDefaultExampleComponent implements AfterViewInit {
    intersectionObserverService = inject(IntersectionObserverService);
    destroyed$ = inject(DestroyedService);
    changeDetectorRef = inject(ChangeDetectorRef);
    @ViewChild('item1') item1: ElementRef<HTMLDivElement>;
    @ViewChild('item2') item2: ElementRef<HTMLDivElement>;
    item1Intersecting: boolean;
    item2Intersecting: boolean;

    componentRenderer = () => Promise.resolve(PlaceholderComponent);

    ngAfterViewInit(): void {
        this.intersectionObserverService
            .intersectingEvents(this.item1.nativeElement)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((i) => {
                this.item1Intersecting = i;
                this.changeDetectorRef.detectChanges();
            });
        this.intersectionObserverService
            .intersectingEvents(this.item2.nativeElement)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((i) => {
                this.item2Intersecting = i;
                this.changeDetectorRef.detectChanges();
            });
    }
}
