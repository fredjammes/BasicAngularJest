import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTestsComponent } from './simple-tests.component';

describe('SimpleTestsComponent', () => {
    let component: SimpleTestsComponent;
    let fixture: ComponentFixture<SimpleTestsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SimpleTestsComponent]
        })
                     .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleTestsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display \'A simple title\'', () => {
        expect(component.title).toBe('A simple title');
    });

    it('should display \'Another simple title\' when button is clicked', () => {
        component.changeTitle();
        expect(component.title).toBe('Another simple title');
    });

    test.each<[boolean, boolean, boolean]>([
        [true, true, true],
        [false, true, false],
        [true, false, false],
        [false, false, false]
    ])(
        'Array : When isFirstSwitchOn is %p and isSecondSwitch is %p, expectedIsReadyToGo should be %p',
        (isFirstSwitchOn: boolean, isSecondSwitch: boolean, expectedIsReadyToGo: boolean) => {
            component.isFirstSwitchOn = isFirstSwitchOn;
            component.isSecondSwitchOn = isSecondSwitch;
            expect(component.isReadyToGo).toBe(expectedIsReadyToGo);
        }
    );

    test.each`
    isFirstSwitchOn | isSecondSwitch  | expectedIsReadyToGo
    ${true}         | ${true}         | ${true}
    ${false}        | ${true}         | ${false}
    ${true}         | ${false}        | ${false}
    ${false}        | ${false}        | ${false}
    `(
        `Template Literal : When isFirstSwitchOn is $isFirstSwitchOn and isSecondSwitch is $isSecondSwitch, expectedIsReadyToGo should be $expectedIsReadyToGo`,
        (
            { isFirstSwitchOn, isSecondSwitch, expectedIsReadyToGo }:
                { isFirstSwitchOn: boolean, isSecondSwitch: boolean, expectedIsReadyToGo: boolean }
        ) => {
            component.isFirstSwitchOn = isFirstSwitchOn;
            component.isSecondSwitchOn = isSecondSwitch;
            expect(component.isReadyToGo).toBe(expectedIsReadyToGo);
        }
    );
});
