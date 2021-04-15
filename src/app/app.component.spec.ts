import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SimpleTestsComponent } from './simple-tests/simple-tests.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                SimpleTestsComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const appComponent = fixture.componentInstance;
        expect(appComponent).toBeTruthy();
    });
});
