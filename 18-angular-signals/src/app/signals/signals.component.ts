import { Component, DoCheck , signal,computed,effect} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements DoCheck {
   counter = signal(0);//writable signal

   doubleCounter=computed(() => this.counter()*2);

   message= signal<string[]>([]);

   /**
    *
    */
   constructor() {
   effect(()=>console.log('New counter value is:',this.counter()));
    
   }
   ngDoCheck(): void {
     console.log('Angular change detection called!');
   }

   increment(){
    //this.counter.set(this.counter()+1);
    this.counter.update(val => val+1);
    //this.message.update(prevMsg => [...prevMsg,'The current value of counter is:'+this.counter()] );
    this.message.mutate(prevMsg=>prevMsg.push('The current value of counter is:'+this.counter()));
   }

   decrement(){
    this.counter.update(val => val-1);
    //this.message.pop();
    this.message.mutate(prevMsg=>prevMsg.pop());
   }
}
