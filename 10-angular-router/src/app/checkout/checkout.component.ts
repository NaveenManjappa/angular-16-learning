import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {    

    activeRoute:ActivatedRoute=inject(ActivatedRoute);
    course;
    
    ngOnInit(): void {
      this.activeRoute.data.subscribe(res=>{
        this.course=res;
      })
    }

}
