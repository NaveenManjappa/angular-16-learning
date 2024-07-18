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

  onConfirmationObs:any;

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
    // 2 Render component in the DOM
    const compRef=containerViewRef.createComponent(confirmDeleteCompFactory);

    //Passing the data to dynamically created component
    compRef.instance.userToDelete=user;

    //Getting the events
    this.onConfirmationObs=compRef.instance.OnConfirmation.subscribe(data=>{
      this.onConfirmationObs.unsubscribe();

      //remove the component from DOM
      containerViewRef.clear();

      if(data){
        let index = this.userService.users.indexOf(user);
        this.userService.users.splice(index,1);
        this.showUserToDeleteComp=false;
      }
      else{
        this.showUserToDeleteComp=false;
      }

    })

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
