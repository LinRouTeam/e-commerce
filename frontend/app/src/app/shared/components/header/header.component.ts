import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  user !: User;
  constructor(private authService:AuthService , private UserService:UserService) { }

  ngOnInit(): void {
    if(this.isAuthenticated()){
        this.UserService.getUser().subscribe(
       user =>{
        this.user = user
          console.log(this.user.name)
       }
  ) 
    }
   
  }

  isAuthenticated():boolean{
        return this.authService.isAuthenticated()
      }


 
}
