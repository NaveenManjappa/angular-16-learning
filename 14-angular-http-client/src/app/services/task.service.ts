import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Task } from "../Model/Task";
import { map } from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class TaskService {
  
  http:HttpClient=inject(HttpClient);
  url= 'https://angularhttpclient-4d0cd-default-rtdb.europe-west1.firebasedatabase.app/';

  CreateTask(task: Task) {    
    const httpHeaders=new HttpHeaders({'warehouse':'MN'});

      this.http.post<{name:string}>(this.url+'tasks.json',task,{headers:httpHeaders}).subscribe({
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

  UpdateTask(id:string | undefined,data:Task){
    this.http.put(this.url+'tasks/'+id+'.json',data)
    .subscribe();
  }

  DeleteTask(id:string | undefined){
    this.http.delete(this.url+'/tasks/'+id+'.json')
    .subscribe();
  }

  DeleteAllTasks(){
    this.http.delete(this.url+'/tasks.json')
    .subscribe();
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