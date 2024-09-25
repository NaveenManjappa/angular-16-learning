import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  showCreateTaskForm: boolean = false;
  editMode:boolean=false;
  isLoading:boolean=false;
  selectedTask:Task;
  selectedTaskId:string;
  allTasks:Task[]=[];
  taskService:TaskService=inject(TaskService);

  http:HttpClient=inject(HttpClient);
  url= 'https://angularhttpclient-4d0cd-default-rtdb.europe-west1.firebasedatabase.app/';

  ngOnInit(): void {
    this.FetchAllTasks();
  }
  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateOrUpdateTask(task: Task) {
    if(!this.editMode)
      this.taskService.CreateTask(task);
    else 
      this.taskService.UpdateTask(this.selectedTaskId,task);
    
  }

  FetchAllClicked(){
    this.FetchAllTasks();
  }

  private FetchAllTasks() {
    this.isLoading=true;
    this.taskService.FetchAllTasks()
    .subscribe({
      next:(res)=>{
        this.allTasks=res;
        this.isLoading=false;
      }
    });
  }

  DeleteTask(id:string | undefined){
    this.taskService.DeleteTask(id);
  }

  DeleteAllTasks(){
    this.taskService.DeleteAllTasks();
  }

  EditTask(id:string | undefined){
    this.editMode=true;
    this.selectedTask= this.allTasks.find((task) =>  task.id===id);
    this.selectedTaskId=id;
    console.log('selected task:',this.selectedTask);
    this.showCreateTaskForm=true;
  }
}
