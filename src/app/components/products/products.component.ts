import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any = [];

  constructor(private api: ApiService, private cartservice: CartService) {}

  ngOnInit(): void {
    // this.api.getProduct().subscribe((res) => {
    //   this.productList = res;
    //   console.log(res);

    //   // this.productList.forEach((a: any) => {
    //   //   Object.assign(a, { quantity: 1, total: a.price });
    //   // });
    // });
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      console.log(res);
      console.log(this.productList);
    });
  }

  addtocart(items: any) {
    this.cartservice.addToCart(items);
    console.log('working');
  }
}
