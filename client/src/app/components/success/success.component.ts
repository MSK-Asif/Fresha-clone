import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  appointment: any = { rating: 3, review: '' }; // Initial rating value and empty review
  constructor(private router: Router) {}
  submitReview() {
    this.router.navigate(['/profile']);
  }

  setRating(rating: number) {
    this.appointment.rating = rating;
  }
}