import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from "../utility/loader/loader.component";
import { SharedModule } from "../shared.module";

@NgModule({
  declarations:[
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent    
  ],
  imports:[
    CommonModule,
    SharedModule
  ],
  exports:[
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    SharedModule
  ]
})

export class DashboardModule {

}