import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Admin} from './admin'

@Injectable({
  providedIn: 'root'
})
export class AdminService {


 baseurl="http://localhost:3001/admin";

  constructor(private http:HttpClient) {}

  loginAdmin(data:Admin){
 return this.http.post<Admin>(this.baseurl + "/login",data);
}

}
