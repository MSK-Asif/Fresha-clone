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
  selectedDate: any = '2023-11-09';
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
  selectedTime: string = '';
  @Input() nameAndDetail!: string[];

  @Output() getSelectedTimeDate = new EventEmitter<any>();
  ngOnChanges() {
    this.teamName = this.nameAndDetail[0];
    this.shop = this.nameAndDetail[1];
    // this.allTimes = this.shop.times;
    this.allDateBookedTimes = this.shop.booked[this.teamName];
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
      this.availableTimes = this.allTimes.filter(
        (time) => !this.allDateBookedTimes[this.selectedDate].includes(time)
      );
      this.allTimes = this.availableTimes;
    } else {
      this.allTimes = this.initTimes;
    }
    this.getSelectedTimeDate.emit({
      time: this.selectedTime,
      date: this.selectedDate,
    });
  }
  timeClick(time: any) {
    this.selectedTime = time; // console.log('time clicked', val);
    this.getSelectedTimeDate.emit({
      time: this.selectedTime,
      date: this.selectedDate,
    });
  }

  // currentDate: Date = new Date();


  // selectServiceVal = 0;
  // addForm = false;
  // selectService(val: number) {
  //   if (val === 1) {
  //     return (this.addForm = true);
  //   } else {
  //     return (this.addForm = false);
  //   }
  // }
  // formatCurrentDate(): string {
  //   const options: Intl.DateTimeFormatOptions = {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   };
  //   return this.currentDate.toLocaleDateString(undefined, options);
  // }

  // navigate(days: number): void {
  //   this.currentDate.setDate(this.currentDate.getDate() + days);
  //   console.log('dt=', this.currentDate);
  // }
}
