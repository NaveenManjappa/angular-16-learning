import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthResponse } from "../Model/AuthResponse";
import { catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { User } from "../Model/User";

@Injectable({
  providedIn:'root'
})
export class AuthService {
  http:HttpClient=inject(HttpClient);
  url:string='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  loginUrl:string='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  user=new Subject<User>();

  signup(email:string,password:string){
    const data={ email:email,password:password,returnSecureToken:true};

    return this.http.post<AuthResponse>(this.url,data).pipe(
      tap(res => {
        this.handleCreateUser(res);
      }),
      catchError(this.handleError) 
    );
  }

  login(email,password){
    return this.http.post<AuthResponse>(this.loginUrl,{email:email,password:password,returnSecureToken:true}).pipe(
      tap(res => {
        this.handleCreateUser(res);
      }),
      catchError(this.handleError)
    );
  }

  private handleCreateUser(res){
    const expiresInTime=new Date().getTime()+ +res.expiresIn*1000;
    const expiresIn=new Date(expiresInTime);
    const user=new User(res.email,res.localId,res.idToken,expiresIn);
    console.log(user);
    this.user.next(user);
  }

  private handleError(httpErrorResponse){
      let errorMsg;
      console.log('httpErrorResponse.error ',httpErrorResponse.error );
      if(!httpErrorResponse.error || !httpErrorResponse.error.error)
        errorMsg='Some error occured';

      switch(httpErrorResponse.error.error.message){
        case 'EMAIL_EXISTS':
          errorMsg='Email already registered!';
          break;
        case 'OPERATION_NOT_ALLOWED':
          errorMsg='This is not allowed!';
          break;

        case 'EMAIL_NOT_FOUND':
          errorMsg='Email address not found!';
          break;

        case 'INVALID_PASSWORD':
          errorMsg='Password is invalid';
          break;

        case 'INVALID_LOGIN_CREDENTIALS':
          errorMsg='Email address or password is invalid';
          break;
      }

      return throwError(()=>errorMsg);
  }

}