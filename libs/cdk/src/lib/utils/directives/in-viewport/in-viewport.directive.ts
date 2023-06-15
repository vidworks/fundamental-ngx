import { Directive, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { DestroyedService } from '../../services/destroyed.service';
import { intersectionObservable } from '../../functions/intersection-observable';

@Directive({
    selector: '[fdkInViewport]',
    standalone: true,
    providers: [DestroyedService]
})
export class InViewportDirective {
    /**
     * Configuration for the intersection observer.
     */

    @Input()
    viewportOptions: IntersectionObserverInit;

    @Output('fdkInViewport')
    inViewPort = new EventEmitter<boolean>();

    @Output()
    intersectionEntry = new EventEmitter<IntersectionObserverEntry>();

    /** @hidden */
    private readonly _destroy$ = inject(DestroyedService);

    /** @hidden */
    private readonly _elementRef = inject(ElementRef);

    /** @hidden */
    ngOnInit(): void {
        intersectionObservable(this._elementRef.nativeElement, this.viewportOptions).pipe(
            map((entries) => entries[0]),
            takeUntil(this._destroy$)
        ).subscribe((entry) => {
            this.inViewPort.emit(entry.isIntersecting);
            this.intersectionEntry.emit(entry);
        });
    }
}
