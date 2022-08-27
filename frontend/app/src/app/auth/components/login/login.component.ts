import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/shared/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private formBuilder:FormBuilder,private Toast:NgToastService,private authService:AuthService) { }

  loginForm!:FormGroup;
  emailRegex!:RegExp;


  ngOnInit(): void {
    this.emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.loginForm = this.formBuilder.group({
      email:[null,[Validators.required,Validators.pattern(this.emailRegex)]],
      password:[null,[Validators.required]],
    })
  }


  get f(){
      return this.loginForm.controls;
   }


   showSuccess() {
      this.Toast.success({detail:'Success Message' , summary:'you are successufully Logged In',duration:1000})
  }
  
  showError() {
        this.Toast.error({detail:'Error Message' , summary:'Invalid Credentials',duration:5000})
  }

  onSubmitForm(){
     this.authService.logIn(this.loginForm.value).subscribe(
    user=>{
      console.log("succes")
      let token = user.token
      localStorage.setItem('Token',token)
      this.showSuccess()
      this.router.navigateByUrl('/')
    },
    (err) => {
        err.message;
        console.log(err.message);
        if(err.message ===  'Invalid Credentials'){
           this.showError()
        }else{
          this.Toast.error({detail:'Error Message' , summary:'Something went wrong',duration:5000})
        }
        
        }
  )
  } 


}
