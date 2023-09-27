import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators'
import { of } from 'rxjs'
import { Admin } from '../Models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService
{
  uri = 'http://localhost:8080'; //this is correct
  isAdminLoggedIn: string;
  constructor(private http : HttpClient) {}

  checkAdmin(username: String, password: String)
  {
    var isAdmin: boolean;
    const admin =
    {
      username: username,
      password: password
    }

    /**
    this.http.get(`${this.uri}/admin`).subscribe(data =>
    {
    if(Boolean(data))
      return data;
    else
      return false;
    });
     */

    this.http.post(`${this.uri}/admin`, admin).subscribe(data =>
      {
        data = Boolean(data).valueOf();
      if(data)
      {
        this.setAdmin("true");
        return this.getAdmin;
      }
      else
        {
          return false;
        }
      });

    //this.http.post(`${this.uri}/admin`, admin).subscribe({
    //  next: data=> { return data.toString}


    //return this.http.post(`${this.uri}/admin`, admin);
    //console.log(`${this.uri}/admin`);
    //return this.http.get(`${this.uri}/admin`);
    //return this.http.post(`${this.uri}/admin`, admin).pipe(map((res: Response)=>
    //res.json()));
  }

  private setAdmin(flag : string)
  {
    this.isAdminLoggedIn = flag;
    console.log(flag)
    localStorage.setItem('isAdminLoggedIn', this.isAdminLoggedIn ? "true" : "false");
    console.log("Checking admin ",localStorage.getItem('isAdminLoggedIn'))
  }

  getAdmin()
  {
    return localStorage.getItem('isAdminLoggedIn');
  }
}
