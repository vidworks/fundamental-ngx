import { Component, ContentChildren, QueryList, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControlComponent } from '@fundamental-ngx/core/form';

import { DEFAULT_CONTENT_DENSITY, RtlService } from '@fundamental-ngx/cdk/utils';
import { whenStable } from '@fundamental-ngx/core/tests';
import { TokenComponent } from './token.component';
import { TokenModule } from './token.module';
import { TokenizerComponent } from './tokenizer.component';

@Component({
    selector: 'fd-tokenizer-test-component',
    template: `
        <fd-tokenizer [fdCompact]="compact">
            <fd-token>Token 1</fd-token>
            <fd-token>Token 2</fd-token>
            <fd-token>Token 3</fd-token>
            <input fd-tokenizer-input fd-form-control />
        </fd-tokenizer>
    `
})
class HostComponent {
    compact: boolean | undefined = undefined;

    @ViewChild(TokenizerComponent) tokenizer: TokenizerComponent;
    @ViewChild(FormControlComponent) formControl: FormControlComponent;

    @ContentChildren(TokenComponent, { read: TokenComponent })
    tokenList: QueryList<TokenComponent>;
}

describe('TokenizerComponent', () => {
    let component: TokenizerComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [TokenModule, FormControlComponent],
            declarations: [HostComponent],
            providers: [RtlService]
        }).compileComponents();
    }));

    beforeEach(async () => {
        fixture = TestBed.createComponent(HostComponent);
        await whenStable(fixture);

        component = fixture.componentInstance.tokenizer;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component._tokenizerHasFocus).toBeFalsy();
    });

    it('should handle content density when compact input is not provided', () => {
        jest.spyOn(component, 'buildComponentCssClass');
        component.ngOnInit();
        expect(component._contentDensityObserver.isCompact).toBe(DEFAULT_CONTENT_DENSITY !== 'cozy');
        expect(component.buildComponentCssClass).toHaveBeenCalled();
    });

    it('should addEventListener to input during ngAfterViewInit and handle keydown', async () => {
        jest.spyOn(component, 'handleKeyDown');
        await whenStable(fixture);
        component.ngAfterViewInit();

        await whenStable(fixture);

        component.input.nativeElement.focus();
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowLeft'
        });
        component.input.nativeElement.dispatchEvent(event);

        await whenStable(fixture);

        expect(component.handleKeyDown).toHaveBeenCalledWith(event, component.tokenList.length);
    });

    it('should handleKeyDown on ArrowLeft when last token is focused', () => {
        jest.spyOn(component.input.nativeElement, 'focus');
        jest.spyOn(component, 'focusTokenElement');
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowLeft'
        });
        component.handleKeyDown(event, component.tokenList.length - 1);

        expect(component.input.nativeElement.focus).not.toHaveBeenCalled();
        expect(component.focusTokenElement).toHaveBeenCalledWith(component.tokenList.length - 2);
    });

    it('should handleKeyDown on ArrowRight when last token is focused', () => {
        jest.spyOn(component.input.nativeElement, 'focus');
        jest.spyOn(component, 'focusTokenElement');
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowRight'
        });
        component.handleKeyDown(event, component.tokenList.length - 1);

        expect(component.input.nativeElement.focus).toHaveBeenCalled();
        expect(component.focusTokenElement).not.toHaveBeenCalled();
    });

    it('should handleKeyDown on ArrowRight when second to last token is focused', () => {
        jest.spyOn(component, 'focusTokenElement');
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowRight'
        });
        component.handleKeyDown(event, component.tokenList.length - 2);

        expect(component.focusTokenElement).toHaveBeenCalledWith(component.tokenList.length - 1);
    });

    it('should select using control or command', () => {
        const event = new MouseEvent('click', {
            ctrlKey: true
        });
        component.ngAfterViewInit();
        (component.tokenList.first.elementRef.nativeElement.querySelector('.fd-token') as HTMLElement).dispatchEvent(
            event
        );
        (component.tokenList.last.elementRef.nativeElement.querySelector('.fd-token') as HTMLElement).dispatchEvent(
            event
        );

        expect(component.tokenList.first.selected).toBeTruthy();
        expect(component.tokenList.last.selected).toBeTruthy();
    });

    it('should deselect using control or command', () => {
        component.ngAfterViewInit();
        const event = new MouseEvent('click', {
            ctrlKey: true
        });
        (component.tokenList.first.elementRef.nativeElement.querySelector('.fd-token') as HTMLElement).dispatchEvent(
            event
        );
        (component.tokenList.last.elementRef.nativeElement.querySelector('.fd-token') as HTMLElement).dispatchEvent(
            event
        );
        (component.tokenList.last.elementRef.nativeElement.querySelector('.fd-token') as HTMLElement).dispatchEvent(
            event
        );

        expect(component.tokenList.first.selected).toBeTruthy();
        expect(component.tokenList.last.selected).toBeFalsy();
    });

    it('should select using shift', () => {
        component.ngAfterViewInit();
        const event = new MouseEvent('click', {
            ctrlKey: false,
            shiftKey: true
        });
        (component.tokenList.first.elementRef.nativeElement.querySelector('.fd-token') as HTMLElement).dispatchEvent(
            event
        );

        expect(component.tokenList.first.selected).toBeTruthy();
    });

    it('should focus a token element', async () => {
        component.tokenList.forEach((token) =>
            jest.spyOn(token.elementRef.nativeElement.querySelector('.fd-token'), 'focus')
        );
        jest.spyOn(component, 'handleKeyDown');

        component.focusTokenElement(1);

        await whenStable(fixture);
        await fixture.whenRenderingDone();

        const elementToCheck = component.tokenList
            .filter((element, index) => index === 1)[0]
            .elementRef.nativeElement.querySelector('.fd-token');
        expect(elementToCheck.focus).toHaveBeenCalled();
    });

    it('should handle resize - getting smaller', () => {
        fixture.componentInstance.compact = true;
        fixture.detectChanges();
        jest.spyOn(component.elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({ width: 1 });
        jest.spyOn(component, 'getCombinedTokenWidth').mockReturnValue(2);
        component.previousElementWidth = 2;
        component.onResize();
        component.moreTokensLeft.length = 0;
        component.onResize();

        component.tokenList.forEach((token) => {
            expect(token.elementRef.nativeElement.style.display).toBe('none');
        });
        expect(component.moreTokensLeft.length).toBe(3);
        expect(component.previousElementWidth).toBe(1);
    });

    it('should handle resize - getting bigger', () => {
        fixture.componentInstance.compact = true;
        fixture.detectChanges();
        // need to collapse the tokens before running expand
        jest.spyOn(component.elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({ width: 1 });
        jest.spyOn(component, 'getCombinedTokenWidth').mockReturnValue(2);
        component.onResize();
        component.elementRef.nativeElement.getBoundingClientRect.mockReturnValue({ width: 3 });
        component.previousElementWidth = 1;
        component.onResize();

        expect(component.previousElementWidth).toBe(3);
        component.tokenList.forEach((token) => {
            expect(token.elementRef.nativeElement.style.display).toBe('inline-block');
        });
    });

    it('should handle resize - getting bigger', () => {
        fixture.componentInstance.compact = true;
        fixture.detectChanges();
        // need to collapse the tokens before running expand
        jest.spyOn(component.elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({ width: 1 });
        jest.spyOn(component, 'getCombinedTokenWidth').mockReturnValue(2);
        component.onResize();
        component.elementRef.nativeElement.getBoundingClientRect.mockReturnValue({ width: 3 });
        component.previousElementWidth = 1;
        component.onResize();

        expect(component.previousElementWidth).toBe(3);
        component.tokenList.forEach((token) => {
            expect(token.elementRef.nativeElement.style.display).toBe('inline-block');
        });
        expect(component.moreTokensLeft.length).toBe(0);
    });

    it('should get the combined token width', () => {
        component.tokenList.forEach((token) => {
            jest.spyOn(token.tokenWrapperElement.nativeElement, 'getBoundingClientRect').mockReturnValue({ width: 1 });
        });
        jest.spyOn(component.input.nativeElement, 'getBoundingClientRect').mockReturnValue({ width: 1 } as DOMRect);
    });

    it('should handle resize', () => {
        jest.spyOn(component.elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({ width: 1 });

        component.onResize();

        expect(component.previousElementWidth).toBe(1);
    });

    it('should get the hidden cozy token count AfterViewChecked', async () => {
        fixture.componentInstance.compact = false;

        jest.spyOn(component.elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({ left: 1 });
        component.tokenList.forEach((token) => {
            jest.spyOn(token.tokenWrapperElement.nativeElement, 'getBoundingClientRect').mockReturnValue({ right: 0 });
        });
        jest.spyOn(component.tokenizerInnerEl.nativeElement, 'scrollWidth', 'get').mockReturnValue(5);

        component.ngAfterViewInit();

        await whenStable(fixture);

        expect(component.hiddenCozyTokenCount).toBe(3);
    });
});
