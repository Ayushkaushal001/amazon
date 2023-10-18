import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Cart} from './cart'
@Injectable({
  providedIn: 'root'

})
export class CartService {

  baseurl = "http://localhost:3001/cart";
  constructor(private http:HttpClient) {}
  
  getcart(userId:any){
    return this.http.get<any>(this.baseurl + "/user/" +userId);
  }

addItem(data:any ){
  return this.http.post<Cart>(this.baseurl ,data );
}

delItem(id:string){
  return this.http.delete<Cart>(this.baseurl +"/"+id);
}

updateItem(id:string ,data:any){
  return this.http.patch<Cart>(this.baseurl +"/quantity/"+id,data);
}

inCart(userId:any,productId:string){
    return this.http.get<Cart>(this.baseurl + "/incart/" +userId + "/" + productId);
  }



  updateStatus(userId:any ,data:any){
  return this.http.patch<Cart>(this.baseurl +"/status/"+userId,data);
}

getorderitem(orderId:string){
    return this.http.get<Cart>(this.baseurl + "/order/" + orderId);
  }
}

