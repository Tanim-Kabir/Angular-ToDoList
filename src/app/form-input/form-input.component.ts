import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostInputService } from '../post-input.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  name: string = '';
  sname: string = 'Tanim Kabir';

  submitName(): void {
    if (this.name) {
      console.log('Submitted name:', this.name);
      // You can perform additional logic or send the name to an API here
      this.sname = this.name;
      this.name = '';

    } else {
      console.log('Please enter a name');
    }
  }
  constructor(private postInputService: PostInputService) {}
  postName(): void {
    if (this.name) {
      this.postInputService.postName(this.name).subscribe(
        response => {
          console.log(response); // Success message from the backend
        },
        error => {
          console.log(error); // Error message if the request fails
        }
      );
    }
    else {
      console.log('Please enter a name');
    }
  }
}
