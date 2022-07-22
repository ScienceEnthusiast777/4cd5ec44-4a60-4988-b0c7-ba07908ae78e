import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PagesModule } from '../pages/pages.module';
import { HeaderComponent } from './header/header.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PagesModule,
    MatNativeDateModule,
    CoreModule,
  ],
  providers: [MatNativeDateModule],
})
export class HomeModule {}
