import { Component, OnInit, Input, EventEmitter, ChangeDetectionStrategy, Output, ViewChild } from '@angular/core';
import { Todo } from "app/model/todo";
import { MdMenuTrigger } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'nl-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.less']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  @Output() onToggleTodo = new EventEmitter();

  @Output() onDelete = new EventEmitter();

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  menuPosition = {
    x: 0, y: 0
  }

  constructor(private sanitizer: DomSanitizer) { }

  onLongpress(event: TouchEvent) {
    if (event.touches.length == 1) {
      this.menuPosition = this.getPositionOfEvent(event.touches[0]);
      setTimeout(() => this.trigger.openMenu(), 1);
      return false;
    }
  }

  onRightclick(event: MouseEvent) {
    this.menuPosition = this.getPositionOfEvent(event);
    setTimeout(() => this.trigger.openMenu(), 1);
    return false;
  }

  private getPositionOfEvent(event: MouseEvent | Touch) {
    let element = event.target as HTMLElement;

    while (element && !element.classList.contains('todo-item')) {
      element = element.parentElement;
    }

    if (!element) return { x: 0, y: 0 };

    return {
      y: event.pageY - element.getBoundingClientRect().top - 10,
      x: event.pageX - element.getBoundingClientRect().left
    }
  }

  get menuTriggerStyle() {

    const { x, y } = this.menuPosition
    const css = `visibility: hidden; left: ${x}px; top: ${y}px; position: absolute; `;
    return this.sanitizer.bypassSecurityTrustStyle(css);
  }

}
