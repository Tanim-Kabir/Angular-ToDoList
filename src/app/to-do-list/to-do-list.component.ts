import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoListAddService } from '../to-do-list-add.service';
import { ToDoListFetchService } from '../to-do-list-fetch.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  toDoListValue: string = '';
  toDoList: any[] = [];

  constructor(
    private postInputService: ToDoListAddService,
    private fetchTodoListService: ToDoListFetchService
  ) {
    console.log('Testing');
  }
  ngOnInit(): void {this.test()}

  test(): void {
    this.toDoList = this.fetchTodoListService.fetchToDoList();
    console.log('items');
  }


  addToDoList(): void {
    if (this.toDoListValue) {
      const newItem = {
        id: Math.random().toString(),
        value: this.toDoListValue,
      };
      this.fetchTodoListService.addItem(newItem);
      this.toDoList.push(newItem);
    } else {
      alert('Please enter ToDo List name!');
    }
  }

  editToDoList(): void {}

  deleteToDoList(): void {}
}
