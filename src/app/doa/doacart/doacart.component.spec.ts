import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacartComponent } from './doacart.component';

describe('DoacartComponent', () => {
  let component: DoacartComponent;
  let fixture: ComponentFixture<DoacartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoacartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
