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
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalContentComponent } from './components/modal-content/modal-content.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    ModalContentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),


  ],
  exports:[
    HeaderComponent,
    ReactiveFormsModule,
    FooterComponent,
    HttpClientModule,
    DialogComponent, 
    TooltipModule,
    AlertModule,
    ModalModule


  ],

})
export class SharedModule { }
