import { Component, OnInit, Input } from '@angular/core';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { HttpClient } from '@angular/common/http';
import { ToDoListAddService } from '../to-do-list-add.service';
import { ToDoListFetchService } from '../to-do-list-fetch.service';
import { ToDoListDeleteService } from '../to-do-list-delete.service';
import { ToDoListEditService } from '../to-do-list-edit.service';

@Component({
  selector: 'list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent {
  constructor(
    private toDoListComponent: ToDoListComponent,
    private fetchTodoListService: ToDoListFetchService,
    private editTodoListService: ToDoListEditService,
    private deleteTodoListService: ToDoListDeleteService
  ) {}
  
  @Input() item: any;
  toDoListValue: string = '';
  toDoList: any[] = [];

  ngOnInit(): void {
    this.fetch();
  }
  addToDoList(item: any): void {
    this.toDoList.push(this.item);
  }
  fetch(): void {
    this.toDoList = this.fetchTodoListService.fetchToDoList();    // Service call
    console.log('items');
  }
  editToDoList(item: any): void {
    let toDoListValue = this.toDoListComponent.getToDoListValue();
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
