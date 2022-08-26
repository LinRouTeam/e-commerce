import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../shared/guards/login.guards';
import { LogoutGuard } from '../shared/guards/logout.guard';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
        path:'auth',children:[
            {path:'register',component:RegisterComponent}
        ],
        canActivate:[LogoutGuard]
    }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
