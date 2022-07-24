import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { EventCardGridComponent } from './event-card-grid/event-card-grid.component';
import { BasketDialogComponent } from './basket-dialog/basket-dialog.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';

@NgModule({
  declarations: [EventCardGridComponent, BasketDialogComponent, FilterDialogComponent],
  imports: [CommonModule, CoreModule],
  exports: [EventCardGridComponent],
})
export class ComponentsModule {}
