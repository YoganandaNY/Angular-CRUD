import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css'],
})
export class OrderDashboardComponent implements OnInit {
  cartTotal: number;
  favfavouriteTotal: number;
  subscription: Subscription;

  constructor(private orderservice: OrderService) {}

  ngOnInit(): void {
    this.subscription = this.orderservice
      .getOrderCount()
      .subscribe((orderCount) => {
        this.cartTotal = orderCount.cartTotal;
        this.favfavouriteTotal = orderCount.favfavouriteTotal;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
