import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent {
  @Input() shopCart!: any;

  // console.log(shopCart);
  //   saveDataToLocalStorage() {
  //   localStorage.setItem('shopCartData', this.shopCart);
  // }
  
}
