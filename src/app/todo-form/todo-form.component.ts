import { Component, NgModule, OnInit, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoListAddService } from '../to-do-list-add.service';
import { ToDoListEditService } from '../to-do-list-edit.service';
import { ToDoListFetchService } from '../to-do-list-fetch.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private addToDoListService: ToDoListAddService,
    private editToDoListService: ToDoListEditService,
    private fetchToDoListService: ToDoListFetchService
  ) {}
  item = {
    id: '',
    userName: '',
    value: '',
    shortDes: '',
    status: '',
  };
  urlId!: string;
  toDoFormName: string = 'Add ToDo list';
  buttonValue: string = 'Add';
  ngOnInit() {
    console.log('NgOnInIt');
    this.activatedRoute.url.subscribe((urlSegments) => {
      const segments = urlSegments.map((segment) => segment.path);
      this.urlId = segments.pop() as string;
      //console.log('Last Segment:', this.urlId);
    });
    if (this.urlId) {
      //console.log('Inside urlID');
      this.toDoFormName = 'Edit ToDo list';
      this.buttonValue = 'Edit';
      this.item = this.editToDoListService.fetchItem(this.urlId);
    }
    this.item.userName = this.fetchToDoListService.fetchUserName();
  }
  addOrEdit(): void {
    if (this.item.value && this.item.shortDes && this.item.status) {
      if (this.buttonValue === 'Add') {
        const newItem = {
          id: Math.random().toString(),
          value: this.item.value,
          userName: this.item.userName,
          shortDes: this.item.shortDes,
          status: this.item.status,
        };
        this.item = {id: '', value: '',userName: this.item.userName, shortDes: '', status: '',};
        this.addToDoListService.addToDoList(newItem);
        //this.addEventEmitter.emit();
        //alert('ToDoList added successfully');
      }
      if (this.buttonValue === 'Edit') {
        console.log('Edit is pressed, Item= ', this.item);
        this.editToDoListService.editList(this.item);
        // this.refresh(); // FOR CLEARING THE FORM DATA!
        //alert('ToDoList Editted successfully');
      }
    } else {
      console.log(this.item.status);
      alert('Please fill all the sections!');
    }
  }
  onDropDownOptionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.item.status = value;
    console.log(value);
    /*if (value === '') {
      this.status = '';
    }*/
  }
}
