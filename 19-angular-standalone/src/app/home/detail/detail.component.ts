import { Component, inject } from '@angular/core';
import { ActionService } from 'src/app/shared/action.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';

@Component({
  standalone:true,
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports:[HighlightDirective]
})
export class DetailComponent {
  
  action:string='Done';
  actionService=inject(ActionService);
  
  OnClick(){
    this.action=this.actionService.changeAction();
  }
}
