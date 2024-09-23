import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  showCreateTaskForm: boolean = false;
  
  http:HttpClient=inject(HttpClient);

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateTask(data: Task) {
    console.log(data);
    const url= 'https://angularhttpclient-4d0cd-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';

      this.http.post(url,data).subscribe({
        next: response => {
          console.log(response);
        },
        error: err=>{
          console.log(err);
        },
        complete: ()=>{
          console.log('Requested got completed');
        }
      });
  }
}
