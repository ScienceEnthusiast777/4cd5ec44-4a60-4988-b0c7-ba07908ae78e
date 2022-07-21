import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderSearchService {
  public search$ = new Subject<string>();
  
  constructor() {}

  public emitSearch(search: string) {
    this.search$.next(search)
  }
}
