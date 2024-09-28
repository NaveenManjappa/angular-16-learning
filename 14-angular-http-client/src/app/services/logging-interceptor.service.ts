import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Logging interceptor called');
    return next.handle(req).pipe(
      (tap (event =>{
        if(event.type===HttpEventType.Response)
          console.log('Response arrived in logging interceptor');
      }))
    );
  }
}