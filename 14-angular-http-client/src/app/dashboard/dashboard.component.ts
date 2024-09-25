import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TaskService } from '../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  showCreateTaskForm: boolean = false;
  editMode:boolean=false;
  isLoading:boolean=false;
  showTaskDetail=false;
  selectedTask:Task;
  currentTask:Task | null=null;
  selectedTaskId:string;
  allTasks:Task[]=[];
  taskService:TaskService=inject(TaskService);
  errorMessage:string;

  errorSub:Subscription;

  ngOnInit(): void {
    this.FetchAllTasks();
    this.errorSub=this.taskService.errorSubject.subscribe({
      next: (httpError) => {
        this.setErrorMessage(httpError);
      } 
    })
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.selectedTask=null;
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
      }, 
      error: (err) => {
        console.log(err);
        this.isLoading=false;
        this.setErrorMessage(err);
       
      },
      complete:()=>{

      }
    });
  }

  private setErrorMessage(err:HttpErrorResponse){
    console.log('setError',err);
    if(err.error.error === 'Permission denied'){
      this.errorMessage='You do not have permission to perform this action!'
    }
    else{
      this.errorMessage=err.message;
    }
    setTimeout(()=>{
      this.errorMessage=null;
    },5000);
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

  ShowCurrentTaskDetail(id:string | undefined){
    this.showTaskDetail=true;
    this.taskService.getTaskDetail(id)
    .subscribe({
      next:(task:Task)=>{
        console.log('current task',task);
        this.currentTask=task;
      }
    });
  }

  CloseTaskDetail(){
    this.showTaskDetail=false;
  }
}
