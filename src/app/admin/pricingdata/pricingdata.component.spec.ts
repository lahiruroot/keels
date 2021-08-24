import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingdataComponent } from './pricingdata.component';

describe('PricingdataComponent', () => {
  let component: PricingdataComponent;
  let fixture: ComponentFixture<PricingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
