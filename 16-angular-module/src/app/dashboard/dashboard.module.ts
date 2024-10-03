import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { DashboardRouteModule } from "./dashboard-route.module";
import { RouterModule } from "@angular/router";

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
    RouterModule,
    DashboardRouteModule
  ],
  exports:[    
    SharedModule,
    DashboardRouteModule
  ]
})

export class DashboardModule {

}