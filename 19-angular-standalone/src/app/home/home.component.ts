import { Component } from '@angular/core';
import { DetailComponent } from './detail/detail.component';
import { ActionService } from '../shared/action.service';

@Component({
  standalone:true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[DetailComponent], //valid only for standalone component
  providers:[ActionService]
})
export class HomeComponent {

}
