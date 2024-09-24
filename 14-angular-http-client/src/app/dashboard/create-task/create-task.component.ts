import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Model/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  
  @Input()
  editMode:boolean=false;

  @Input()
  selectedTask:Task;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskdata: EventEmitter<Task>=new EventEmitter<Task>();

  @ViewChild('taskForm') taskToEdit:NgForm;

  ngAfterViewInit(){
    setTimeout(()=> this.taskToEdit.form.patchValue(this.selectedTask),0);
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  OnTaskCreated(taskForm: NgForm) {
   
    this.EmitTaskdata.emit(taskForm.value);
    this.CloseForm.emit(false);
  }
}
