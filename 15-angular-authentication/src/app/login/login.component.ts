import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  authService:AuthService=inject(AuthService);
  isLoginMode:boolean=true;
  isLoading:boolean=false;
  errorMessage:string | null=null;

  onSwitchMode() {
    this.isLoginMode=!this.isLoginMode;
  }

  onAuthFormSubmitted(form:NgForm){
    console.log(form.value);
    const email=form.value.email;
    const password=form.value.password;
    this.isLoading=true;
    if(this.isLoginMode){
      return;
    }
    else {
      
      this.authService.signup(email,password).subscribe({
        next:(res)=>{
          console.log(res);
          this.isLoading=false;
        },
        error:(errMsg)=>{
          console.log('errMsg',errMsg);
          this.errorMessage=errMsg;
          this.isLoading=false;
          this.hideSnackbar();
        }
      });
    }
    
    form.reset();
  }

  hideSnackbar(){
    setTimeout(()=>this.errorMessage=null,3000);
  }
}
