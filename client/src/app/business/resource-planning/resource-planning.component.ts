import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { businessService } from 'src/app/services/business.service';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  selector: 'app-resource-planning',
  templateUrl: './resource-planning.component.html',
  styleUrls: ['./resource-planning.component.css'],
})
export class ResourcePlanningComponent {
  currentDate: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopDataService,
    private businessServic: businessService
  ) {}

  selectServiceVal = 0;
  addForm = false;
  addStaffForm = false;
  addStaffSercvice = false;
  selectedId: string[] = [];
  shopDetails: any;
  shopServicesDetail: any;
  shopId = 'sh101';
  isButtonDisabled: boolean = true;
  serviceId: string[] = [];
  flag = 1;
  teamMemberNames: string[] = [];
  selectedTeamName!: string;
  selectedServiceInfo!: any;
  selectedTimeDate: { time: string; date: string } = { time: '', date: '' };
  storedData: any;
  dataToBook: any = {};
  userEmail!: string;
  totalAmmount!: number;
  shopName!: string;
  servicesBooked: any = [];
  seletedItem: any;
  displayBooked: any;
  times: string[] = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  ngOnInit(): void {
    this.loadShopDetails();
  }

  selectedService(team: any, time: any): any {
    const booked = JSON.parse(localStorage.getItem('servicesBooked') || '[]');
    if (booked.length > 0) {
      for (let sav of booked) {
        if (sav.team == team && sav.time == time) {
          return sav.services[0].service_name;
        }
      }
    }
    return 'nothing';
  }

  isSelected(team: any, time: any): boolean {
    const booked = JSON.parse(localStorage.getItem('servicesBooked') || '[]');
    if (booked.length > 0) {
      for (let sav of booked) {
        if (sav.team == team && sav.time == time) {
          return true;
        }
      }
    }
    return false;
  }

  // loadShopDetails() {
  //   this.shopService.getShopData('sh101').subscribe((data: any) => {
  //     this.shopDetails = data.shop;
  //     this.shopServicesDetail = data.shopServices;
  //     console.log('hi', this.shopServicesDetail);
  //   });
  // }
  loadShopDetails() {
    this.shopService.getShopData(this.shopId).subscribe((data: any) => {
      //shop data from backend
      this.shopDetails = data.shop;
      this.shopName = this.shopDetails.shop_name;

      this.shopServicesDetail = data.shopServices;
      //console.log('i', this.shopDetails);
      //console.log('ti', this.shopDetails.booked.);
      
      for (let key in this.shopDetails.booked) {
        //find team members name
        let forSet = [];
        console.log(key, '==', this.shopDetails.booked[key]['2023-11-10'][0]);
        // console.log('service==', this.shopServicesDetail);
        this.servicesBooked.push({
          time: this.shopDetails.booked[key]['2023-11-10'][0],
          team: key,
          services: [
            {
              service_id: 'sr19',
              service_name: 'Beard Styling',
              description: 'Get a stylish and well-groomed beard look',
              price: 20,
              category: 'Barbershop',
              times: [
                '10:00 AM',
                '11:00 AM',
                '1:00 PM',
                '2:00 PM',
                '3:00 PM',
                '4:00 PM',
                '5:00 PM',
              ],
              booked: [
                { '2023-10-13': '1:00 PM' },
                { '2023-10-20': '3:00 PM' },
              ],
            },
          ],
        });
         localStorage.setItem('servicesBooked', JSON.stringify(this.servicesBooked));
        // localStorage.setItem('servicesBooked', JSON.stringify(this.shopDetails.booked));

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
   
  }
  manageTime(shopTimes: string[]) {}

  setService(selectedId: string[]) {
    this.serviceId = selectedId; //selected service ids from all services component
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

    this.servicesBooked = JSON.parse(
      localStorage.getItem('servicesBooked') || '[]'
    );

    if (this.servicesBooked.length > 0) {
      let ifMatch = false;
      this.servicesBooked.forEach((service: any, i: any) => {
        console.log('hi32323', service);
        if (
          service.team == this.seletedItem.team &&
          service.time == this.seletedItem.time
        ) {
          ifMatch = true;
          this.servicesBooked[i].services = this.selectedServiceInfo;
        }
      });
      if (!ifMatch) {
        this.servicesBooked.push({
          ...this.seletedItem,
          services: this.selectedServiceInfo,
        });
      }
    } else {
      this.servicesBooked.push({
        ...this.seletedItem,
        services: this.selectedServiceInfo,
      });
    }
    console.log('at-', this.servicesBooked[0].time);
    this.updateToDb();
    localStorage.setItem('servicesBooked', JSON.stringify(this.servicesBooked));
  }
  // ===================================================================================
  updateToDb() {
    console.log('jj', this.servicesBooked[0]);;
    this.businessServic.createBookingByOwner({ data: this.servicesBooked }).subscribe((response: any) => {
        console.log(response);
      });
  }

  selectService(time: any, team: any) {
    this.selectedId = [];
    this.addForm = true;
    this.seletedItem = { time, team };
  }

  endModal() {
    this.addForm = false;
  }
  formatCurrentDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return this.currentDate.toLocaleDateString(undefined, options);
  }

  navigate(days: number): void {
    this.currentDate.setDate(this.currentDate.getDate() + days);
  }

  addStaff(num: number) {
    console.log(num,'==');
    if (num === 1) {
     
      this.addStaffForm = true;
       console.log(num, '===', this.addStaffForm);
    } else {
      this.addStaffForm = false;
    }
  }
  addStaffServiceForm(val: number) {
    if (val === 1) {
      this.addStaffSercvice = true;
      console.log(this.addStaffSercvice, '-=-');
    } else {
      this.addStaffSercvice = false;
    }
  }

  checkSelected(id: string): boolean {
    return this.selectedId.includes(id);
  }
  toggleIcon(service: any) {
    if (this.selectedId.includes(service.service_id)) {
      this.selectedId = [];
    }
    if (this.selectedId.length < 1) {
      this.selectedId.push(service.service_id);
      this.setService(this.selectedId);
    }
  }
}
