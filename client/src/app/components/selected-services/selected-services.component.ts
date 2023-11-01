import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-services',
  templateUrl: './selected-services.component.html',
  styleUrls: ['./selected-services.component.css'],
})
export class SelectedServicesComponent {
  // cartItems: CartItem[] = [
  //   { name: 'Item 1', price: 10, image: 'item1.jpg' },
  //   { name: 'Item 2', price: 20, image: 'item2.jpg' },
  //   { name: 'Item 3', price: 15, image: 'item3.jpg' },
  // ];

  @Input() serviceIds!: string[];

  calculateTotal(): number {
    return 0; //this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}

interface CartItem {
  name: string;
  price: number;
  image: string;
}