import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class LoggingService {

  http:HttpClient=inject(HttpClient);
  url= 'https://angularhttpclient-4d0cd-default-rtdb.europe-west1.firebasedatabase.app/';

  LogError(data:{statusCode:number,errorMessage:string,date:Date}){
    this.http.post(this.url+'log.json',data)
    .subscribe();
  }

  FetchErrors(){
    this.http.get(this.url+'log.json')
    .subscribe();
  }
}