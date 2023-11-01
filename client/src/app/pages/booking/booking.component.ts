import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopDataService } from 'src/app/services/shop-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  shopId!: string;
  shopDetails: any;
  shopServicesDetail: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopDataService
  ) {}

  
  serviceId!: string[];
  flag = 1;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.shopId = params.get('id') || '';
      console.log('bookid===>', this.shopId);
      this.loadShopDetails();
    });
  }
  loadShopDetails() {
    this.shopService.getShopData(this.shopId).subscribe((data: any) => {
      //shop data from backend
      this.shopDetails = data.shop;
      this.shopServicesDetail = data.shopServices;
      console.log("dtl from=", this.shopServicesDetail);
    });
  }
  setService(val: string[]) {
    this.serviceId = val;
    // this.flag = 2;
    console.log('service add', val);
  }
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
