import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  authService:AuthService=inject(AuthService);
  isLoggedIn:boolean=false;
  userSub:Subscription;

  ngOnInit(){
  this.userSub= this.authService.user.subscribe(user=>{
      this.isLoggedIn=user ? true: false;
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  logOut(){
    this.authService.logout();    
  }

}
