import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerchatComponent } from './farmerchat.component';

describe('FarmerchatComponent', () => {
  let component: FarmerchatComponent;
  let fixture: ComponentFixture<FarmerchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
