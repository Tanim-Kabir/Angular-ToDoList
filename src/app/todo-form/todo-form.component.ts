import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  dropDownOption!: string;
  onDropDownOptionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === '') {
      this.dropDownOption = '';
    }
  }
}
