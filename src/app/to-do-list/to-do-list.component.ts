import { Component, OnInit } from '@angular/core';
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
export class ToDoListComponent implements OnInit {
  constructor(
    private postInputService: ToDoListAddService,
    private addToDoListService: ToDoListAddService,
    private fetchTodoListService: ToDoListFetchService,
    private editTodoListService: ToDoListEditService,
    private deleteTodoListService: ToDoListDeleteService
  ) {}

  toDoListValue: string = '';
  toDoList: any[] = [];

  ngOnInit(): void {
    this.fetch();
  }
  addToDoList(): void {
    if (this.toDoListValue) {
      const newItem = {
        id: Math.random().toString(),
        value: this.toDoListValue,
      };
      this.toDoListValue = "";
      this.toDoList.push(newItem);    // Not in Service call
      this.addToDoListService.addToDoList(newItem);
      //alert('ToDoList added successfully');
    } else {
      alert('Please enter ToDo List name!');
    }
  }
  fetch(): void {
    this.toDoList = this.fetchTodoListService.fetchToDoList();    // Service call
    console.log('items');
  }
  editToDoList(item: any): void {
    let index = this.toDoList.indexOf(item);
    this.toDoList[index].value = this.toDoListValue;
    this.toDoListValue = "";
    this.editTodoListService.editToDoList(index, this.toDoList[index].value);    // Service call
    //alert('ToDoList Editted successfully');
  }
  deleteToDoList(item: any): void {
    let a = this.toDoList.splice(this.toDoList.indexOf(item), 1);
    this.deleteTodoListService.deleteTodoList(item);    // Service call
  }
}
