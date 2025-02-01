import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{User} from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:3001/user"
  constructor(private http:HttpClient) { }


   getUsers(){
    return this.http.get<User>(this.baseUrl);
  }

  registerUser(data :User){
    return this.http.post<User>(this.baseUrl,data);
  }
  getUser(id:any){
return this.http.get<User>(this.baseUrl +"/" + id);}


  loginUser(data:any){
return this.http.post<User>(this.baseUrl + "/login",data  );}

updateProfile( data:User ,id:any) {
  return this.http.patch<User>(this.baseUrl +"/"+ id,data);
}


  changepwd(id:any ,data:User ){
    return this.http.patch<User>(this.baseUrl + "/pwd/" + id,data);
  }

  
resetPwd(data:any , emailId:string){
 return this.http.patch<User>(this.baseUrl + "/reset/" + emailId,data);
}

  forgetPwd(data:any){
    return this.http.post<User>(this.baseUrl  + "/forget" ,data);
  }
  isLogin(){
    const u = localStorage.getItem('userId')
    return !!u;
    
}
}