import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-event-card-grid',
  templateUrl: './event-card-grid.component.html',
  styleUrls: ['./event-card-grid.component.scss'],
})
export class EventCardGridComponent implements OnInit {
  @Input()
  public events!: any[];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
  }

  public keyOrder = (
    a: KeyValue<string, any>,
    b: KeyValue<string, any>
  ): number => {
    return <any>new Date(a.key) - <any>new Date(b.key);
  };

  public addEvent(event: any) {
    this.shoppingCartService.addToCart(event)
  }
}
