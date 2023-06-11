import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoListFetchService } from '../to-do-list-fetch.service';
import { ToDoListDeleteService } from '../to-do-list-delete.service';
import { ToDoListEditService } from '../to-do-list-edit.service';

@Component({
  selector: 'list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css'],
})
export class ListTableComponent implements OnChanges {
  constructor(
    //@Input() toDolistValue: string,
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
    this.toDoList = this.fetchTodoListService.fetchUserToDoList(); // Service call
  }
  editToDoList(item: any): void {
    let index = this.toDoList.indexOf(item);
    this.toDoList[index].value = this.listData;
    item.value = this.listData;
    this.editEventEmitter.emit();
    this.editTodoListService.editList(item); // Service call
    //alert('ToDoList Editted successfully');
  }
  deleteToDoList(item: any): void {
    let index = this.toDoList.indexOf(item);
    let a = this.toDoList.splice(index, 1);
    this.deleteTodoListService.deleteTodoList(index); // Service call
  }
}
