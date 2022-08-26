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
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {NgToastModule} from 'ng-angular-popup'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
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
    CarouselModule.forRoot(),
    NgToastModule


  ],
  exports:[
    HeaderComponent,
    ReactiveFormsModule,
    FooterComponent,
    HttpClientModule,
    TooltipModule,
    AlertModule,
    ModalModule,
    CarouselModule,
    NgToastModule

  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
]
})
export class SharedModule { }
