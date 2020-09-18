import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../model/todo.model";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  public todo: Todo = null;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.todoService.getTodoById(params['id']).subscribe((todo) => {
          this.todo = todo;
        })
      }
    });
  }

}
