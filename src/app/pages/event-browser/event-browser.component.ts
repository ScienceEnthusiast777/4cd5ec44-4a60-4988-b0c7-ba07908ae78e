import { Component, OnInit } from '@angular/core';
import { combineLatest, startWith, take } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { HeaderSearchService } from 'src/app/core/services/header-search.service';

@Component({
  selector: 'app-event-browser',
  templateUrl: './event-browser.component.html',
  styleUrls: ['./event-browser.component.scss'],
})
export class EventBrowserComponent implements OnInit {
  public events: any[] = [];

  constructor(
    private apiService: ApiService,
    private headerSearchService: HeaderSearchService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.apiService.getEvents(),
      this.headerSearchService.search$.pipe(startWith({ searchFilter: '' })),
    ]).subscribe(([events, search]) => {
      if (events) {
        this.events = events.filter((event) => {
          if (search.searchFilter) {
            return event.title
              .toLowerCase()
              .includes(search.searchFilter.toLowerCase());
          }
          return true;
        });
      }
    });
  }
}
