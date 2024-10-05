import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { canActivate } from "../RouteGuards/authGuard";
import { OverviewComponent } from "./overview/overview.component";
import { StatsComponent } from "./stats/stats.component";


const childRoutes:Routes = [
  { path: '', canActivate: [canActivate],children:[
    {path:'overview',component:OverviewComponent},
    {path:'stats',component:StatsComponent},
    {path:'',component:OverviewComponent}
  ] }
];

@NgModule({
  imports:[
    RouterModule.forChild(childRoutes)
  ],
  exports:[]
})
export class DashboardRouteModule {

}