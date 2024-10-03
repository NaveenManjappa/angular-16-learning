import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from "@angular/router";
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations:[
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    OverviewComponent,
    StatsComponent    
  ],
  imports:[
    CommonModule,
    SharedModule,
    RouterModule
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