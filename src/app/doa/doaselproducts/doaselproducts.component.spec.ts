import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoaselproductsComponent } from './doaselproducts.component';

describe('DoaselproductsComponent', () => {
  let component: DoaselproductsComponent;
  let fixture: ComponentFixture<DoaselproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoaselproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoaselproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
