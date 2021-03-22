import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const appComponent = fixture.componentInstance;
        expect(appComponent).toBeTruthy();
    });

    test(`should have as title 'BasicAngularJest'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const appComponent = fixture.componentInstance;
        expect(appComponent.title).toEqual('BasicAngularJest');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('BasicAngularJest app is running!');
    });
});
