import 'normalize.css';
import { Component } from '@angular/core';
import { SortablejsOptions } from "angular-sortablejs/dist";

@Component({
  selector: 'nl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sortableOptions: SortablejsOptions = {
    animation: 150
  }

  todos: Todo[] = [];

  historyItems: HistoryTodo[] = [];

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

interface Todo {
  name: string;
  isDone: boolean;
}

interface HistoryTodo {
  name: string;
  numberOfUse: number;
}
