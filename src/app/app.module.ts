import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormOutputComponent } from './form-output/form-output.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListTableComponent } from './list-table/list-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FormInputComponent,
    FormOutputComponent,
    CrudFormComponent,
    ToDoListComponent,
    ListTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
