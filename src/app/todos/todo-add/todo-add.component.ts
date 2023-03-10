import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { create } from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput : FormControl;

  constructor(
    private store: Store<AppState>
  ) { 
    this.txtInput  = new FormControl('Hello', Validators.required );
  }
 

  ngOnInit(): void {
  }

  add(){
    if (this.txtInput.invalid) {return;}
    this.store.dispatch(create({text: this.txtInput.value}));
   
    
  }

}
