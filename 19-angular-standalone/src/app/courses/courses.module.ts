import { NgModule } from "@angular/core";
import { CoursesComponent } from "./courses.component";
import { CourseRouteModule } from "./course-route.module";

@NgModule({
  declarations:[CoursesComponent],
  imports:[CourseRouteModule]
})
export class CoursesModule {

}