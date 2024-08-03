import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  firstName:string='';
  lastName:string='';
  emailAdr: string='';
  dobirth:string='';

  @ViewChild('regForm') form!:NgForm;

  genders = [
    {id:'check-male',value:'male',display:'Male'},
    {id:'check-female',value:'female',display:'Female'},
    {id:'check-other',value:'other',display:'Other'}
  ];

  OnFormSubmitted(){
    console.log(this.form);
    console.log(this.form.value.firstName);
    console.log(this.form.value.lastName);
    console.log(this.form.value.email);
    console.log(this.form.value.address.country);

    console.log(this.form.controls["firstName"].value);
  }

  GenerateUserName(){
    let username='';
    if(this.firstName.length>=3){
      username+=this.firstName.slice(0,3);
    }
    else{
      username+=this.firstName;
    }

    if(this.lastName.length>=3){
      username+=this.lastName.slice(0,3);
    }
    else{
      username+=this.lastName;
    }

    let datetime=new Date(this.dobirth);
    username+= datetime.getFullYear();
    username=username.toLowerCase();
    console.log(username);

    //this.form.value.username=username;
    //this.form.controls["username"].value=username;

    //use set value or patch value
    // this.form.setValue({
    //   firstName:this.form.value.firstName,
    //   lastName:this.form.value.lastName,
    //   email:this.form.value.email,
    //   phone:this.form.value.phone,
    //   dob:this.form.value.dob,
    //   gender:this.form.value.gender,
    //   username:username,
    //   address:{
    //     street1:this.form.value.address.street1,
    //     street2:this.form.value.address.street2,
    //     country:this.form.value.address.country,
    //     city:this.form.value.address.city,
    //     region:this.form.value.address.region,
    //     postalcode:this.form.value.address.postalcode
    //   }
    // })

    this.form.form.patchValue({
      username:username,
      address:{
        country:'Japan'
      }
    });
  }
}
