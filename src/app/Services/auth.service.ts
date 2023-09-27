import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Admin } from '../Models/admin.model';

import { AdminService } from './admin.service';
import { UserService } from './user.service';

@Injectable({
   providedIn: 'root'
})
export class AuthService
{
  login(userName: string, password: string, type: string)
  {
      if(type === "user")
      {
        this.userService.checkUser(userName, password);
      }
      else
      {
        this.adminService.checkAdmin(userName, password);
      }

      /**
      if(type === "user")
      {
        return of(this.isUserLoggedIn).pipe(
          delay(1000),
          tap(val =>
          {
            console.log("Is user authentication successful? " + val);
          }));
      }
      else
      {
        return of(this.isAdminLoggedIn).pipe(
          delay(1000),
          tap(val =>
          {
            console.log("Is admin authentication successful? " + val);
          }));
      }
    */
  }

  logout(): void
  {
    if(this.adminService.getAdmin() == 'true')
      localStorage.removeItem('isAdminLoggedIn');
    else if(this.userService.getUser() == 'true')
      localStorage.removeItem('isUserLoggedIn');
  }

  constructor(private adminService: AdminService, private userService: UserService) { }
}
