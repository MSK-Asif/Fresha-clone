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
  constructor(
    private route: ActivatedRoute,
    private shopService: ShopDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data') || '';//prob is here
      console.log("searchby:", this.data);
      this.loadSearchShopDetails();
    });
  }

  loadSearchShopDetails() {
    // this.shopService.getShopData(this.data).subscribe((data: any) => {
      this.shopService.getAllSearchData().subscribe((response) => {
         this.data = response; // All search shop data
         console.log("search",this.data);
    });
  }
}