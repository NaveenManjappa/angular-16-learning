import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  showCreateTaskForm: boolean = false;
  
  http:HttpClient=inject(HttpClient);
  url= 'https://angularhttpclient-4d0cd-default-rtdb.europe-west1.firebasedatabase.app/';

  allTasks:Task[]=[];

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

      this.http.post<{name:string}>(this.url+'tasks.json',data,{headers:httpHeaders}).subscribe({
        next: response => {
          console.log(response);
          this.FetchAllTasks();
        },
        error: err=>{
          console.log(err);
        },
        complete: ()=>{
          console.log('Requested got completed');
        }
      });
  }

  FetchAllClicked(){
    this.FetchAllTasks();
  }

  private FetchAllTasks() {
    this.http.get<{[key:string]:Task}>(this.url+'tasks.json')
    .pipe(
      map(res=>{
        //Transform the data
        let tasks=[];
        for(let key in res){
          if(res.hasOwnProperty(key))
            tasks.push({...res[key],id:key});
        }
        return tasks;
      })
    )
    .subscribe({
      next:(res)=>{
        this.allTasks=res;
      }
    });
  }

  DeleteTask(id:string | undefined){
    this.http.delete(this.url+'/tasks/'+id+'.json')
    .subscribe(res => this.FetchAllTasks());
  }

  DeleteAllTasks(){
    this.http.delete(this.url+'/tasks.json')
    .subscribe(res => this.FetchAllTasks());
  }
}
