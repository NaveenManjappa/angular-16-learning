import { Route, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";


export const app_routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'about',loadComponent:()=>import('./about/about.component').then(comp=> comp.AboutComponent)},
  {path:'courses',loadChildren:()=>import('./courses/course-route').then(mod => mod.course_routes)}
]


