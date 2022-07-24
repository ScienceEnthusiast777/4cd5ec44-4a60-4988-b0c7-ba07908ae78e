import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}
  public cart$ = new BehaviorSubject(this.getCart());

  public addToCart(event: any) {
    let cart = this.getCart();
    if (cart) {
      cart.push(event);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      cart = [event];
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    this.cart$.next(cart);
  }

  public removeFromCart(event: any) {
    let cart = this.getCart();
    cart = cart.filter((e: any) => {
      if (e._id === event._id) {
        return false;
      } else {
        return true;
      }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);
  }

  public getCart() {
    return JSON.parse(localStorage.getItem('cart')!);
  }
}
