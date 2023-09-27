import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilder, Validator } from '@angular/forms';
import { Event, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable, filter} from 'rxjs';

import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
  userName: string;
  email: string;
  password: string;
  formData: FormGroup;
  currentRoute: string;
  header: string;
  href: string;

  constructor(
    private authService : AuthService,
    private userService : UserService,
    private fb: FormBuilder,
    private router: Router,) { }
    private account_validation_messages; any;

  ngOnInit(): void
  {
    this.formData = this.fb.group(
      {
        userName: new FormControl(""),
        password: new FormControl(""),
        email: new FormControl("", Validators.compose([
                                            Validators.required,
                                            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
      });
  }

  onClickSubmit(data: any)
  {
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.registerUser();
  }

  private registerUser()
  {
    const user = {username: this.userName, email: this.email, password: this.password};
    if(this.userService.registerUser(user))
    {
      window.alert("Registration was successfully!");
      this.router.navigate(['/userlogin']);
    }
  }
}
