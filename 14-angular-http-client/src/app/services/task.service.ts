import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Task } from "../Model/Task";
import { catchError, map } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn:'root'
})
export class TaskService {
  
  http:HttpClient=inject(HttpClient);
  url= 'https://angularhttpclient-4d0cd-default-rtdb.europe-west1.firebasedatabase.app/';
  errorSubject=new Subject<HttpErrorResponse>();

  loggingService=inject(LoggingService);

  CreateTask(task: Task) {    
    const httpHeaders=new HttpHeaders({'warehouse':'MN'});

      this.http.post<{name:string}>(this.url+'tasks.json',task,{headers:httpHeaders})
      .pipe(
        catchError(err => {
          //log the error in database
          this.loggingService.LogError({statusCode:err.status,errorMessage:err.message,date:new Date()});
          return throwError(()=>err);
        })
      )
      .subscribe({
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
    .pipe(
      catchError(err => {
        //log the error in database
        this.loggingService.LogError({statusCode:err.status,errorMessage:err.message,date:new Date()});
        return throwError(()=>err);
      })
    )
    .subscribe({
      error: err=>{
        this.errorSubject.next(err);
      }
    });
  }

  DeleteTask(id:string | undefined){
    this.http.delete(this.url+'/tasks/'+id+'.json')
    .pipe(
      catchError(err => {
        //log the error in database
        this.loggingService.LogError({statusCode:err.status,errorMessage:err.message,date:new Date()});
        return throwError(()=>err);
      })
    )
    .subscribe({
      error: err=>{
        this.errorSubject.next(err);
      }
    });
  }

  DeleteAllTasks(){
    this.http.delete(this.url+'/tasks.json')
    .pipe(
      catchError(err => {
        //log the error in database
        this.loggingService.LogError({statusCode:err.status,errorMessage:err.message,date:new Date()});
        return throwError(()=>err);
      })
    )
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
      }),
      catchError(err => {
        //log the error in database
        this.loggingService.LogError({statusCode:err.status,errorMessage:err.message,date:new Date()});
        return throwError(()=>err);
      })
    );
    
  }
  
  getTaskDetail(id:string | undefined){
    return this.http.get<Task>(this.url+'tasks/'+id+'.json')
    .pipe(
      map(res => {
        let task={};
        task={...res,id:id}
        return task;
      }
      )
    );
  }
}