import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IconModule } from '@fundamental-ngx/core/icon';

import { InfoLabelComponent, LabelType } from './info-label.component';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'fd-test-info-label',
    template: ` <fd-info-label [type]="type" [label]="label" [color]="color" [glyph]="glyph"> </fd-info-label> `
})
class TestInfoLabelComponent {
    @ViewChild(InfoLabelComponent, { static: true, read: ElementRef })
    infoLabelElementRef: ElementRef;

    type: LabelType;
    label: string;
    color: string;
    glyph: string;
}

describe('InfoLabelComponent', () => {
    let infoLabelElementRef: ElementRef;
    let testComponent: TestInfoLabelComponent;
    let fixture: ComponentFixture<TestInfoLabelComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [InfoLabelComponent, TestInfoLabelComponent],
            imports: [IconModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestInfoLabelComponent);
        infoLabelElementRef = fixture.componentInstance.infoLabelElementRef;
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(testComponent).toBeTruthy();
        expect(infoLabelElementRef).toBeTruthy();
    });

    it('Should add numeric label type', () => {
        testComponent.type = 'numeric';
        fixture.detectChanges();
        expect(infoLabelElementRef.nativeElement.classList.contains('fd-info-label--numeric')).toBe(true);
    });

    it('Should add icon label type', () => {
        testComponent.type = 'icon';
        fixture.detectChanges();
        expect(infoLabelElementRef.nativeElement.classList.contains('fd-info-label--icon')).toBe(true);
    });

    it('Should add accent color', () => {
        testComponent.color = '2';
        fixture.detectChanges();
        expect(infoLabelElementRef.nativeElement.classList.contains('fd-info-label--accent-color-2')).toBe(true);
    });

    it('Should add icon', () => {
        testComponent.glyph = 'future';
        fixture.detectChanges();
        const iconElement = fixture.nativeElement.querySelector('fd-icon');

        expect(iconElement).toBeTruthy();
        expect(iconElement.classList.contains('sap-icon--future')).toBe(true);
    });

    it('Should display label', () => {
        const label = 'Test label';
        testComponent.label = label;
        fixture.detectChanges();

        const labelTextElement = fixture.nativeElement.querySelector('.fd-info-label__text');

        expect(labelTextElement).toBeTruthy();
        expect(labelTextElement.textContent.trim()).toBe(label);
    });
});
