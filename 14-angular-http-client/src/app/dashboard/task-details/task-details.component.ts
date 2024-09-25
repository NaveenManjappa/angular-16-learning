import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Model/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  @Output()
  CloseTaskDetailEvent=new EventEmitter<boolean>();

  @Input()
  CurrentTask:Task | null=null;

  CloseTaskDetailClicked(){
    this.CloseTaskDetailEvent.emit(false);
  }
}
