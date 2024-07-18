import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Models/User';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ViewContainer } from '../viewcontainer.directive';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService,private compFactResolver:ComponentFactoryResolver) { 

  }

  users: User[] = [];
  showUserToDeleteComp:boolean = false;
  userToDelete!:User;
  @ViewChild(ViewContainer) container!: ViewContainer;

  ngOnInit() {
    this.users = this.userService.users;
  }

  OnDeleteUserClicked(user:User){
    // this.userToDelete=user;
    // this.showUserToDeleteComp=true;
    this.ShowConfirmDelete(user)
    
  }

  ShowConfirmDelete(user:User){
    //1 Create an instance of confirm delete component
    const confirmDeleteCompFactory=this.compFactResolver.resolveComponentFactory(ConfirmDeleteComponent);

    const containerViewRef=this.container.viewContainer;

    containerViewRef.clear();

    containerViewRef.createComponent(confirmDeleteCompFactory);
  }

  OnConfirmClicked(event:any){
    console.log(event);
    if(event){
      let index = this.userService.users.indexOf(this.userToDelete);
      this.userService.users.splice(index,1);
      this.showUserToDeleteComp=false;
    }
    else{
      this.showUserToDeleteComp=false;
    }
  }
}
