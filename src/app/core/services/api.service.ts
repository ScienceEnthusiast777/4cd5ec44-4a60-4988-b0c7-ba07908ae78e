import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getEvents() {
    return this.httpClient.get<any[]>(
      'https://tlv-events-app.herokuapp.com/events/uk/london'
    );
  }
}
