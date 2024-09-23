import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  showCreateTaskForm: boolean = false;
  
  http:HttpClient=inject(HttpClient);
  url= 'https://angularhttpclient-4d0cd-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';

  ngOnInit(): void {
    this.FetchAllTasks();
  }
  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateTask(data: Task) {
    console.log(data);
    

    const httpHeaders=new HttpHeaders({'warehouse':'MN'});

      this.http.post<{name:string}>(this.url,data,{headers:httpHeaders}).subscribe({
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

  private FetchAllTasks() {
    this.http.get<{[key:string]:Task}>(this.url).subscribe({
      next:(res)=>{
        console.log(res);
      }
    });
  }
}
