import { Component, EventEmitter } from '@angular/core';
import { ListTableComponent } from '../list-table/list-table.component';
import { HttpClient } from '@angular/common/http';
import { ToDoListAddService } from '../to-do-list-add.service';
import { ToDoListFetchService } from '../to-do-list-fetch.service';
import { ToDoListDeleteService } from '../to-do-list-delete.service';
import { ToDoListEditService } from '../to-do-list-edit.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  constructor(
    private addToDoListService: ToDoListAddService,
    private fetchTodoListService: ToDoListFetchService,
    private editTodoListService: ToDoListEditService,
    private deleteTodoListService: ToDoListDeleteService
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
