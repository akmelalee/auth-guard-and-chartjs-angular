import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { NotauthGuard } from './shared/notauth.guard';

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthguardGuard]
  },
  {
   path: 'login', component: LoginComponent, canActivate: [NotauthGuard]
  },
  {
    path: 'register', component: RegisterComponent, canActivate: [NotauthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
