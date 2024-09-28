import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor called');
    const modifiedReq=req.clone({headers:req.headers.append('Authorization','token')});
    return next.handle(modifiedReq).pipe(
      tap(event => {
        console.log('Event',event.type, HttpEventType[event.type]);
        if(event.type === HttpEventType.Response)
          console.log('response body',event.body);
      })
    )
  }
}