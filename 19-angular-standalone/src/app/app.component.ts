import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CourseRouteModule } from './courses/course-route.module';


@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HomeComponent,RouterModule]
})
export class AppComponent {
  title = '19-angular-standalone';
}
