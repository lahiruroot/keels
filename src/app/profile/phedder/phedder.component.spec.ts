import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhedderComponent } from './phedder.component';

describe('PhedderComponent', () => {
  let component: PhedderComponent;
  let fixture: ComponentFixture<PhedderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhedderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhedderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
