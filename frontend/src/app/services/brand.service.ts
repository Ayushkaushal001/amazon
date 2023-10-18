import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Brand} from './brand';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  

    baseurl = "http://localhost:3001/Brand";
  constructor(private http:HttpClient) {}

  getBrand(){
    return this.http.get<Brand>(this.baseurl );
  }
  
    newBrand(title:string,description:string,image:File )
{ 
  let data = new FormData() 
  data.append('title',title)
  data.append('description' ,description)
  data.append('image' ,image , image.name)
    return this.http.post<Brand>(this .baseurl , data);
  }
  getbrandbyId(id:string){
  return this.http.get<Brand>(this .baseurl + "/"+id);}

  delBrand(id:string){
    return this.http.delete<Brand>(this.baseurl + "/" +id); 
  }
}
