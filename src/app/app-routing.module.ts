import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {TodoListComponent} from "./component/todo-list/todo-list.component";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {TodoDetailComponent} from "./component/todo-detail/todo-detail.component";
import {TodoEditComponent} from "./component/todo-edit/todo-edit.component";
import {TodoAddComponent} from "./component/todo-add/todo-add.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodoListComponent,
  },
  {
    path: 'todo-details/:id',
    component: TodoDetailComponent,
  },
  {
    path: 'todo-edit/:id',
    component: TodoEditComponent,
  },
  {
    path: 'todo-add',
    component: TodoAddComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
