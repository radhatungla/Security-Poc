import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProweekdataComponent } from './proweekdata.component';

describe('ProweekdataComponent', () => {
  let component: ProweekdataComponent;
  let fixture: ComponentFixture<ProweekdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProweekdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProweekdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
