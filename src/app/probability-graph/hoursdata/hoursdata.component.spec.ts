import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursdataComponent } from './hoursdata.component';

describe('HoursdataComponent', () => {
  let component: HoursdataComponent;
  let fixture: ComponentFixture<HoursdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
