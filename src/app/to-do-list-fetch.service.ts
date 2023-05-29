import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoListFetchService {
  private backendUrl = 'http://localhost/api/fetchToDoList.php'; // Replace with the actual URL of your PHP file

  constructor(private http: HttpClient) {}
  addItem(item: any): void {
    const items = this.fetchToDoList();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }

  fetchToDoList() {
    const jsonData = localStorage.getItem('items');
    if (jsonData) {
          return JSON.parse(jsonData);
    }
    return [];
    //console.log(this.http.get(this.backendUrl));
    //return this.http.get<any[]>(this.backendUrl);
  }
}
