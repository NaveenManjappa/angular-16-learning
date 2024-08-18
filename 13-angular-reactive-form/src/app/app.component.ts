import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      firstName: new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      username:new FormControl(null),
      dob:new FormControl(null),
      gender:new FormControl('male'),
      address:new FormGroup({
        street:new FormControl(null,Validators.required),
        country:new FormControl('India',Validators.required),
        city:new FormControl(null),
        region:new FormControl(null),
        postal:new FormControl(null,Validators.required)
      }),      
      skills:new FormArray([
        new FormControl(null,Validators.required)        
      ])
    });
  }

  OnFormSubmitted() {
    console.log(this.reactiveForm);
  }

  AddSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }

  DeleteSkill(index){
    const controls=<FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }
} 
