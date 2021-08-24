import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoahomeComponent } from './doahome.component';

describe('DoahomeComponent', () => {
  let component: DoahomeComponent;
  let fixture: ComponentFixture<DoahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoahomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
