import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../shared/guards/login.guards';
import { LogoutGuard } from '../shared/guards/logout.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
        path:'auth',children:[
            {path:'register',component:RegisterComponent},
            {path:'logIn',component:LoginComponent}
        ],
        canActivate:[LogoutGuard]
    }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
