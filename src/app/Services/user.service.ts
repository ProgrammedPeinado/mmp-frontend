import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { of } from 'rxjs'
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:8080';
  isUserLoggedIn: string;

  constructor(private http : HttpClient) {}

  checkUser(username: String, password: String)
    {
      var isUser = false;
      const user =
      {
        username: username,
        password: password
      }

      /**
      this.http.post(`${this.uri}/users`, user).subscribe((data)=>
      {if(Boolean(data) === data)
        isUser = Boolean(data);});
      return isUser;
       */

      this.http.post(`${this.uri}/user`, user).subscribe(data =>
        {
          data = Boolean(data).valueOf();
          console.log(data);
        if(data)
        {
          this.setUser("true");
          return this.getUser;
        }
        else
          {
            console.log("returning false")
            return false;
          }
        });
      //return of(this.http.post(`${this.uri}/user`, user).pipe());
    }

    private setUser(flag : string)
    {
      this.isUserLoggedIn = flag;
      console.log(this.isUserLoggedIn)
      if(this.isUserLoggedIn == "true")
        localStorage.setItem("isUserLoggedIn", "true")
      console.log("Checking user ", localStorage.getItem('isUserLoggedIn'));
    }

    getUser()
    {
      console.log("returning the user token");
      return localStorage.getItem('isUserLoggedIn');
    }

    registerUser(user: any)
    {
      console.log("Registering..")
      return this.http.post(`${this.uri}/user/create`, user).subscribe(data =>
        {
          if(data)
          {
            return data;
          }
          else
            {
              return false;
            }
        });
    }
}
