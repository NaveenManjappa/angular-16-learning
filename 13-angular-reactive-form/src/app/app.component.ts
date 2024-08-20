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
  formStatus:string='';

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

    // this.reactiveForm.get('username').statusChanges.subscribe(data=>{
    //   console.log(data);
    // })

    this.reactiveForm.statusChanges.subscribe(status=>{
      console.log(status);
      this.formStatus=status;
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

  GenerateUserName(){
    let userName='';
    const fName:string=this.reactiveForm.get('firstName').value;
    const lName:string=this.reactiveForm.get('lastName').value;
    const dob:string=this.reactiveForm.get('dob').value;

    if(fName.length>=3){
      userName+=fName.slice(0,3);
    }
    else {
      userName+=fName;
    }

    if(lName.length>=3){
      userName+=lName.slice(0,3);
    }
    else{
      userName+=lName;
    }

    let dateTime=new Date(dob);

    userName+=dateTime.getFullYear();
    userName=userName.toLowerCase();
    console.log(userName);

    // this.reactiveForm.setValue({
    //   firstName: this.reactiveForm.get('firstName').value,
    //   lastName:this.reactiveForm.get('lastName').value,
    //   email:this.reactiveForm.get('email').value,
    //   username:userName,
    //   dob:this.reactiveForm.get('dob').value,
    //   gender:this.reactiveForm.get('gender').value,
    //   address:{
    //     street:this.reactiveForm.get('address.street').value,
    //     country:this.reactiveForm.get('address.country').value,
    //     city:this.reactiveForm.get('address.city').value,
    //     region:this.reactiveForm.get('address.region').value,
    //     postal:this.reactiveForm.get('address.postal').value
    //   },      
    //   skills:this.reactiveForm.get('skills').value,
    //   experience:this.reactiveForm.get('experience').value
    // });

    // this.reactiveForm.get('username').setValue(userName);

    //patch value
    this.reactiveForm.patchValue({
      username:userName,
      address:{
        city:'New Delihi'
      }
    });

  }
} 
