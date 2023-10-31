import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent {
  selectedDateTime: { selectedDate: string; selectedTime: string } = {
    selectedDate: '',
    selectedTime: '',
  };

  logSelectedDateTime() {
    console.log('Selected Date:', this.selectedDateTime.selectedDate);
    console.log('Selected Time:', this.selectedDateTime.selectedTime);
  }
}
