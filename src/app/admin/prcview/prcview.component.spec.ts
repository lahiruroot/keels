import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcviewComponent } from './prcview.component';

describe('PrcviewComponent', () => {
  let component: PrcviewComponent;
  let fixture: ComponentFixture<PrcviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrcviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrcviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
