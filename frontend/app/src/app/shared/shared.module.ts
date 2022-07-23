import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogComponent } from './components/dialog/dialog.component'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  exports:[
    HeaderComponent,
    ReactiveFormsModule,
    FooterComponent,
    HttpClientModule,
    DialogComponent
  ],

})
export class SharedModule { }
