import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeheatmapComponent } from './badgeheatmap.component';

describe('BadgeheatmapComponent', () => {
  let component: BadgeheatmapComponent;
  let fixture: ComponentFixture<BadgeheatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeheatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeheatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
