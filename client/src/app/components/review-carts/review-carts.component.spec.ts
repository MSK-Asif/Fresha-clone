import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCartsComponent } from './review-carts.component';

describe('ReviewCartsComponent', () => {
  let component: ReviewCartsComponent;
  let fixture: ComponentFixture<ReviewCartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewCartsComponent]
    });
    fixture = TestBed.createComponent(ReviewCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
