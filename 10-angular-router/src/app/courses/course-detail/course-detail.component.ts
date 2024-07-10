import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    
    //read the value of route parameter from the url,old way
    //this.courseId= this.activeRoute.snapshot.params['id'];

    this.courseId=+this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.courseId);

    this.selectedCourse = this.courseService.courses.find(course => course.id===this.courseId);
  }
}
