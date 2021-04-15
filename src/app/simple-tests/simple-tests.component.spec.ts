import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTestsComponent } from './simple-tests.component';

describe('SimpleTestsComponent', () => {
  let component: SimpleTestsComponent;
  let fixture: ComponentFixture<SimpleTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTestsComponent ]
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
  })
});
