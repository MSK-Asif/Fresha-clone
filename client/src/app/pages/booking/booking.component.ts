
import { ActivatedRoute } from '@angular/router';
import { ShopDataService } from 'src/app/services/shop-data.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],

})
export class BookingComponent {
  shopId!: string;
  shopDetails: any = {};
  shopServicesDetail: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopDataService
  ) {}

  serviceId!: string[];
  flag = 1;
  teamMemberNames: string[] = [];
  selectedTeamName!: string;
  selectedServiceInfo!: any;
  selectedTimeDate!: object;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.shopId = params.get('id') || '';
      // console.log('bookid===>', this.shopId);
      this.loadShopDetails();
    });
  }
  // ngOnChanges() {
  //   this.getSelectedTimeDate();
  // }
  loadShopDetails() {
    this.shopService.getShopData(this.shopId).subscribe((data: any) => {
      //shop data from backend
      this.shopDetails = data.shop;
      this.shopServicesDetail = data.shopServices;
      console.log(this.shopDetails);

      for (let key in this.shopDetails.booked) {
        //find team members name
        if (this.shopDetails.booked.hasOwnProperty(key)) {
          this.teamMemberNames.push(key);
        }
      }
      console.log(this.teamMemberNames);
    });
  }
  setService(selectedId: string[]) {
    this.serviceId = selectedId; //service ids from all services component
    console.log('book tke=', selectedId);
    this.getSelectedServiceDetails(selectedId); //getting details of selected services
  }

  getSelectedServiceDetails(ids: string[]) {
    this.selectedServiceInfo = this.shopServicesDetail.filter((service: any) =>
      ids.includes(service.service_id)
    );
    // console.log('after filter=', this.selectedServiceInfo);
  }

  getSelectedTimeDate(timeDate: any) {
    console.log('time=', timeDate.time, 'date=', timeDate.date);
    this.selectedTimeDate = timeDate;
    console.log('objtime=', timeDate);
  }

  getTeamName(name: string) {
    this.selectedTeamName = name; //team name from team select cart
    console.log('hiparent=', this.selectedTeamName);
    // this.bookedTimes = this.shopDetails;
  }

  // getAvailableTimes() {
  //   this.availableTimes = this.allTimes.filter((time) => !this.bookedTimes.includes(time));
  //   console.log("all=", this.allTimes, 'bk=', this.bookedTimes, 'avl=', this.availableTimes);
  // }

  onClickContinue() {
    this.flag++;
    if (this.flag > 3) {
      this.router.navigate(['/confirm']);
    }
  }
  onClickBack() {
    this.flag--;
  }
}
