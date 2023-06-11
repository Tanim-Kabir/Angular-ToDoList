import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoListFetchService } from './to-do-list-fetch.service';

@Injectable({
  providedIn: 'root',
})
export class ToDoListAddService {
  //private backendUrl = 'http://localhost/api/addToDoList.php'; // Replace with the actual URL of your PHP file
  constructor(
    private http: HttpClient,
    private fetchToDoListService: ToDoListFetchService
  ) {}

  addToDoList(item: any): void {
    const items = this.fetchToDoListService.fetchToDoList();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }
  addUser(user: any): void {
    const users = this.fetchToDoListService.fetchUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
}
