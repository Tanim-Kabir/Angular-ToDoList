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

const routes: Routes = [
  { path: '', redirectTo: '/list-1', pathMatch: 'full' }, // Default route
  { path: 'list-1', component: ToDoListComponent },
  { path: 'list-2', component: ToDoList2Component },
  { path: 'list-2-action', component: TodoFormComponent },
  { path: '**', component: ToDoListComponent } // Catch-all route for unknown URLs
];

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ListTableComponent,
    TodoFormComponent,
    NavBarComponent,
    ToDoList2Component,
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
