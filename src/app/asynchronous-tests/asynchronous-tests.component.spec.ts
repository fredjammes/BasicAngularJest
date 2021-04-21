import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AsynchronousTestsComponent } from './asynchronous-tests.component';
import { GetAllPeople } from './get-all-people';
import { Person } from './person';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('AsynchronousTestsComponent', () => {
    const expectedPersons = [
        {
            name: 'name 1',
            firstname: 'firstname 1'
        },
        {
            name: 'name 2',
            firstname: 'firstname 2'
        },
        {
            name: 'name 3',
            firstname: 'firstname 3'
        },
    ];
    let component: AsynchronousTestsComponent;
    let fixture: ComponentFixture<AsynchronousTestsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AsynchronousTestsComponent],
            providers: [
                {
                    provide: GetAllPeople,
                    useFactory: (): GetAllPeople => ({
                        getAll(): Observable<Person[]> {
                            return of(expectedPersons).pipe(delay(10));
                        }
                    })
                }
            ]

        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AsynchronousTestsComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fill the persons array', fakeAsync(
        () => {
            fixture.detectChanges();
            tick(11);
            expect(component.people).toStrictEqual(expectedPersons);
        })
    );
});
