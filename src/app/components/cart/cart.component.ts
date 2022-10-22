import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: number = 0;

  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.products = res;
      // this.grandTotal = this.cartservice.getTotalPrice();
      this.grandTotal = this.cartservice.getTotalPrice();
      console.log(this.grandTotal);
    });
  }
  removeItem(item: any) {
    if (confirm('Are you sure to delete')) {
      this.cartservice.removeCartItem(item);
      alert('Item Deleted Successfully');
    }
  }
  emptyCart() {
    this.cartservice.removeAllCart();
  }
}
