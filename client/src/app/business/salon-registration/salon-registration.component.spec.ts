import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonRegistrationComponent } from './salon-registration.component';

describe('SalonRegistrationComponent', () => {
  let component: SalonRegistrationComponent;
  let fixture: ComponentFixture<SalonRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonRegistrationComponent]
    });
    fixture = TestBed.createComponent(SalonRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
