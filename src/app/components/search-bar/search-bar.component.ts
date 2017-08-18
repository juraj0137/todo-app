import { Component, OnInit, ContentChildren, TemplateRef, Input, Output, EventEmitter, ContentChild, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'nl-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {

  @Input() placeholder = '';
  @Input() listItems = [];

  @Input() get value() { return this.inputValue; }
  @Output() valueChange = new EventEmitter<string>();
  @Output() onFocus = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onItemClick = new EventEmitter();
  @Output() onItemAdd = new EventEmitter();

  set value(val) {
    this.inputValue = val;
    this.valueChange.emit(val);
  }

  private inputValue = '';
  private focused = false;
  get isFocused() { return this.focused; }
  set isFocused(val) {
    this.focused = val;
    (val ? this.onFocus : this.onBlur).next();
  }

  @ContentChild('listItem') listItemRef;

  @ViewChild('searchInput') searchInput: ElementRef;

  ngOnInit() {
    this.onItemAdd.subscribe(() => {
      (this.searchInput.nativeElement as HTMLInputElement).blur();
    });
    this.onBlur.subscribe(() => this.value = '');
  }

  focus() {
    (this.searchInput.nativeElement as HTMLInputElement).focus();
  }
}
