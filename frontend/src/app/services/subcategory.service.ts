import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subcategory} from './subcategory';
@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

   baseurl = "http://localhost:3001/subcategory";
  constructor(private http:HttpClient) {}
  
  getsubcategory(){
    return this.http.get<Subcategory>(this.baseurl);
  }

addsubcategory(data:any ){
  return this.http.post<Subcategory>(this.baseurl ,data );
}

delsubcategory(id:string){
  return this.http.delete<Subcategory>(this.baseurl +"/"+id);
}

getcategory(id:string){
    return this.http.get<Subcategory>(this.baseurl +"/" + id);
  }
}

