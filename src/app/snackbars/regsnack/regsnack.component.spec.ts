import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsnackComponent } from './regsnack.component';

describe('RegsnackComponent', () => {
  let component: RegsnackComponent;
  let fixture: ComponentFixture<RegsnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
