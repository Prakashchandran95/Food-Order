import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart-service',
  templateUrl: './cart-service.component.html',
  styleUrls: ['./cart-service.component.css']
})
export class CartServiceComponent implements OnInit {

  displayedColumns: string[] = ['imageurl','qty','price','action'];

  cart = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }
  removeCartItem(product){
    this.cartService.removeProduct(product);
  }

}
