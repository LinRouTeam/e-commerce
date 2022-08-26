import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../shared/guards/login.guards';
import { LogoutGuard } from '../shared/guards/logout.guard';
import { ArticlesComponent } from './components/articles/articles.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
        path:'shop',
        children:[
            {path:'articles',component:ArticlesComponent}
        ]
    }
  ])],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
