import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhourDataComponent } from './prohour-data.component';

describe('ProhourDataComponent', () => {
  let component: ProhourDataComponent;
  let fixture: ComponentFixture<ProhourDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhourDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhourDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
