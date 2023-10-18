import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Order} from './order'
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseurl = "http://localhost:3001/order";
  constructor(private http:HttpClient) { }

orders(){
    return this.http.get<Order>(this.baseurl);
  }
   getUserOrder(userId:any){
    return this.http.get<Order>(this.baseurl + "/user/" +userId);
  }



  getorder(id:String){
    return this.http.get<Order>(this.baseurl + "/" +id);
  }
   
addOrder(data:any ){
  return this.http.post<Order>(this.baseurl ,data );
}
  updateStatus(id:string, data:any){
    return this.http.patch<Order>(this.baseurl + "/status/" + id,data);
  }
}
