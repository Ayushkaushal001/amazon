import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Address} from  './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

baseurl = "http://localhost:3001/address";


  
  constructor(private http:HttpClient) { }

  getAddress(userId:any){
    return this.http.get<Address>(this.baseurl + "/user/" + userId  );
  }
 getAddressById(id:any){
    return this.http.get<Address>(this.baseurl + "/" + id );
  }
 postAddress(data:any){
  return this.http.post<Address>(this.baseurl ,data);
 }

  updateAddress(data:any,id:string){
    return this.http.patch<Address>(this.baseurl  + "/" + id,data);
  }

  delAddress(id:string){
    return this.http.delete<Address>(this.baseurl + "/" + id);
  }
  
}


