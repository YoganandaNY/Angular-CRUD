import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ShimmerLoaderComponent } from './components/shimmer-loader/shimmer-loader.component';
import { ShimmerCardComponent } from './components/shimmer-card/shimmer-card.component';
import { ShimmerListComponent } from './components/shimmer-list/shimmer-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, ShimmerLoaderComponent, ShimmerCardComponent, ShimmerListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
