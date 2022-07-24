import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { combineLatest, startWith, take } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { HeaderSearchService } from 'src/app/core/services/header-search.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

export type Lookup = {
  [key: string]: any[];
};

@Component({
  selector: 'app-event-browser',
  templateUrl: './event-browser.component.html',
  styleUrls: ['./event-browser.component.scss'],
})
export class EventBrowserComponent implements OnInit {
  public events: any;

  constructor(
    private apiService: ApiService,
    private headerSearchService: HeaderSearchService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.apiService.getEvents(),
      this.headerSearchService.search$.pipe(startWith({ searchFilter: '' })),
      this.shoppingCartService.cart$,
      this.headerSearchService.dateRange$.pipe(startWith(undefined)),
    ]).subscribe(([events, search, cart, dateRange]) => {
      let filteredEvents = [];
      if (events) {
        filteredEvents = events.filter((event) => {
          if (cart) {
            let ids = cart.map((e: any) => e._id);
            if (ids.includes(event._id)) {
              return false;
            }
          }
          if (search.searchFilter) {
            if (
              !event.title
                .toLowerCase()
                .includes(search.searchFilter.toLowerCase())
            ) {
              return false;
            }
          }
          if (dateRange) {
            if (dateRange['start'] === null) {
              return true;
            }
            const start = new Date(dateRange['start']);
            const end = new Date(dateRange['end']) || new Date();
            const eventDate = new Date(event.date);
            if (
              !(start < eventDate && end > eventDate) &&
              !(start.toDateString() === eventDate.toDateString()) &&
              !(end.toDateString() === eventDate.toDateString())
            ) {
              return false;
            }
          }
          return true;
        });
      }
      this.events = this.dateSortedEvents(filteredEvents);
    });
  }

  private dateSortedEvents(events: any[]): any {
    let dates: Lookup = {};
    for (let event of events) {
      if (dates[event.date]) {
        dates[event.date].push(event);
      } else {
        dates[event.date] = [event];
      }
    }
    return dates;
  }
}
