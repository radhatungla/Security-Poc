import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBadgedataComponent } from './global-badgedata.component';

describe('GlobalBadgedataComponent', () => {
  let component: GlobalBadgedataComponent;
  let fixture: ComponentFixture<GlobalBadgedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalBadgedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalBadgedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
