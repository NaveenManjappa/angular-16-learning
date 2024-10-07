import { Component, DoCheck , signal} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements DoCheck {
   counter = signal(0);//writable signal

   message: string[] = [];

   ngDoCheck(): void {
     console.log('Angular change detection called!');
   }
   increment(){
    //this.counter.set(this.counter()+1);
    this.counter.update(val => val+1);
    this.message.push('Current counter value is: ' + this.counter());
   }

   decrement(){
    this.counter.update(val => val-1);
    this.message.pop();
   }
}