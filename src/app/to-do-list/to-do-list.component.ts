import { Component, EventEmitter } from '@angular/core';
import { ToDoListAddService } from '../to-do-list-add.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  constructor(
    private addToDoListService: ToDoListAddService,
  ) {}

  addEventEmitter = new EventEmitter<void>();
  toDoListValue: string = '';
  listValue!: string;
  handleEditEvent() {
    this.toDoListValue = '';
  }
  addToDoList(): void {
    if (this.toDoListValue) {
      const newItem = {
        id: Math.random().toString(),
        value: this.toDoListValue,
      };
      this.toDoListValue = '';
      this.addToDoListService.addToDoList(newItem);
      this.addEventEmitter.emit();
      //alert('ToDoList added successfully');
    } else {
      alert('Please enter ToDo List name!');
    }
  }
  getToDoListValue(): string {
    let sample = this.toDoListValue;
    return sample;
  }
}
