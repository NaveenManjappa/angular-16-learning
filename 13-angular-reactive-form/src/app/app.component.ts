import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'template-driven-form';

  reactiveForm:FormGroup;

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      firstName: new FormControl(null),
      lastName:new FormControl(null),
      email:new FormControl(null),
      username:new FormControl(null),
      dob:new FormControl(null),
      gender:new FormControl('male'),
      street:new FormControl(null),
      country:new FormControl('India'),
      city:new FormControl(null),
      region:new FormControl(null),
      postal:new FormControl(null),
      skills:new FormControl(null)
    });
  }

  OnFormSubmitted() {
    console.log(this.reactiveForm);
  }
} 
