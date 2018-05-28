import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDataComponent } from './week-data.component';

describe('WeekDataComponent', () => {
  let component: WeekDataComponent;
  let fixture: ComponentFixture<WeekDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
