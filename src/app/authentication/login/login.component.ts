import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { Event, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable, filter} from 'rxjs';

import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  userName: string;
  password: string;
  formData: FormGroup;
  currentRoute: string;
  header: string;
  href: string;

  constructor
  (
    private authService : AuthService,
    private adminService : AdminService,
    private router: Router,
    private fb: FormBuilder
  )
  {
    this.router.events.pipe(filter((e:Event) => e instanceof NavigationEnd)).subscribe((e: any) =>
        {this.currentRoute = e.url;
          if(this.currentRoute === '/adminlogin')
            this.header = "Admin"
          else
            this.header = "User"});
  }

  ngOnInit()
  {
    this.href = this.router.url;

    if(this.currentRoute === '/adminlogin')
      this.header = "Admin"
    else
      this.header = "User";

    this.formData = this.fb.group(
    {
      userName: new FormControl(""),
      password: new FormControl(""),
    });
  }

  onClickSubmit(data: any)
  {
      this.userName = data.userName;
      this.password = data.password;

      console.log("Login username: " + this.userName);
      console.log("Login pass: " + this.password);
      console.log(this.href);


      if(this.href === '/userlogin')
        {
          this.authService.login(this.userName, this.password, "user")
          console.log("Checking user ", localStorage.getItem('IsUserLoggedIn'));
          if(localStorage.getItem('IsUserLoggedIn') == "true")
          {
            console.log("Navigating to landing - after successful user auth")
            this.router.navigate(['/user']);
          }
          else
            window.alert("Invalid login");
        }
        else
        {
          this.authService.login(this.userName, this.password, "admin")
          console.log("Checking admin ",localStorage.getItem('isAdminLoggedIn'))
          if(localStorage.getItem('isAdminLoggedIn') == "true")
          {
            console.log("Navigating to admin dashboard")
            this.router.navigate(['/admin']);
          }
        }

      /**
      if(this.href === '/userlogin')
        {
          this.authService.login(this.userName, this.password, "user")
            .subscribe( data =>
            {
              if(data)
                this.router.navigate(['/user']);
            });
        }
        else
        {
          this.authService.login(this.userName, this.password, "admin")
          .subscribe( data =>
          {
          console.log(data);
          if(data)
            this.router.navigate(['/admin']);
          });
        }
      */

      //Filtering how to treat the log in attemp. ie. is it a user or an admin login attemp
      /**
      this.router.events.pipe(filter((e:Event) => e instanceof NavigationEnd)).subscribe((e: any) =>
        {
          console.log("Inside router pipe")
          this.currentRoute = e.url;
          if(this.currentRoute === '/login')
          {
            this.authService.login(this.userName, this.password)
              .subscribe( data =>
              {
                console.log("Is Login Success: " + data);
                if(data) this.router.navigate(['/user']);
              });
          }
          else
          {
            this.authService.login(this.userName, this.password)
            .subscribe( data =>
            {
            console.log("Is Login Success: " + data);
            if(data) this.router.navigate(['/admin']);
            });
          }
        })
     */

  }
}
