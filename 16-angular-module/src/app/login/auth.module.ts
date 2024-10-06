import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CounterService } from "../Services/counter.service";

const routes: Routes = [ 
    { path: '', component: LoginComponent }      
]; 

@NgModule({
  declarations:[
    LoginComponent
  ],
  imports:[
    SharedModule,CommonModule,RouterModule.forChild(routes)
  ],
  providers:[
    CounterService
  ]
})
export class AuthModule {

}