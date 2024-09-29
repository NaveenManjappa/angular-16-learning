import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthResponse } from "../Model/AuthResponse";

@Injectable({
  providedIn:'root'
})
export class AuthService {
  http:HttpClient=inject(HttpClient);
  url:string='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAO_Z3fZBfsZzNk_JcUm0I3uPyYyaDvnZs'
  
  signup(email:string,password:string){
    const data={ email:email,password:password,returnSecureToken:true};

    return this.http.post<AuthResponse>(this.url,data);

  }

}