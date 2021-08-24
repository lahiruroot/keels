import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeelsmartComponent } from './keelsmart.component';

describe('KeelsmartComponent', () => {
  let component: KeelsmartComponent;
  let fixture: ComponentFixture<KeelsmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeelsmartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeelsmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
