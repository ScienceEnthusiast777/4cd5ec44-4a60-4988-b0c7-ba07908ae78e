import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type Filters = {
  [key: string]: any;
};

@Injectable({
  providedIn: 'root',
})
export class HeaderSearchService {
  public search$ = new Subject<Filters>();

  constructor() {}

  public emitSearch(search: Filters) {
    this.search$.next(search);
  }
}
