import { Component, NgModule, OnInit, OnChanges } from '@angular/core';
import { ToDoListAddService } from '../to-do-list-add.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-registration-log-in',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private addToDoListService: ToDoListAddService
  ) {}
  username = '';
  password = '';
  urlId!: string;
  formName: string = 'Log In';
  buttonName: string = 'Log In';
  advice: string = "Don't have an account?";
  option: string = 'Sign Up';
  routerLink: string = '/regi';

  ngOnInit() {
    console.log('NgOnInIt');
    this.activatedRoute.url.subscribe((urlSegments) => {
      const segments = urlSegments.map((segment) => segment.path);
      this.urlId = segments.pop() as string;
      //console.log('Last Segment:', this.urlId);
    });
    if (this.urlId === 'regi') {
      console.log('Inside urlID 1');
      this.formName = 'Create an Account';
      this.buttonName = 'Sign Up';
      this.advice = 'Already have an account?';
      this.option = 'Log In';
      //this.item = this.editToDoListService.fetchItem(this.urlId);
    }
    if (this.urlId === 'logIn') {
      console.log('Inside urlID 2');
      this.formName = 'Log In';
      this.buttonName = 'Log In';
      this.advice = "Don't have an account?";
      this.option = 'Sign Up';
      //this.item = this.editToDoListService.fetchItem(this.urlId);
    }
    this.authService.logout();
  }
  optionChange() {
    if (this.option === 'Sign Up') {
      console.log('Inside Sign Up');
      this.router.navigate(['/regi']);
    }
    if (this.option === 'Log In') {
      console.log('Inside Log In');
      this.router.navigate(['/logIn']);
    }
  }
  logInOrSignUp(): void {
    //this.router.navigate(['/list-2']);
    if (this.username && this.password) {
      if (this.buttonName === 'Log In') {
        const isLoggedIn = this.authService.login(this.username, this.password);

        if (isLoggedIn) {
          this.router.navigateByUrl('/list-1');
        } else {
          alert('Wrong Username Password!');
        }
      }
      if (this.buttonName === 'Sign Up') {
        const newUser = {
          id: Math.random().toString(),
          userName: this.username,
          password: this.password,
        };
        this.addToDoListService.addUser(newUser);
        alert('Account created successfully!');
        this.router.navigate(['/list-2']);
        //console.log('Edit is pressed, Item= ', this.item);
        //this.editToDoListService.editList(this.item);
        // this.refresh(); // FOR CLEARING THE FORM DATA!
        //alert('ToDoList Editted successfully');
      }
    } else {
      alert('Please give Username & Password!');
    }
  }
}
