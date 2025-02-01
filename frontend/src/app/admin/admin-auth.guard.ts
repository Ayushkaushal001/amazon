import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable} from 'rxjs'; 
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AdminAuthGuard implements CanActivate {
  constructor (private router : Router) {}

  canActivate () {

  	if( localStorage.getItem('adminId'))
    return true;

else {
	this.router.navigateByUrl('/admin/login');
 return false;
}
}


 }




