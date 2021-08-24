import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadetailsComponent } from './doadetails.component';

describe('DoadetailsComponent', () => {
  let component: DoadetailsComponent;
  let fixture: ComponentFixture<DoadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoadetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
