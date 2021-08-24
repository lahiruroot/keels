import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmgsComponent } from './viewmgs.component';

describe('ViewmgsComponent', () => {
  let component: ViewmgsComponent;
  let fixture: ComponentFixture<ViewmgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
