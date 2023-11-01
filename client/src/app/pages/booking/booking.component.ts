import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  constructor(private router: Router) {}
  date: string = '';
  time: string = '';
  str: string = '';
  service!: string;

  flag = 1;

  setService(val: string) {
    this.service = val;
    // this.flag = 2;
    console.log('service add', val);
  }
  onClickContinue() {
    this.flag++;
    if (this.flag>3) {
      this.router.navigate(['/confirm']);
    }
  }
  onClickBack() {
    this.flag--;
  }
}
