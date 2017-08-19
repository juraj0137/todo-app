import { Component, OnInit, EventEmitter, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Todo } from "app/model/todo";

@Component({
  selector: 'nl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() todos: Todo[] = [];

  @Output() onAddItem = new EventEmitter();
  @Output() onDeleteItem = new EventEmitter();
  
  @Output() onToggleTodo = new EventEmitter();

}
