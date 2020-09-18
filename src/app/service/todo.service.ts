import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/todo.model";
import {environment} from "../../environments/environment";

const TODOS_ENDPOINT = '/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.API_BASE}${TODOS_ENDPOINT}`);
  }

  public getTodoById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${environment.API_BASE}${TODOS_ENDPOINT}/${id}`);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${environment.API_BASE}${TODOS_ENDPOINT}`, todo);
  }

  public deleteTodo(id: number): Observable<string> {
    return this.http.delete<string>(`${environment.API_BASE}${TODOS_ENDPOINT}/${id}`);
  }

  public saveTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.API_BASE}${TODOS_ENDPOINT}`, todo);
  }
}
