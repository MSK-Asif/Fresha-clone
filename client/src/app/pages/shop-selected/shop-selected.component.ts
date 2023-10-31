import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  selector: 'app-shop-selected',
  templateUrl: './shop-selected.component.html',
  styleUrls: ['./shop-selected.component.css'],
})
export class ShopSelectedComponent {
  shopId!: string;
  shopDetails: any;
  constructor(
    private route: ActivatedRoute,
    private shopService: ShopDataService
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params) => {
      this.shopId = params.get('id') || '';
      console.log('id===>',this.shopId);
      this.loadShopDetails();
    });
  }

  loadShopDetails() {
    this.shopService.getShopData(this.shopId).subscribe((data:any) => {//shop data from backend
      this.shopDetails = data;
      console.log(this.shopDetails);
    });
  }
}
