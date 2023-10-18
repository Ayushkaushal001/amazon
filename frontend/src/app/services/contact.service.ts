import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Contact} from './contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 
  baseurl = "http://localhost:3001/contact"
  constructor(private http:HttpClient) { }

   getContact(){
    return this.http.get<Contact>(this.baseurl);
   }

   newContact(data:any){
    return this.http.post<Contact>(this.baseurl , data);

   }
}
