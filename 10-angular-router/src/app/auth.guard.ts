import { Router } from "@angular/router";
import { AuthService } from "./Services/auth.service";
import { inject } from "@angular/core";
import { CourseService } from "./Services/course.service";

export const CanActivate = () => {
    const authService: AuthService = inject(AuthService);
    const router:Router=inject(Router);

    
    
    if(authService.IsAuthenticated()){
        return true;
    }
    else{
        router.navigate(['/Login']);
        return false;
    }
}

export const CanActivateChild = () => {
   return CanActivate();
}

export const resolve = () =>{
    const courseService:CourseService=inject(CourseService);
    return courseService.getAllcourses();
}