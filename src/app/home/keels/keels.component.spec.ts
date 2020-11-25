import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeelsComponent } from './keels.component';

describe('KeelsComponent', () => {
  let component: KeelsComponent;
  let fixture: ComponentFixture<KeelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
