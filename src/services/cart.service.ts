import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart:any = [];

  public cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getCart(){
    return this.cart;
  }

  addProduct(product){
    let added = false;
    for(let p of this.cart){
      if(p.position === product.position){
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added){
      product.qty = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  removeProduct(product) {
    for (const [index, item] of this.cart.entries()) {
			if (item.position === product.position) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.cart.splice(index, 1);
			}
		}
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

}
