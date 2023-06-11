import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable,  } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor( 
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(): boolean {
    //return false;
    console.log('canActivate is being called!');
    if (this.authService.isUserAuthenticated()) {
      console.log('Auth Guard canActivate True');
      return true;
    } else {
      console.log('Auth Guard canActivate False');
      //this.router.navigateByUrl('/login');
      alert('Please login first');
      return false;
    }
  }
  canActivateChild(): boolean {
    if (this.authService.isUserAuthenticated()) {
      console.log('Auth Guard canActivate True');
      return true;
    } else {
      console.log('Auth Guard canActivate False');
      //this.router.navigateByUrl('/login');
      alert('Please login first');
      return false;
    }
  }
}
