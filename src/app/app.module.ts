import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {TodoListComponent} from './component/todo-list/todo-list.component';
import {HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TodoDetailComponent } from './component/todo-detail/todo-detail.component';
import { TodoEditComponent } from './component/todo-edit/todo-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TodoAddComponent } from './component/todo-add/todo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TodoListComponent,
    PageNotFoundComponent,
    TodoDetailComponent,
    TodoEditComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
