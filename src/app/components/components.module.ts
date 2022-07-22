import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { EventCardGridComponent } from './event-card-grid/event-card-grid.component';

@NgModule({
  declarations: [EventCardGridComponent],
  imports: [CommonModule, CoreModule],
  exports: [EventCardGridComponent],
})
export class ComponentsModule {}
