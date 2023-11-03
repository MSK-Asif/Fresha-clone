import { Component } from '@angular/core';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
})
export class RecommendedComponent {
  public data: any[] | undefined;
  public currentIndex = 0;

  constructor(private dataService: ShopDataService) {}

  ngOnInit() {
    this.dataService.getAllShopData().subscribe((response) => {
      this.data = response; // All shop data
      console.log(this.data);
    });
  }

  
}
