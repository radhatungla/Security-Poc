import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePieChartComponent } from './badge-pie-chart.component';

describe('BadgePieChartComponent', () => {
  let component: BadgePieChartComponent;
  let fixture: ComponentFixture<BadgePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
