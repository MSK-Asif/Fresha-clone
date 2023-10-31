import { Component } from '@angular/core';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
})
export class RecommendedComponent {
  public data: any[] | undefined;

  constructor(private dataService: ShopDataService) {}

  ngOnInit() {
    this.dataService.getAllShopData().subscribe((response) => {
      this.data = response;//all shop data
      console.log(this.data);
    });
  }
}
