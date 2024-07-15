import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {    

    activeRoute:ActivatedRoute=inject(ActivatedRoute);
    router:Router=inject(Router);
    course;
    
    ngOnInit(): void {
      // this.activeRoute.data.subscribe(res=>{
      //   this.course=res;
      // })

      //To use getCurrentNavigation method, it should be put inside the constructor as ngOnit is too late
      //this.course=this.router.getCurrentNavigation().extras.state;
      this.course=history.state;
    }

}
