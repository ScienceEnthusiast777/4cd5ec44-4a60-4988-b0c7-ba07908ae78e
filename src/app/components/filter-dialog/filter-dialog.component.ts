import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
})
export class FilterDialogComponent {
  public group = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>) {}

  apply() {
    this.dialogRef.close({ data: this.group.value });
  }
}
