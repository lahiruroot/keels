import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoamartComponent } from './doamart.component';

describe('DoamartComponent', () => {
  let component: DoamartComponent;
  let fixture: ComponentFixture<DoamartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoamartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoamartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
