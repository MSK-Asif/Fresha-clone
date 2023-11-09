import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  data: any;
  searchParam: { id: string; location: string };
  locations: {
    shop_id: string;
    coordinate: number[];
  }[] = [];
  shopCoordinates: { [shop_id: string]: [number, number] } = {};
  constructor(
    private route: ActivatedRoute,
    private shopService: ShopDataService
  ) {
    this.searchParam = { id: '', location: '' };
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchParam.id = params['id'];
      this.searchParam.location = params['location'];
      console.log('llll', this.searchParam);

      if (!this.searchParam.id && !this.searchParam.location) {
        this.shopService.getAllShopData().subscribe((response) => {
          this.data = response; // All shop data
          console.log(this.data);
          this.sentLocationns(this.data);
        });
      } else {
        this.shopService
          .sentSearchData(this.searchParam)
          .subscribe((response) => {
            this.data = response; // All search shop data
            console.log('search', this.data);
            this.sentLocationns(this.data);
          });
      }
    });
  }
  sentLocationns(data: any) {
    let loc = data.forEach((shop: any) => {
      const { shop_id, latitude, longitude } = shop;
      let formatData: any = {
        shop_id: shop_id,
        coordinate: [longitude, latitude],
      };
      this.locations.push(formatData);
    });
    console.log('-----', this.data);
  }
  sortByRating() { 
    const sortedData = this.data.sort((a:any, b:any) => b.ratings - a.ratings);
    this.data = sortedData;
  }
  
}