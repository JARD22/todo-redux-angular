import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { deleteTodo, edit, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('input') input! : ElementRef;

  chkCompleted!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;
  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
    
    this.chkCompleted  = new FormControl(this.todo.completed);
    this.txtInput  = new FormControl(this.todo.text,Validators.required);

    this.chkCompleted.valueChanges.subscribe(value=>{
      
      this.store.dispatch(toggle({id: this.todo.id}))
      
    });
  }

  edit(){
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(()=>{

      this.input.nativeElement.select();
    },1)
  }

  finishEdit(){
    this.editing = false;
    if (this.txtInput.value === this.todo.text) {return;}

    if (this.txtInput.valid) {
      this.store.dispatch(edit({id:this.todo.id, text: this.txtInput.value}));
    }
  }

  delete(){
    this.store.dispatch(deleteTodo({id:this.todo.id}));
  }
}
