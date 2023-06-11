import { Component, OnChanges, OnInit } from '@angular/core';
import { ToDoListFetchService } from '../to-do-list-fetch.service';
import { ToDoListEditService } from '../to-do-list-edit.service';
import { ToDoListDeleteService } from '../to-do-list-delete.service';
import { Router} from '@angular/router';

interface SortObject {
  icon: string;
  direction: string;
}

@Component({
  selector: 'app-to-do-list2',
  templateUrl: './to-do-list2.component.html',
  styleUrls: ['./to-do-list2.component.css'],
})
export class ToDoList2Component {
  constructor(
    //@Input() toDolistValue: string,
    private router: Router,
    private fetchTodoListService: ToDoListFetchService,
    private editTodoListService: ToDoListEditService,
    private deleteTodoListService: ToDoListDeleteService
  ) {}
  searchTerm: string = '';
  buttonValue!: string;
  filterButtonValue: string = 'All';
  toDoList: any[] = [];
  toDoListCopy: any[] = [];
  tableArray: any[] = [];
  pageSize: number = 5;
  totalPages: number = Math.ceil(this.toDoListCopy.length / this.pageSize);
  pageStart: number = 1;
  pageEnd: number = this.pageStart * this.pageSize;
  selectedButton: number = 1;
  sortTuple: { [name: string]: SortObject } = {
    value: { icon: '\u21E7', direction: 'up' },
    shortDes: { icon: '\u21E7', direction: 'up' },
    status: { icon: '\u21E7', direction: 'up' },
  };
  pAiA: boolean[] = [false, false, false, true];
  pending!: number;
  active!: number;
  inactive!: number;
  all!: number;
  urlId!: string;

  ngOnInit() {
    console.log('NgOnInIt');
    this.fetch();
    this.tableData();
  }
  ngOnChanges(): void {
    console.log('NgOnChanges');
    this.fetch();
    this.tableData();
    this.listValue();
  }
  count(ref: string): number {
    let countValue: number = 0;
    this.toDoList.forEach(function (item) {
      if (item.status === ref) {
        countValue++;
      }
    });
    return countValue;
  }
  listValue(): void {
    this.all = this.toDoList.length;
    this.pending = this.count('Pending');
    this.active = this.count('Active');
    this.inactive = this.count('Inactive');
  }
  fetch(): void {
    this.toDoList = this.fetchTodoListService.fetchUserToDoList(); // Service call
    this.toDoListCopy = [...this.toDoList];
    this.tableArray = [...this.toDoListCopy];
    this.totalPages = Math.ceil(this.toDoListCopy.length / this.pageSize);
  }
  performSearch() {
    console.log(this.searchTerm);
    const a = this.toDoList.filter((item) =>
      item.value.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.toDoListCopy = [...a];
    this.pageStart = 1;
    this.tableData();
    //this.tableArray = this.toDoListCopy;
  }
  addNew(): void {
    this.router.navigate(['/list-2-action']);
  }
  filterButtonCss(buttonId: string, ix: number): void {
    this.pAiA.fill(false);
    this.pAiA[ix] = true;
    this.searchFilter(buttonId);
  }
  searchFilter(buttonId: string): void {
    let dummy: any[] = [];
    switch (buttonId) {
      case 'Pending':
        this.filterButtonValue = 'Pending';
        dummy = this.toDoList.filter((item) => item.status === 'Pending');
        break;
      case 'Active':
        this.filterButtonValue = 'Active';
        dummy = this.toDoList.filter((item) => item.status === 'Active');
        break;
      case 'Inactive':
        this.filterButtonValue = 'Inactive';
        dummy = this.toDoList.filter((item) => item.status === 'Inactive');
        break;
      case 'All':
        this.filterButtonValue = 'All';
        dummy = [...this.toDoList];
        break;
      default:
        this.filterButtonValue = 'All';
        dummy = [...this.toDoList];
        break;
    }
    if (this.searchTerm != '') {
      this.toDoListCopy = [...dummy.filter((item) =>
        item.value.toLowerCase().includes(this.searchTerm.toLowerCase())
      )];
      this.pageStart = 1;
      this.tableData();
    } else {
      this.toDoListCopy = [...dummy];
      this.pageStart = 1;
      this.tableData();
      console.log('ToDoListCopy after All:', this.toDoListCopy)
    }
  }
  tableData() {
    this.pageEnd = this.pageStart * this.pageSize;
    this.tableArray = [...this.toDoListCopy.slice(this.pageStart - 1, this.pageEnd)];
    this.totalPages = Math.ceil(this.toDoListCopy.length / this.pageSize);
    this.listValue();
  }
  onNoOfPagesChange(event: any) {
    this.selectedButton = 1;
    const value = (event.target as HTMLSelectElement).value;
    this.pageSize = <number>(<unknown>value);
    this.pageStart = 1;
    this.pageEnd = this.pageStart * this.pageSize;
    this.totalPages = Math.ceil(this.toDoListCopy.length / this.pageSize);
    this.tableArray = [...this.toDoListCopy.slice(this.pageStart - 1, this.pageEnd)];
  }
  pageNoButton(buttonId: number): void {
    this.selectedButton = buttonId;
    this.pageStart = this.pageSize * buttonId - this.pageSize + 1;
    this.pageEnd = buttonId * this.pageSize;
    this.tableArray = [...this.toDoListCopy.slice(this.pageStart - 1, this.pageEnd)];
  }
  editList(item: any): void {
    //console.log(item);
    const editData = {
      flag: true,
      value: item.value,
      shortDes: item.shortDes,
      status: item.status
    };
    const urlId = item.id as string;
    this.router.navigateByUrl(`/list-2-action/${urlId}`);
  }
  deleteList(item: any): void {
    let index = this.toDoList.indexOf(item);
    let dummy = [...this.toDoList.filter((element) => element.id != item.id)];
    this.toDoList = [...dummy];
    dummy = [...this.toDoListCopy.filter((element) => element.id != item.id)];
    this.toDoListCopy = [...dummy];
    this.tableData();
    this.deleteTodoListService.deleteTodoList(item);
  }
  onStatusChange(event: any, item: any): void {
    const value = (event.target as HTMLSelectElement).value;
    console.log(status);
    item.status = value;
    const index = this.toDoList.indexOf(item);
    this.editTodoListService.editList(item);
    this.searchFilter(this.filterButtonValue);
    //this.searchFilter(value);
    console.log(index);
  }
  sort(event: any, direction: string): void {
    let sortName = (event.target as HTMLSelectElement).name;
    if (direction === 'up') {
      this.sortTuple[sortName].icon = '\u21E9';
      this.sortTuple[sortName].direction = 'down';
      this.tableArray.sort((a, b) => {
        if (a[sortName] > b[sortName]) {
          return -1; // a should come before b
        } else if (a.name > b.name) {
          return 1; // a should come after b
        } else {
          return 0; // a and b are equal in terms of name
        }
      });
      return;
    }
    if (direction === 'down') {
      this.sortTuple[sortName].icon = '\u21E7';
      this.sortTuple[sortName].direction = 'up';
      this.tableArray.sort((a, b) => {
        if (a[sortName] < b[sortName]) {
          return -1; // a should come before b
        } else if (a.name > b.name) {
          return 1; // a should come after b
        } else {
          return 0; // a and b are equal in terms of name
        }
      });
      return;
    }
  }
  leftPage(): void {
    if (this.selectedButton > 1) {
      this.selectedButton = this.selectedButton - 1;
      this.pageNoButton(this.selectedButton);
    }
  }
  rightPage(): void {
    if (this.totalPages > this.selectedButton) {
      this.selectedButton = this.selectedButton + 1;
      this.pageNoButton(this.selectedButton);
    }
    //this.selectedButton = this.selectedButton + 1;
    //this.pageNoButton(this.selectedButton);
  }
  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }
}
