import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoListFetchService } from './to-do-list-fetch.service';

@Injectable({
  providedIn: 'root',
})
export class ToDoListEditService {
  constructor(
    private http: HttpClient,
    private fetchToDoListService: ToDoListFetchService
  ) {}

  editToDoList(index: number, value: string): void {
    const items = this.fetchToDoListService.fetchToDoList();
    items[index].value = value;
    localStorage.setItem('items', JSON.stringify(items));
  }
}
