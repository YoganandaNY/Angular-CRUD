import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderDashboardComponent } from './components/order-dashboard/order-dashboard.component';
import { OrderHeaderComponent } from './components/order-header/order-header.component';
import { OrderTableComponent } from './components/order-table/order-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [AppComponent, OrderDashboardComponent, OrderHeaderComponent, OrderTableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
