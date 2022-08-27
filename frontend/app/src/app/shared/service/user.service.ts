import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/' 
  httpOptions ={
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http:HttpClient,private jwtHelper:JwtHelperService) { }
  

  getUser():Observable<User>{
      return this.http.get<User>( this.url +'getUser' , this.httpOptions);
    }

    
}
