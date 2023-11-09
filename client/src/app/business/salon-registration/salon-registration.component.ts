import { Component } from '@angular/core';

@Component({
  selector: 'app-salon-registration',
  templateUrl: './salon-registration.component.html',
  styleUrls: ['./salon-registration.component.css'],
})
export class SalonRegistrationComponent {
  salonName: string = '';
  address: string = '';
  workingDays: { day: string; openingTime: string; closingTime: string }[] = [];
  aboutSalon: string = '';
  category: string = '';
  selectedLocation: any;
  selectedDaysDisplay: string = '';
  selectedDate!: Date;
  selectedTime!: string;
  startTime: string = ''; // Set a default start time
  endTime: string = '';

  onSubmit() {
    // Handle form submission, e.g., send data to server
    console.log('Form submitted', {
      salonName: this.salonName,
      address: this.address,
      workingDays: this.workingDays,
      aboutSalon: this.aboutSalon,
      category: this.category,
      selectedLocation: this.selectedLocation,
      selectedDate: this.selectedDate,
      selectedTime: this.selectedTime,
    });
  }

  updateSelectedDaysDisplay() {
    this.selectedDaysDisplay = this.workingDays
      .map((day) => `${day.day} (${day.openingTime} - ${day.closingTime})`)
      .join(', ');
  }
}