import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderCount } from '../interface/order-count';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private _oredrCount = new BehaviorSubject<OrderCount>({
    cartTotal: 0,
    favfavouriteTotal: 0,
  });

  private _orderCount$ = this._oredrCount.asObservable();

  getOrderCount(): Observable<OrderCount> {
    return this._orderCount$;
  }

  setOrderCount(latestValue: OrderCount) {
    return this._oredrCount.next(latestValue);
  }
}
