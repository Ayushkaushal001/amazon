import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OrderService } from '../../services/order.service';
import {AddressService} from '../../services/address.service'
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
  orderId =""
  address:any;
  orderInfo:any
  addressId =""
  items:any
  constructor(private route:ActivatedRoute,private osrvc:OrderService,private asrvc:AddressService,
  private csrvc:CartService){
  this.route.params.subscribe(param=>{
this.orderId = param['id'];
this.osrvc.getorder(this.orderId).subscribe(res=>{

  this.orderInfo =res;
  
  this.addressId =res.addressId;

  this.asrvc.getAddressById(this.addressId).subscribe(res=>{
 this.address=res;

  })
   this.csrvc.getorderitem(this.orderId).subscribe(res=>{
 this.items=res;

  })
})

  })
}
}

