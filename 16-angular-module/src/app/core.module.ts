import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./Services/auth-interceptor.service";
import { LoggingInterceptorService } from "./Services/logging-interceptor.servive";
import { AuthService } from "./Services/auth.service";

@NgModule({
  providers:[
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}
  ]
})
export class CoreModule {

}