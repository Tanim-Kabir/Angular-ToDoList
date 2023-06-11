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
  fetchItem(id: string): any {
    const items = this.fetchToDoListService.fetchToDoList();
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        return items[i];
      }
    }
  }
  editList(item: any): void {
    console.log('Edit Item: ', item);
    const items = this.fetchToDoListService.fetchToDoList();
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        items[i] = item;
        break;
      }
    }
    localStorage.setItem('items', JSON.stringify(items));
  }
}
