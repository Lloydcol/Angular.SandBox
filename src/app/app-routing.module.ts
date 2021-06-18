import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { BoardsComponent } from './dashboard/boards/boards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'authentification/login', pathMatch:'full'},
  {
    path:'authentification', component: AuthentificationComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard],
    children: [
      { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
      { path: 'boards', component: BoardsComponent, canActivate:[AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
