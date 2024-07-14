import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router ,Event, NavigationCancel, NavigationError} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'Angular Routing';
  showLoader:boolean=false;
  router:Router=inject(Router);

  ngOnInit() {
    this.router.events.subscribe((routerEvent:Event) => {
      if(routerEvent instanceof NavigationStart){
        this.showLoader=true;
      }
      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        this.showLoader=false;
      }
    });
  }

}
