import { Expression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './Validators/noSpaceAllowed.validator';

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
      firstName: new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed]),
      lastName:new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      username:new FormControl(null,Validators.required,CustomValidators.checkUserName),
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
      ]),
      experience:new FormArray([])
    });

    //value changes event at control level    
    // this.reactiveForm.get('firstName').valueChanges.subscribe((value)=>{
    //   console.log(value);
    // });

    //value changes event at form group level
    // this.reactiveForm.valueChanges.subscribe(data=>{
    //   console.log(data);
    // });

    this.reactiveForm.get('username').statusChanges.subscribe(data=>{
      console.log(data);
    })

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

  AddExperience(){
    const formGrp=new FormGroup({
      company:new FormControl(null),
      position:new FormControl(null),
      totalExp:new FormControl(null),
      start:new FormControl(null),
      end:new FormControl(null)
    });
    (<FormArray>this.reactiveForm.get('experience')).push(formGrp);
  }

  DeleteExperience(index:number){
    (<FormArray>this.reactiveForm.get('experience')).removeAt(index);
  }
} 
