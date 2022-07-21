import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { BasketComponent } from '../pages/basket/basket.component';
import { EventBrowserComponent } from '../pages/event-browser/event-browser.component';

const routes: Routes = 
  [
    {
      path: '',
      component: AppComponent,
      children: [
        { path: '', redirectTo: '/event-browser', pathMatch: 'full' },
        {
          path: 'event-browser',
          component: EventBrowserComponent,
        },
        { path: 'basket', component: BasketComponent },
      ],
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
