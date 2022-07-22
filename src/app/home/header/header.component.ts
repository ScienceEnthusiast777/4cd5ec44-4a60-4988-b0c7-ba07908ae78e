import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { HeaderSearchService } from 'src/app/core/services/header-search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public group = new FormGroup({
    searchFilter: new FormControl(),
  });
  constructor(private headerSearchService: HeaderSearchService) {
    this.group.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((e) => {
        this.headerSearchService.emitSearch(e);
      });
  }

  ngOnInit(): void {}
}
