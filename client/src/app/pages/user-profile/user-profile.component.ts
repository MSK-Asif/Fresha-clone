import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ShopDataService } from 'src/app/services/shop-data.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userData: any;
  bookData: any;
  shopDetails: any;
  services: any;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private shopService: ShopDataService
  ) {}

  ngOnInit(): void {
    this.userService.getProfileData().then((response: any) => {
      this.userData = response.user;

      this.searchByEmail(this.userData.email);
    });
  }
  onLogout() {
    // console.log('object');
    // document.cookie ='auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    this.router.navigate(['/']);
  }

  searchByEmail(email: string) {
    // Replace with the email you want to search

    this.userService.findByEmail(email).subscribe(
      (data) => {
        this.bookData = data;
        console.log(this.bookData,'====----');
        const id = this.bookData.shopId;
        this.services = this.bookData.services;
        console.log(this.services);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  // getShopDetails(id: string) {
  //   this.shopService.getShopData(id).subscribe((data: any) => {
  //     //shop data from backend
  //     const shopDetails = data.shop;
  //     const shopServicesDetail = data.shopServices;

  //     // console.log('==', shopServicesDetail);
  //   });
  // }
}
