import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeaderSearchService } from 'src/app/core/services/header-search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public group = new FormGroup({
    search: new FormControl(),
  });
  constructor(private headerSearchService: HeaderSearchService) {
    this.group.valueChanges.subscribe((e) => {
      this.headerSearchService.emitSearch(e);
    });
  }

  ngOnInit(): void {}
}
