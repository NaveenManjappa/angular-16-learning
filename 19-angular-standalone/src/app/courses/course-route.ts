
import { Route } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { FeaturedComponent } from "./featured/featured.component";

export const course_routes:Route[] =[
    {path:'',component:CoursesComponent},
    {path:'featured',component:FeaturedComponent}
];

