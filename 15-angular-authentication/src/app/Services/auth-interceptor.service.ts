import { inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType, HttpEvent, HttpParams } from '@angular/common/http';
import { exhaustMap, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export class AuthInterceptorService implements HttpInterceptor{
    
    authService:AuthService=inject(AuthService);
    
    // intercept(req: HttpRequest<any>, next: HttpHandler){
    //     console.log('Auth Interceptor called!');
    //     const modifiedReq = req.clone({headers: req.headers.append('auth', 'abcxyz')})
    //     return next.handle(req).pipe(tap((event) => {  
    //         if(event.type === HttpEventType.Response){
    //             console.log('Response has arrived. Response data: ');
    //             console.log(event.body)
    //         }
    //     }));
    //}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if(!user) return next.handle(req);
                const modifiedReq=req.clone({params:new HttpParams().set('auth',user.Token)});
                return next.handle(modifiedReq);
            })
        )
    }
}