import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card-grid',
  templateUrl: './event-card-grid.component.html',
  styleUrls: ['./event-card-grid.component.scss']
})
export class EventCardGridComponent implements OnInit {
  @Input()
  public events!: any[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.events)
  }

}
