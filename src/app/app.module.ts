import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListTableComponent } from './list-table/list-table.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToDoList2Component } from './to-do-list2/to-do-list2.component';
import { RegistrationComponent } from './registration/registration.component';
import { ParentComponent } from './parent/parent.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/logIn', pathMatch: 'full' }, // Default route
  { path: 'regi', component: RegistrationComponent },
  { path: 'logIn', component: RegistrationComponent },
  { path: 'list-1', component: ToDoListComponent, canActivate: [AuthGuard] },
  { path: 'list-2', component: ToDoList2Component, canActivate: [AuthGuard] },
  { path: 'list-2-action', canActivateChild: [AuthGuard], 
    children: [{ path: '**', component: TodoFormComponent }]
  },
  { path: 'list-3', component: ListTableComponent, canActivate: [AuthGuard] },
  //{ path: '**', component: ToDoListComponent, canActivate: [AuthGuard] } // Catch-all route for unknown URLs
];

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ListTableComponent,
    TodoFormComponent,
    NavBarComponent,
    ToDoList2Component,
    RegistrationComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
