import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ToDoListAddService {
  private backendUrl = 'http://localhost/api/addToDoList.php'; // Replace with the actual URL of your PHP file

  constructor(private http: HttpClient) {}

  addToDoList(name: string) {
    const data = { name: name };

    return this.http.post(this.backendUrl, data);
  }
}
