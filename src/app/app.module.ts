import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCheckboxModule, MdMenuModule, MdButtonModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { HomeComponent } from './views/home/home.component';
import { LongPressDirective } from './long-press.directive';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, TodoListComponent, TodoListItemComponent, HomeComponent, LongPressDirective],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MdCheckboxModule, MdMenuModule, MdButtonModule, MdIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
