import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoListFetchService } from './to-do-list-fetch.service';

@Injectable({
  providedIn: 'root',
})
export class ToDoListDeleteService {
  constructor(
    private http: HttpClient,
    private fetchToDoListService: ToDoListFetchService
  ) {}

  deleteTodoList(item: any) {
    const items = this.fetchToDoListService.fetchToDoList();
    let a = items.splice(items.indexOf(item), 1);
    localStorage.setItem('items', JSON.stringify(items));
    console.log(a);
    console.log(items);
  }
}
