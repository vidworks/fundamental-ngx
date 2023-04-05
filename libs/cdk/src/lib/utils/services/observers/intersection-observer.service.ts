import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

interface CachedObserver {
    observer: IntersectionObserver;
    readonly stream: Observable<IntersectionObserverEntry[]>;
    count: number;
    unsubscribe: () => void;
}

@Injectable({
    providedIn: 'root'
})
export class IntersectionObserverService {
    /** @hidden */
    private _observers: Array<[IntersectionObserverInit, CachedObserver]> = [];

    /**
     * Creates a new IntersectionObserver and returns an Observable that emits the
     * intersection change events.
     */
    observe(target: Element, options?: IntersectionObserverInit): Observable<IntersectionObserverEntry | undefined> {
        const observer = this._getObserver(options);
        return this._getElementObserver(observer, target);
    }

    /**
     * Similar to `observe`, but emits a boolean value indicating whether the target
     * is intersecting with the root with the given options.
     * */
    intersectingEvents(target: Element, options?: IntersectionObserverInit): Observable<boolean> {
        return this.observe(target, options).pipe(map((entry) => !!entry?.isIntersecting));
    }

    /** @hidden */
    private _getElementObserver(
        observer: CachedObserver,
        target: Element
    ): Observable<IntersectionObserverEntry | undefined> {
        return new Observable<IntersectionObserverEntry>((subscriber) => {
            const streamSubscription = observer.stream
                .pipe(map((entries) => entries.find((entry) => entry.target === target)))
                .subscribe(subscriber);
            observer.observer.observe(target);
            return () => {
                streamSubscription.unsubscribe();
                observer.observer.unobserve(target);
                observer.count--;
                if (observer.count === 0) {
                    observer.unsubscribe();
                }
            };
        });
    }

    /** @hidden */
    private _getObserver(
        options: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }
    ): CachedObserver {
        for (const [cachedOptions, cachedObserver] of this._observers) {
            if (
                cachedOptions === options ||
                (cachedOptions.root === options?.root &&
                    cachedOptions.rootMargin === options?.rootMargin &&
                    cachedOptions.threshold === options?.threshold)
            ) {
                cachedObserver.count++;
                return cachedObserver;
            }
        }
        const stream = new Subject<IntersectionObserverEntry[]>();
        const observer = new IntersectionObserver((entries) => {
            stream.next(entries);
        }, options);
        const index = this._observers.length;
        const cacheEntry = {
            observer,
            stream: stream.asObservable(),
            count: 1,
            unsubscribe: () => {
                observer.disconnect();
                stream.complete();
                this._observers = this._observers.filter((_, i) => i !== index);
            }
        };
        this._observers = [...this._observers, [options, cacheEntry]];
        return cacheEntry;
    }
}
