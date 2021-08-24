import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoaproductsComponent } from './doaproducts.component';

describe('DoaproductsComponent', () => {
  let component: DoaproductsComponent;
  let fixture: ComponentFixture<DoaproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoaproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoaproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
