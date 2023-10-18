import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl = "http://localhost:3001/product";

  constructor(private http : HttpClient) { }

getproducts(){
  return this.http.get<Product>(this.baseurl);
}
 

 searchProduct(query:string){
return this.http.get<any>(this.baseurl+'/search/'+query)
}

newProduct(title:string,category:string,mrp:string,image:File , price:string,subcategory:string, description:string,spec:string,brand:string,features:string)
{ 
  let data = new FormData() 
  data.append('title',title)
  data.append('category' ,category)
  data.append('mrp' ,mrp)
 data.append('price' ,price)
  data.append('subcategory' ,subcategory)
   data.append('description' ,description)
  data.append('spec' ,spec)
  data.append('brand',brand)
  data.append('features',features)
  data.append('image',image,image.name)
  return this.http.post<Product>(this .baseurl,data);
 } 


 updateProductData(id: any, data: any) {
  return this.http.patch<Product>(this.baseurl + "/data/" + id, data);
}


   updateProduct(title:string,category:string,mrp:string,image:File , price:string,subcategory:string, description:string,spec:string,brand:string,features:string,id:string)
{ 
  let data = new FormData() 
  data.append('title',title)
  data.append('category' ,category)
  data.append('mrp' ,mrp)
 data.append('price' ,price)
  data.append('subcategory' ,subcategory)
   data.append('description' ,description)
  data.append('spec' ,spec)
  data.append('brand',brand)
  data.append('features',features)
  data.append('image' ,image , image.name)
  return this.http.patch<Product>(this. baseurl + "/" + id,data);
 } 

 getproductbycategory(category:string){
  return this.http.get<Product>(this. baseurl +"/category/" +category);}

getproductbysubcategory(subcategory:string){
  return this.http.get<Product>(this .baseurl +"/sub/" + subcategory);}

getproductbybrand(brand:string){
  return this.http.get<Product>(this .baseurl +"/brand/" + brand);}

getproduct(id:string){
  return this.http.get<Product>(this .baseurl + "/"+id);}

getRecent(){
  return this.http.get<Product>(this .baseurl +"/recent");}

delproduct(id:string){
  return this.http.delete<Product>(this. baseurl +"/"+id);}

}
