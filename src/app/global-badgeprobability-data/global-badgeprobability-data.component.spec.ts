import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBadgeprobabilityDataComponent } from './global-badgeprobability-data.component';

describe('GlobalBadgeprobabilityDataComponent', () => {
  let component: GlobalBadgeprobabilityDataComponent;
  let fixture: ComponentFixture<GlobalBadgeprobabilityDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalBadgeprobabilityDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalBadgeprobabilityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
