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
  fetchUserToDoList() {
    const userName = this.fetchUserName();
    const jsonData = localStorage.getItem('items');
    if (jsonData) {
      let data: any[] = JSON.parse(jsonData);
      data.filter(item => item.userName === userName);
      return data.filter(item => item.userName === userName);
      //return JSON.parse(jsonData);
    }
    return [];
  }
  fetchUsers() {
    const jsonData = localStorage.getItem('users');
    if (jsonData) {
      return JSON.parse(jsonData);
    }
    return [];
  }
  fetchUserName(): string {
    const jsonData = localStorage.getItem('logInUser');
    if (jsonData) {
      let userName = JSON.parse(jsonData);
      return userName[0].userName;
    }
    return '';
  }

}
