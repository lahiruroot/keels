import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcontrolComponent } from './mapcontrol.component';

describe('MapcontrolComponent', () => {
  let component: MapcontrolComponent;
  let fixture: ComponentFixture<MapcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
