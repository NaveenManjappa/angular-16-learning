import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Task } from "../Model/Task";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class TaskService {
  
  http:HttpClient=inject(HttpClient);
  url= 'https://angularhttpclient1-4d0cd-default-rtdb.europe-west1.firebasedatabase.app/';
  errorSubject=new Subject<HttpErrorResponse>();

  CreateTask(task: Task) {    
    const httpHeaders=new HttpHeaders({'warehouse':'MN'});

      this.http.post<{name:string}>(this.url+'tasks.json',task,{headers:httpHeaders}).subscribe({
        next: response => {
          console.log(response);          
        },
        error: err=>{
          console.log('Emitting the error');
          this.errorSubject.next(err);
        },
        complete: ()=>{
          console.log('Requested got completed');
        }
      });
  }

  UpdateTask(id:string | undefined,data:Task){
    this.http.put(this.url+'tasks/'+id+'.json',data)
    .subscribe({
      error: err=>{
        this.errorSubject.next(err);
      }
    });
  }

  DeleteTask(id:string | undefined){
    this.http.delete(this.url+'/tasks/'+id+'.json')
    .subscribe({
      error: err=>{
        this.errorSubject.next(err);
      }
    });
  }

  DeleteAllTasks(){
    this.http.delete(this.url+'/tasks.json')
    .subscribe({
      error: err=>{
        this.errorSubject.next(err);
      }
    });
  }
  
  FetchAllTasks() {
    return this.http.get<{[key:string]:Task}>(this.url+'tasks.json')
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
    );
    
  }
  
}