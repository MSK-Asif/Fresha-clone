import { Component } from '@angular/core';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
})
export class RecommendedComponent {
  data!: object[];
  currentIndex = 0;

  constructor(private dataService: ShopDataService) {}

  ngOnInit() {
    this.dataService.getAllShopData().subscribe((response) => {
      this.data = response; // All shop data
      console.log(this.data);
    });
  }

  goToPrevious(): void {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.data.length - 1;
    }
    
  }

  goToNext(): void {
    this.currentIndex++;
    if (this.currentIndex >= this.data.length) {
      this.currentIndex = 0;
    }
  }

}
