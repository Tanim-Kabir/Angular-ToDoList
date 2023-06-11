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
    const index = items.indexOf(item);
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
  }
}
