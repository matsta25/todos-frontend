import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/todo.model";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {TodoService} from "../../service/todo.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  public todo: Todo = null;

  todoForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.todoService.getTodoById(params['id']).subscribe((todo) => {
          this.todo = todo;
          this.updateTodoForm()
        })
      }
    });
  }

  onSubmit() {
    const todo: Todo = this.todoForm.value
    this.todoService.updateTodo(todo).subscribe(() => {
      this.router.navigate(['/', 'todos'])
    })
  }

  private updateTodoForm() {
    this.todoForm.patchValue({
      id: this.todo.id,
      title: this.todo.title,
      description: this.todo.description,
      userName: this.todo.userName,
    })
  }

  public deleteTodo(): void {
    const todoId: number = this.todoForm.value.id
    this.todoService.deleteTodo(todoId).subscribe(() => {
      this.router.navigate(['/', 'todos'])
    })
  }
}
