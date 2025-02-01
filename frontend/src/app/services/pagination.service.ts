import { Injectable } from '@angular/core';
import {HttpClient,httpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export interface Pagination {
 _id:string;
title:string;
mrp:string;
image:string;
price:string;
subcategory:string;
 category:string;
 date:Date;
 description:string;
 spec:string;
 brand:string;
 features:string;
response: string;
    st:number;
}
export class PaginationService {


  baseurl = "http://localhost:3001/product";


  constructor(private http:HttpClient) { }


  getProducts(page:number , pageSize:number) :Observable<any> { 
const params = new httpParams().set('page',page.tostring()).set('pageSize' ,pageSize.toString());

return this.http.get<any>(this.baseurl,{params});

  }
}
