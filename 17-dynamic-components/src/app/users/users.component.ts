import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) { 

  }

  users: User[] = [];
  showUserToDelete:boolean = false;
  userToDelete!:User;

  ngOnInit() {
    this.users = this.userService.users;
  }

  OnDeleteUserClicked(user:User){
    this.userToDelete=user;
    this.showUserToDelete=true;
    
  }

  OnConfirmClicked(event:any){
    console.log(event);
    if(event){
      let index = this.userService.users.indexOf(this.userToDelete);
      this.userService.users.splice(index,1);
      this.showUserToDelete=false;
    }
    else{
      this.showUserToDelete=false;
    }
  }
}
