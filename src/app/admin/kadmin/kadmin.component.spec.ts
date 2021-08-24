import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KadminComponent } from './kadmin.component';

describe('KadminComponent', () => {
  let component: KadminComponent;
  let fixture: ComponentFixture<KadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
