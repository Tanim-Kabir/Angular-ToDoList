import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ToDoListFetchService {
  //private backendUrl = 'http://localhost/api/fetchToDoList.php'; // Replace with the actual URL of your PHP file
  constructor(private http: HttpClient) {}

  fetchToDoList() {
    const jsonData = localStorage.getItem('items');
    if (jsonData) {
      return JSON.parse(jsonData);
    }
    return [];
  }
}
