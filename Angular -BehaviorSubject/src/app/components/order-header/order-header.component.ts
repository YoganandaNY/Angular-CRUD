import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css'],
})
export class OrderHeaderComponent implements OnInit {
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
