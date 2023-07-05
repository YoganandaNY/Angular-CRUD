import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css'],
})
export class OrderTableComponent implements OnInit {
  itemList = [
    { name: 'Item 1', action: { inCart: false, isFavourite: false } },
    { name: 'Item 2', action: { inCart: false, isFavourite: false } },
    { name: 'Item 3', action: { inCart: false, isFavourite: false } },
  ];

  cartTotal: number;
  favfavouriteTotal: number;
  subscription: Subscription;

  constructor(private orderservice: OrderService) {}

  ngOnInit(): void {
    this.subscription = this.orderservice
      .getOrderCount()
      .subscribe((ordercount) => {
        this.cartTotal = ordercount.cartTotal;
        this.favfavouriteTotal = ordercount.favfavouriteTotal;
      });
  }

  addToCart(item) {
    item.inCart = true;
    let count = {
      cartTotal: this.cartTotal + 1,
      favfavouriteTotal: this.favfavouriteTotal,
    };
    this.orderservice.setOrderCount(count);
  }

  addToWishList(item) {
    item.isFavourite = true;
    let count = {
      cartTotal: this.cartTotal,
      favfavouriteTotal: this.favfavouriteTotal + 1,
    };
    this.orderservice.setOrderCount(count);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
