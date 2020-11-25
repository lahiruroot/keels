import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoalogComponent } from './doalog.component';

describe('DoalogComponent', () => {
  let component: DoalogComponent;
  let fixture: ComponentFixture<DoalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
