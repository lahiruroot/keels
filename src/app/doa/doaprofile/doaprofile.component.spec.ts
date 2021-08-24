import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoaprofileComponent } from './doaprofile.component';

describe('DoaprofileComponent', () => {
  let component: DoaprofileComponent;
  let fixture: ComponentFixture<DoaprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoaprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoaprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
