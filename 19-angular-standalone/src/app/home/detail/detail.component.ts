import { Component, inject } from '@angular/core';
import { ActionService } from 'src/app/shared/action.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone:true,
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports:[SharedModule]
})
export class DetailComponent {
  
  action:string='Done';
  actionService=inject(ActionService);
  
  OnClick(){
    this.action=this.actionService.changeAction();
  }
}
