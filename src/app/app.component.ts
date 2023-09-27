import { Component, OnInit, ViewChild, TemplateRef, OnDestroy} from '@angular/core';
import { Injectable, Directive, ElementRef, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { MatTableDataSource, MatTableModule, _MatTableDataSource } from '@angular/material/table';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy
{
  navigationSubscription;
  title = 'MyMoviePlan Landing Page';
  loggedA: boolean;
  loggedU: boolean;

  constructor(private router: Router)
  {
    this.navigationSubscription = this.router.events.subscribe((val)=>
    {
      if(val instanceof NavigationEnd)
      {
        this.loggedA = Boolean(localStorage.getItem("isAdminLoggedIn"));
        this.loggedU = Boolean(localStorage.getItem("isUserLoggedIn"));
      }
    })
  }

  ngInit()
  {

  }
  ngOnChanges()
  {
  }

  ngOnDestroy()
  {
    if(this.navigationSubscription)
    {
      this.navigationSubscription.unsubscribe();
    }
  }
}

