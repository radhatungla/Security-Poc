import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaydataComponent } from './daydata.component';

describe('DaydataComponent', () => {
  let component: DaydataComponent;
  let fixture: ComponentFixture<DaydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
