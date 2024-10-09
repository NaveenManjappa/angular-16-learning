import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ActionService } from './app/shared/action.service';
import { importProvidersFrom } from '@angular/core';
import { AppRouteModule } from './app/app-route.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent,{
  providers:[
    ActionService,// equivalent to providing service at the root module level
    importProvidersFrom(AppRouteModule)
  ] 
});
