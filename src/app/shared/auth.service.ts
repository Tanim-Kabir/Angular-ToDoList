import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  ngOnInit() {
    console.log('Auth Service NgOnInit');
    const jsonData = localStorage.getItem('logInUser');
    if (jsonData) {
      let logInUser: any[] = JSON.parse(jsonData);
      this.isAuthenticated = logInUser[0].loggedIn;
    }
  }

  login(username: string, password: string): boolean {
    // Send request to validate user credentials and generate authentication token
    // Set isAuthenticated to true if credentials are valid
    console.log('Inside Login ' + username +','+ password);
    const jsonData = localStorage.getItem('users');
    if (jsonData) {
      let users: any[] = JSON.parse(jsonData);
      for (let i=0; i<users.length; i++) {
        console.log('Username: ' + username +' Password: '+ password);
        if (users[i].userName === username && users[i].password === password) {
          console.log('Inside Ture username, password');
          this.isAuthenticated = true;
          console.log('isAuthenticated: ', this.isAuthenticated);
          this.addlogInUser(username, password, true);
        }
      }
    }
    return this.isAuthenticated;
  }
  logout(): void {
    // Clear authentication token and set isAuthenticated to false
    this.isAuthenticated = false;
    const user = {
      userName: '',
      password: '',
      loggedIn: false,
    };
    const jsonData = localStorage.getItem('logInUser');
    if (jsonData) {
      let loggedInuser: any[] = JSON.parse(jsonData);
      loggedInuser.pop();
      loggedInuser.push(user);
      localStorage.setItem('logInUser', JSON.stringify(loggedInuser));
    }
  }
  addlogInUser(userName: string, password: string, loggedIn: boolean): void {
    const user = {
      userName: userName,
      password: password,
      loggedIn: loggedIn,
    };
    const jsonData = localStorage.getItem('logInUser');
    if (jsonData) {
      let loggedInuser: any[] = JSON.parse(jsonData);
      loggedInuser.pop();
      loggedInuser.push(user);
      localStorage.setItem('logInUser', JSON.stringify(loggedInuser));
    }/*
    else {
      let loggedInuser: any[] = [];
      loggedInuser.push(user);
      localStorage.setItem('logInUser', JSON.stringify(loggedInuser));
    }*/
  }
  isUserAuthenticated(): boolean {
    // Return the authentication status
    this.ngOnInit();
    console.log('Checking isUserAuthenticated: ' + this.isAuthenticated);
    return this.isAuthenticated;
  }
}
