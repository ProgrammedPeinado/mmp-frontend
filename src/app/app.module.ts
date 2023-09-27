import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatOptionModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatDividerModule } from '@angular/material/divider'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CanActivate, RouterModule, Routes, Router } from '@angular/router';

import { LandingComponent } from './Components/landing/landing.component';
import { UserComponent } from './Components/user/user.component';
import { AdminComponent } from './Components/admin/admin.component';
import { CreateComponent } from './Components/create/create.component';
import { EditComponent } from './Components/edit/edit.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from '../app/authentication/login/login.component';
import { LogoutComponent } from '../app/authentication/logout/logout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

import { AuthService } from './Services/auth.service';
import { AuthGuard } from './auth.guard';
import { AdminService } from './Services/admin.service';
import { UserService } from './Services/user.service';
import { ListComponent } from './Components/list/list.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes =
[
  {path: '', component: LandingComponent},
  {path: 'adminlogin', component: LoginComponent},
  {path: 'userlogin', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'user', component: UserComponent,
    children: [{path: 'movies', component: ListComponent, canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'}]},
  {path: 'admin', component: AdminComponent,
    children: [{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'}]},
  {path: '', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserComponent,
    AdminComponent,
    CreateComponent,
    EditComponent,
    CartComponent,
    LoginComponent,
    LogoutComponent,
    ListComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [UserService, AdminService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
