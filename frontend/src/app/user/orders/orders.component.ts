import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
data: any;
 userId =localStorage.getItem("userId")
  constructor(private srvc: OrderService) {
    this.srvc.getUserOrder(this.userId).subscribe(res => this.data = res);
  }
}
