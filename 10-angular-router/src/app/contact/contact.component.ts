import { Component } from '@angular/core';
import { IDeActivateComponent } from '../Services/authguard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeActivateComponent {
  firstname: string ='';
  lastname: string = '';
  message: string = '';
  country: string='usa';

  isSubmitted:boolean=false;

  OnSubmit(){
    this.isSubmitted=true;
  }

  canExit(){
    if((this.firstname || this.lastname || this.message) && !this.isSubmitted){
      if(confirm('You have unsaved changes. Are you sure you want to navigate away?')){
        return true;
      }
      else
      return false;
    }
    return true;
  }

}
