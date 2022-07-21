import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBrowserComponent } from './event-browser/event-browser.component';
import { BasketComponent } from './basket/basket.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [EventBrowserComponent, BasketComponent],
  imports: [CommonModule, CoreModule],
})
export class PagesModule {}
