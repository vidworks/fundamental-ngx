import {
    AfterViewInit,
    Component,
    ComponentRef,
    Directive,
    ElementRef,
    EmbeddedViewRef,
    inject,
    Injector,
    Input,
    Renderer2,
    TemplateRef,
    Type,
    ViewContainerRef
} from '@angular/core';
import { IntersectionObserverService } from '../services/observers/intersection-observer.service';
import { combineLatest, map, Observable, of, ReplaySubject, switchMap, takeUntil, tap } from 'rxjs';
import { DestroyedService } from '../services';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

@Component({
    template: ` <ng-content></ng-content>`,
    standalone: true
})
export class PlaceholderComponent {
    /** @hidden */
    readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

    /** @hidden */
    readonly renderer = inject(Renderer2);

    /** @hidden */
    createTag(tagName: string): void {
        console.log({ tagName });
        const element = this.renderer.createElement(tagName);

        this.elementRef.nativeElement.appendChild(element);
    }
}

type CanBeLazilyLoaded<T> = T | (() => Promise<T>);

function isLazyLoader(templateOrComponent: any): templateOrComponent is () => Promise<Type<any> | TemplateRef<any>> {
    try {
        return typeof templateOrComponent === 'function' && typeof templateOrComponent().then === 'function';
    } catch (e) {
        return false;
    }
}

@Directive({
    selector: '[fdkRenderWhenInView]',
    standalone: true,
    providers: [DestroyedService]
})
export class RenderWhenInViewDirective<C = unknown> implements AfterViewInit {
    /** @hidden */
    @Input()
    set fdkRenderWhenInView(templateOrComponent: CanBeLazilyLoaded<Type<C> | TemplateRef<C>> | '') {
        if (templateOrComponent === '') {
            this._realElementRender$.next(this.templateRef);
        } else {
            this._realElementRender$.next(templateOrComponent);
        }
    }

    /** @hidden */
    @Input()
    fdkRenderWhenInViewOptions: IntersectionObserverInit = {};

    /** @hidden */
    private _realElementRender$ = new ReplaySubject<CanBeLazilyLoaded<Type<C> | TemplateRef<C>>>(1);
    /** @hidden */
    private readonly _intersectionObserverService = inject(IntersectionObserverService);
    /** @hidden */
    private readonly _destroyedService = inject(DestroyedService);

    /** @hidden */
    private placeholderComponentRef?: ComponentRef<PlaceholderComponent>;

    /** @hidden */
    private templateViewRef?: EmbeddedViewRef<any> | ComponentRef<C>;

    /** @hidden */
    private _element$ = new ReplaySubject<{ el: HTMLElement | HTMLElement[]; type: 'placeholder' | 'real' }>(1);

    /** @hidden */
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _injector: Injector
    ) {
        this.renderPlaceholder();
    }

    /** @hidden */
    ngAfterViewInit(): void {
        this._element$
            .pipe(
                switchMap(({ el, type }) =>
                    this.getIntersectionObserverIntersectingEvents(el).pipe(
                        switchMap((isVisible) => {
                            if (isVisible) {
                                if (type === 'placeholder') {
                                    return this._realElementRender$.pipe(
                                        switchMap((templateOrComponent) => {
                                            if (isLazyLoader(templateOrComponent)) {
                                                return fromPromise(templateOrComponent());
                                            }
                                            return of(templateOrComponent);
                                        }),
                                        tap((templateOrComponent: any) => {
                                            this.renderRealElement(templateOrComponent);
                                        })
                                    );
                                }
                            }
                            return of(void 0);
                        })
                    )
                ),
                takeUntil(this._destroyedService)
            )
            .subscribe();
    }

    /** @hidden */
    private getIntersectionObserverIntersectingEvents(el: HTMLElement | HTMLElement[]): Observable<boolean> {
        if (!Array.isArray(el)) {
            return this._intersectionObserverService.intersectingEvents(el);
        }
        return combineLatest(el.map((e) => this._intersectionObserverService.intersectingEvents(e))).pipe(
            map((values) => values.some((v) => v))
        );
    }

    /** @hidden */
    private renderPlaceholder(): void {
        if (!this.placeholderComponentRef) {
            this.viewContainer.clear();
            this.placeholderComponentRef = this.viewContainer.createComponent(PlaceholderComponent);
            this._element$.next({
                el: this.placeholderComponentRef.instance.elementRef.nativeElement,
                type: 'placeholder'
            });
            this.viewContainer.insert(this.placeholderComponentRef.hostView);
            this.placeholderComponentRef.instance.createTag((this._injector as any)._tNode.value as string);
            this.templateViewRef?.destroy();
            this.templateViewRef = void 0;
        }
    }

    /** @hidden */
    private renderRealElement(element: TemplateRef<any> | Type<C>): void {
        if (!this.templateViewRef) {
            this.viewContainer.clear();
            if (element instanceof TemplateRef) {
                this.templateViewRef = this.viewContainer.createEmbeddedView(element);
                this._element$.next({ el: this.templateViewRef.rootNodes, type: 'real' });
            } else {
                this.templateViewRef = this.viewContainer.createComponent(element);
                this._element$.next({ el: this.templateViewRef.injector.get(ElementRef).nativeElement, type: 'real' });
            }
            this.placeholderComponentRef?.destroy();
            this.placeholderComponentRef = void 0;
        }
    }
}
