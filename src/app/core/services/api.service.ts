import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getEvents() {
    return this.httpClient.get(
      'https://tlv-events-app.herokuapp.com/events/uk/london'
    );
  }
}
