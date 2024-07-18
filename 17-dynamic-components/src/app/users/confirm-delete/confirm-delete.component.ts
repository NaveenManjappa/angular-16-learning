import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit{

  @Input() userToDelete!: User;

  @Output() OnConfirmation: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    
  }
  OnOkButtonClicked(value:boolean){
    this.OnConfirmation.emit(value);

  }

  OnCancelButtonClicked(value:boolean){
    this.OnConfirmation.emit(value);

  }

}
