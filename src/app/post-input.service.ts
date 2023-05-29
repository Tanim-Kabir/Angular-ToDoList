import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostInputService {
  private backendUrl = 'http://localhost/api/formInput.php'; // Replace with the actual URL of your PHP file

  constructor(private http: HttpClient) {}

  postName(name: string) {
    const data = { name: name };

    return this.http.post(this.backendUrl, data);
  }
}
