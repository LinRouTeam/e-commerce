import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:LandingComponent,children:
    [{ path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    }],}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
