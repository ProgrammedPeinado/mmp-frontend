import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate, UrlTree } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { map, Observable } from 'rxjs';

@Injectable(
{
  providedIn: 'root'
})

export class AuthGuard implements CanActivate
{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean | UrlTree
  {
    let url: string = state.url;
    return this.checkLogin(url);
  }


  checkLogin(url: string): true | UrlTree
  {
    let val: string = localStorage.getItem('isUserLoggedIn');
    let admincheck: string = localStorage.getItem('isAdminLoggedIn');
    if((val != null && val == "true" ) || (admincheck != null && admincheck == "true"))
    {
      if(url === "/user")
      {
        return this.router.parseUrl('user');
      }
      else
      {
        return this.router.parseUrl('admin');
      }
    }
    else if(this.router.url === "/admin")
      {
        return this.router.parseUrl('/adminlogin');
      }
      else
      {
        return this.router.parseUrl('/userlogin');
      }
  }
}
