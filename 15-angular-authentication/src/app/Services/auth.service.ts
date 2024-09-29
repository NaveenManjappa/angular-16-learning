import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthResponse } from "../Model/AuthResponse";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class AuthService {
  http:HttpClient=inject(HttpClient);
  url:string='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
  
  signup(email:string,password:string){
    const data={ email:email,password:password,returnSecureToken:true};

    return this.http.post<AuthResponse>(this.url,data).pipe(
      catchError(httpErrorResponse => {
        let errorMsg;
        console.log('httpErrorResponse.error ',httpErrorResponse.error );
        if(!httpErrorResponse.error || !httpErrorResponse.error.error)
          errorMsg='Some error occured';

        switch(httpErrorResponse.error.error.message){
          case 'EMAIL_EXISTS':
            errorMsg='Email already registered!';
            break;
          case 'OPERATION_NOT_ALLOWED':
            errorMsg='This is not allowed!'
            break;
        }

        return throwError(()=>errorMsg);

      }) 
    );

  }

}