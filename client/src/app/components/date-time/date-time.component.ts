import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent {
  teamName!: string;
  allDateBookedTimes!: string[];
  availableTimes!: string[];
  shop!: any;
  selectedDate: any;
  initTimes: string[] = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
  ];
  allTimes: string[] = this.initTimes;
  selectedTime!: string;
  @Input() nameAndDetail!: string[];

  @Output() getSelectedTimeDate = new EventEmitter<any>();
  ngOnChanges() {
    this.teamName = this.nameAndDetail[0];
    this.shop = this.nameAndDetail[1];
    // this.allTimes = this.shop.times;
    this.allDateBookedTimes = this.shop.booked[this.teamName];
    console.log(this.allTimes);
    console.log('cng', this.allDateBookedTimes);
    this.logSelectedDate();
  }

  // getAvailableTimes() {
  //   this.availableTimes = this.allTimes.filter(
  //     (time) => !this.bookedTimes.includes(time)
  //   );
  //     console.log("all=", this.allTimes, 'bk=', this.bookedTimes, 'avl=', this.availableTimes);
  // }

  logSelectedDate() {
    console.log('Selected Date:', this.selectedDate);

    if (
      this.teamName !== 'any' &&
      this.selectedDate &&
      this.allDateBookedTimes &&
      this.selectedDate in this.allDateBookedTimes
    ) {
      console.log('yes');
      this.availableTimes = this.allTimes.filter(
        (time) => !this.allDateBookedTimes[this.selectedDate].includes(time)
      );
      console.log('avl=', this.availableTimes);
      this.allTimes = this.availableTimes;
    } else {
      console.log('no');
      this.allTimes = this.initTimes;
    }
    this.getSelectedTimeDate.emit({
      time: this.selectedTime,
      date: this.selectedDate,
    });
  }
  timeClick(time: any) {
    this.selectedTime = time;// console.log('time clicked', val);
    this.getSelectedTimeDate.emit({
      time: this.selectedTime,
      date: this.selectedDate,
    });
    // console.log('emit', { time: selectedTime, date: this.selectedDate });
  }
}
