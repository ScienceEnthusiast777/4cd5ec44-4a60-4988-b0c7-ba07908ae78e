import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { combineLatest, startWith, take } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { HeaderSearchService } from 'src/app/core/services/header-search.service';

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
    private headerSearchService: HeaderSearchService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.apiService.getEvents(),
      this.headerSearchService.search$.pipe(startWith({ searchFilter: '' })),
    ]).subscribe(([events, search]) => {
      let filteredEvents = [];
      if (events) {
        filteredEvents = events.filter((event) => {
          if (search.searchFilter) {
            return event.title
              .toLowerCase()
              .includes(search.searchFilter.toLowerCase());
          }
          return true;
        });

        // .sort((a, b) => {
        //   return <any>new Date(b.date) - <any>new Date(a.date);
        // });;
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
