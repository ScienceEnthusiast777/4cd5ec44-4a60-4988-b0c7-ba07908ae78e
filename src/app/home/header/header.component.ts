import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { BasketDialogComponent } from 'src/app/components/basket-dialog/basket-dialog.component';
import { HeaderSearchService } from 'src/app/core/services/header-search.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public cart: any[] = [];
  public group = new FormGroup({
    searchFilter: new FormControl(),
  });

  constructor(
    private headerSearchService: HeaderSearchService,
    private shoppingCartService: ShoppingCartService,
    public dialog: MatDialog
  ) {
    this.group.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((e) => {
        this.headerSearchService.emitSearch(e);
      });
  }

  public openBasketDialog() {
    this.dialog.open(BasketDialogComponent, {
      data: {
        events : [...this.cart],
      },
    });
  }

  ngOnInit(): void {
    this.shoppingCartService.cart$.subscribe((cart: any) => {
      this.cart = cart;
    });
  }
}
