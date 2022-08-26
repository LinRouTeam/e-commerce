import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import Validation from '../Utils/validation';
import {  BsModalRef } from 'ngx-bootstrap/modal';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup
  passwordRegex!: RegExp;
  emailRegex!: RegExp;
  bsModalRef?: BsModalRef;
  alerts: any[] = [{
    
  }];

  constructor(public formBuilder:FormBuilder,
    public authService:AuthService , private Toast:NgToastService) {
     
   }

  ngOnInit(): void {
    this.passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    this.emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.registerForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.maxLength(50),Validators.minLength(4)]],
      email:[null,[Validators.required,Validators.pattern(this.emailRegex)]],
      password:[null,[Validators.required,Validators.pattern(this.passwordRegex )]],
      confirmPassword:[null,[Validators.required,Validators.pattern(this.passwordRegex )]],
      acceptTerms:[false, [Validators.requiredTrue]]

    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    })
  }
  get f(){
    return this.registerForm.controls;
 }


 showSuccess() {
      this.Toast.success({detail:'Success Message' , summary:'you are successufully registered',duration:1000})
  }
  
  showError() {
        this.Toast.error({detail:'Error Message' , summary:'Something went wrong',duration:5000})
  }

 onSubmitForm(){
  this.authService.register(this.registerForm.value).subscribe(
    user=>{
      console.log("succes")
      let token = user.token
      localStorage.setItem('Token',token)
      this.showSuccess()},
    (err) => {
        err.message;
        console.log(err.message);
        this.showError()
        }
  )
 }




}
