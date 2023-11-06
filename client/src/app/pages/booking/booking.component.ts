
import { ActivatedRoute } from '@angular/router';
import { ShopDataService } from 'src/app/services/shop-data.service';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  shopId!: string;
  shopDetails: any = {};
  shopServicesDetail: any;
  // user: Object = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopDataService,
    private userService: UserService,
    private bookingService: BookingService
  ) {}

  serviceId: string[] = [];
  flag = 1;
  teamMemberNames: string[] = [];
  selectedTeamName!: string;
  selectedServiceInfo!: any;
  selectedTimeDate: { time: string;  date: string} = {time: "", date: ""} ;
  storedData: any;
  dataToBook: any = {};
  userEmail!: string;
  totalAmmount!: number;
  isButtonDisabled: boolean = true;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.shopId = params.get('id') || '';
      this.loadShopDetails();
    });
  }

  loadShopDetails() {
    this.shopService.getShopData(this.shopId).subscribe((data: any) => {
      //shop data from backend
      this.shopDetails = data.shop;
      this.shopServicesDetail = data.shopServices;

      for (let key in this.shopDetails.booked) {
        //find team members name
        if (this.shopDetails.booked.hasOwnProperty(key)) {
          this.teamMemberNames.push(key);
        }
      }
    });
    if (typeof localStorage !== 'undefined') {
      // Convert your data to a JSON string
      this.storedData = localStorage.getItem('storeServiceIds');
      if (this.storedData) {
        this.serviceId = JSON.parse(this.storedData);
      }
    }
    this.setButtonState();
  }
  setService(selectedId: string[]) {
    this.serviceId = selectedId; //selected service ids from all services component
    console.log(this.serviceId);
    this.getSelectedServiceDetails(selectedId); //getting details of selected services
    this.setButtonState();
  }
  setButtonState() {
    if (this.serviceId.length > 0) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }
  getSelectedServiceDetails(ids: string[]) {
    this.selectedServiceInfo = this.shopServicesDetail.filter((service: any) =>
      ids.includes(service.service_id)
    );
  }

  getSelectedTimeDate(timeDate: any) {
    //get selected time and date from date-time component
    this.selectedTimeDate = timeDate;
    console.log(
      'date=',
      this.selectedTimeDate.date,
      'time=',
      this.selectedTimeDate.time
    );
    if (
      this.selectedTimeDate &&
      this.selectedTimeDate.date &&
      this.selectedTimeDate.time
    ) {
      this.isButtonDisabled = false; // Enable the button
    } else {
      this.isButtonDisabled = true; // Disable the button
    }
  }

  getTeamName(name: string) {
    this.selectedTeamName = name; //team name from team select cart
  }

  getTotalAmmount(ammount: number) {
    console.log('total ammount = ', ammount);
    this.totalAmmount = ammount;
  }
  // getAvailableTimes() {
  //   this.availableTimes = this.allTimes.filter((time) => !this.bookedTimes.includes(time));
  //   console.log("all=", this.allTimes, 'bk=', this.bookedTimes, 'avl=', this.availableTimes);
  // }

  onClickContinue() {
    console.log(this.flag);
    this.flag++;

    if (this.flag > 3) {
      this.paymentProcess();

      //this.router.navigate(['/confirm']);
    }
  }
  onClickBack() {
    this.flag--;
  }

  async paymentProcess() {
    const userData = await this.userService.getProfileData(); //getting user data
    this.userEmail = userData.user.email;
    this.dataToBook = {
      userEmail: this.userEmail,
      shopId: this.shopId,
      serviceId: this.serviceId,
      teamName: this.selectedTeamName,
      date: this.selectedTimeDate.date,
      time: this.selectedTimeDate.time,
      services: this.selectedServiceInfo,
      price: this.totalAmmount,
    };
    this.bookingSubmit(); //send dataTobook to service
    // console.log(this.dataToBook);
  }
  bookingSubmit() {
    // console.log('service==>>',this.selectedServiceInfo);
    this.bookingService
      .userBooking(this.dataToBook)
      .subscribe((response: any) => {
        console.log('Booking created:', response.url);
        window.location.href = response.url;
      });
    // this.router.navigate(['response.url']);
  }
}
