import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-basket-dialog',
  templateUrl: './basket-dialog.component.html',
  styleUrls: ['./basket-dialog.component.scss'],
})
export class BasketDialogComponent implements OnInit {
  public cart: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<BasketDialogComponent>,
    private shoppingCartService: ShoppingCartService
  ) {}

  public removeFromCart(event: any) {
    this.shoppingCartService.removeFromCart(event);
  }

  ngOnInit(): void {
    this.shoppingCartService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }
}
