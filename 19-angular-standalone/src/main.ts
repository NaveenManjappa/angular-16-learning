import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ActionService } from './app/shared/action.service';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { app_routes } from './app/app-route';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent,{
  providers:[
    ActionService,// equivalent to providing service at the root module level
    provideRouter(app_routes)
  ] 
});
