import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeelsadminComponent } from './keelsadmin.component';

describe('KeelsadminComponent', () => {
  let component: KeelsadminComponent;
  let fixture: ComponentFixture<KeelsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeelsadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeelsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
