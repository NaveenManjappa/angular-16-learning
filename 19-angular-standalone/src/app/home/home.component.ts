import { Component } from '@angular/core';
import { DetailComponent } from './detail/detail.component';

@Component({
  standalone:true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[DetailComponent] //valid only for standalone component
})
export class HomeComponent {

}
