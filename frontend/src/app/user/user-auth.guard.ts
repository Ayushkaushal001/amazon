import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate()
 {
   if(localStorage.getItem('userId'))
    return true;
  else{
    this.router.navigateByUrl('/user/login');
    return false;
  }
  }
  
}
