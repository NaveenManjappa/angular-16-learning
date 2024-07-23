import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('regForm') form!:NgForm;

  OnFormSubmitted(){
    console.log(this.form);
    console.log(this.form.value.firstName);
    console.log(this.form.value.lastName);
    console.log(this.form.value.email);

    console.log(this.form.controls["firstName"].value);
  }
}
