import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBrowserComponent } from '../pages/event-browser/event-browser.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/event-browser', pathMatch: 'full' },
      {
        path: 'event-browser',
        component: EventBrowserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
