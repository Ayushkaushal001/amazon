import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Category} from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
   baseurl = "http://localhost:3001/category";
  constructor(private http:HttpClient) {}

  getCategory(){
    return this.http.get<Category>(this .baseurl );
  }
  
    newCategory(title:string,description:string,image:File)
{ 
  let data = new FormData() 
  data.append('title',title)
  data.append('description' ,description)
  data.append('image' ,image , image.name)
    return this.http.post<Category>(this .baseurl , data);
  }
  delCategory(id:string){
    return this.http.delete<Category>(this .baseurl + "/" +id); 
  }


}
