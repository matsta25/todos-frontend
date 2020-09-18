import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/todo.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  });

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo: Todo = this.todoForm.value
    this.todoService.saveTodo(todo).subscribe(() => {
      this.router.navigate(['/', 'todos'])
    })
  }
}
