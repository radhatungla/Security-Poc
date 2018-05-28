import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdaydataComponent } from './prodaydata.component';

describe('ProdaydataComponent', () => {
  let component: ProdaydataComponent;
  let fixture: ComponentFixture<ProdaydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdaydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdaydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
