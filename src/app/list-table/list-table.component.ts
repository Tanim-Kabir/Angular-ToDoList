import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
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
export class ListTableComponent implements OnChanges {
  constructor(
    //@Input() toDolistValue: string,
    private toDoListComponent: ToDoListComponent,
    private fetchTodoListService: ToDoListFetchService,
    private editTodoListService: ToDoListEditService,
    private deleteTodoListService: ToDoListDeleteService
  ) {}
  
  @Input() listData!: string;
  @Output() editEventEmitter = new EventEmitter<void>();
  @Output() addEventListener = new EventEmitter<void>(); // ********
  toDoList: any[] = [];

  ngOnChanges(): void {
    this.fetch();
  }
  fetch(): void {
    this.toDoList = this.fetchTodoListService.fetchToDoList();    // Service call
    console.log('items');
  }
  editToDoList(item: any): void {
    let index = this.toDoList.indexOf(item);
    this.toDoList[index].value = this.listData;
    this.editEventEmitter.emit();
    this.editTodoListService.editToDoList(index, this.toDoList[index].value);    // Service call
    //alert('ToDoList Editted successfully');
  }
  deleteToDoList(item: any): void {
    let a = this.toDoList.splice(this.toDoList.indexOf(item), 1);
    this.deleteTodoListService.deleteTodoList(item);    // Service call
  }
}
