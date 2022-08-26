import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import Validation from '../Utils/validation';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from 'src/app/shared/components/modal-content/modal-content.component';

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
  constructor(public formBuilder:FormBuilder,
    public authService:AuthService,
    private modalService: BsModalService) {

   }

  ngOnInit(): void {
    this.passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    this.emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.registerForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.maxLength(50),Validators.minLength(4)]],
      email:[null,[Validators.required,Validators.pattern(this.emailRegex)]],
      //adress:[null,[Validators.required]],
      //phone:[null,[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
      password:[null,[Validators.required,Validators.pattern(this.passwordRegex )]],
      confirmPassword:[null,[Validators.required,Validators.pattern(this.passwordRegex )]],
      acceptTerms:[false, [Validators.requiredTrue]],

     // countrie:[null,[Validators.required]],
      //citie:[null,[Validators.required]],

    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    })
  }
  get f(){
    return this.registerForm.controls;
 }
 onSubmitForm(){
  this.authService.register(this.registerForm.value).subscribe(
    user=>{
      console.log("succes")
      let token = user.token
      localStorage.setItem('Token',token)
        },
    (err) => {
        this.openModalWithComponent()
        err.message;
       console.log(err.message);
        }
  )
 }
 openModalWithComponent() {
  const initialState: ModalOptions = {
    initialState: {
      body:'Email aleardy registred',
      title: 'Registration failed'
    }
  };
  this.bsModalRef = this.modalService.show(ModalContentComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
}

}
