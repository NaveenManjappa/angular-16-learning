import { NgModule } from "@angular/core";
import { CoursesComponent } from "./courses.component";
import { CourseRouteModule } from "./course-route.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations:[CoursesComponent],
  imports:[CourseRouteModule,RouterModule]
})
export class CoursesModule {

}