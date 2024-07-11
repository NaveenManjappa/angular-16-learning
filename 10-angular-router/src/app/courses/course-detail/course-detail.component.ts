import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy {

  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs;

  ngOnInit(){
    
    //read the value of route parameter from the url,old way
    //this.courseId= this.activeRoute.snapshot.params['id'];

    //Snapshot will store only the intial router parameter value
    //this.courseId = +this.activeRoute.snapshot.paramMap.get('id');

    // this.activeRoute.params.subscribe(res=>{
    //   this.courseId= +res['id'];
    //   console.log(this.courseId);
    //   this.selectedCourse = this.courseService.courses.find(course => course.id===this.courseId);
    // });

    this.paramMapObs=this.activeRoute.paramMap.subscribe(res=>{
        this.courseId= +res.get('id');
        console.log(this.courseId);
        this.selectedCourse = this.courseService.courses.find(course => course.id===this.courseId);
      });
    
  }

  ngOnDestroy(): void {
    this.paramMapObs.unsubscribe();
  }

}
