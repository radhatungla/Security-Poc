import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnheatmapComponent } from './vpnheatmap.component';

describe('VpnheatmapComponent', () => {
  let component: VpnheatmapComponent;
  let fixture: ComponentFixture<VpnheatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnheatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpnheatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
