import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { PopularComponent } from "./home/popular/popular.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuardService } from "./Services/authguard.service";
import { CanActivate, CanActivateChild, resolve } from "./auth.guard";

const routes:Routes = [
    { path:'Home',component:HomeComponent},
    { path:'About',component:AboutComponent},
    { path:'Contact',component:ContactComponent,canDeactivate:[(comp:ContactComponent)=> comp.canExit()]},
    { path:'Courses',component:CoursesComponent,resolve:{courses:resolve}},
    // {path:'',redirectTo:'Home',pathMatch:'full'}
    { path:'',component:HomeComponent},
    // {path:'Courses/Course/:id',component:CourseDetailComponent},
    { path:'Courses', canActivateChild:[CanActivateChild], children:[
      { path:'Course/:id',component:CourseDetailComponent },
      { path:'Popular',component:PopularComponent },
    //  { path: 'Checkout', component:CheckoutComponent,data:{name:'Test Course',price:449 } 
      { path: 'Checkout', component:CheckoutComponent}      
    
    
    ]},
    { path:'Login',component:LoginComponent},
    {path:'**',component:NotFoundComponent}
  ];
  
@NgModule({
imports:[
    RouterModule.forRoot(routes,{enableTracing:true})
],
exports:[
    RouterModule
]
})
export class RoutingModule{

}