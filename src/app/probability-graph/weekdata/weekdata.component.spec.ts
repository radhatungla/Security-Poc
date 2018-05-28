import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdataComponent } from './weekdata.component';

describe('WeekdataComponent', () => {
  let component: WeekdataComponent;
  let fixture: ComponentFixture<WeekdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
