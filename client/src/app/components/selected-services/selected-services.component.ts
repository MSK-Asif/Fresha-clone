import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-selected-services',
  templateUrl: './selected-services.component.html',
  styleUrls: ['./selected-services.component.css'],
})
export class SelectedServicesComponent {
  shopInfo!: any;
  ServiceInfo: any;
  teamName!: string;
  dateTime!: any;
  totalPrice!: number;
  inputDate!: string;
  formattedDate!: string;

  @Input() selections: any;

  ngOnInit(): void {
    this.shopInfo = this.selections.shopDetails;
    console.log('logform', this.selections.shopDetails);
  }

  ngOnChanges(change: SimpleChange) {
    // console.log(this.selections.selectedServiceInfo);
    // this.shopInfo = this.selections.shopDetails;
    this.ServiceInfo = this.selections.selectedServiceInfo; //[{id..}{id.}]
    this.teamName = this.selections.selectedTeamName;
    this.dateTime = this.selections.selectedTimeDate;
    console.log('hi', this.dateTime);
    console.log('logform', this.ServiceInfo);
    this.calculateTotal();
   // if (this.dateTime.date) {
      this.inputDate = this.dateTime?.date;
      if (this.inputDate) {
        this.formattedDate = this.formatDate(this.inputDate);
      }
  //  }
    
  }
  calculateTotal() {
    if (this.ServiceInfo) {
      let total = 0;
      for (let i = 0; i < this.ServiceInfo.length; i++) {
        total += this.ServiceInfo[i].price;
      }
      this.totalPrice = total;
    }
  }
  formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
  };
  return date.toLocaleDateString('en-US', options);
}
}
  
  