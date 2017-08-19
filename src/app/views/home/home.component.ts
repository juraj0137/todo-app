import { Component, OnInit } from '@angular/core';
import { Todo } from "app/model/todo";

@Component({
  selector: 'nl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
    const todos = localStorage.getItem('todos')
    try {
      this.todos = JSON.parse(todos) || [];
    } catch (e) {
      this.todos = [];
    }
  }

  addTodo(name: string) {
    this.todos.unshift({
      name: name,
      isDone: false
    } as Todo);
    this.updateLS();
  }

  toggleTodo(todo: Todo) {
    this.todos.map(t => {
      if (t === todo) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    this.updateLS();
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.updateLS();
  }

  updateLS() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
