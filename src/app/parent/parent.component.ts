import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor( private authService: AuthService) {}
  isAuthenticated!: boolean;
  ngOnInit() {
    console.log('Parent NgOnInit');
    this.isAuthenticated = this.authService.isUserAuthenticated();
  }
  ngOnChanges() {
    console.log('Parent NgOnChanges');
    this.isAuthenticated = this.authService.isUserAuthenticated();
  }

  //console.log('Inside parent:' + isAuthenticated);
  //this.authService.isUserAuthenticated();
}
