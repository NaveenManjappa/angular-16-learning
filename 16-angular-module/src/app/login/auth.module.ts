import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [ 
    { path: '', component: LoginComponent }      
]; 

@NgModule({
  declarations:[
    LoginComponent
  ],
  imports:[
    SharedModule,CommonModule,RouterModule.forChild(routes)
  ]
})
export class AuthModule {

}