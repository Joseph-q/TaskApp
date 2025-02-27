import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetTaskResponse } from './interfaces/response/GetTaskResponse.interface';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { CreateTaskRequest } from './interfaces/request/CreateTaskRequest.interface';
import { UpdateTaskRequest } from './interfaces/request/UpdateTaskRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private readonly _httpClient: HttpClient) {}

  private updateTrigger$ = new BehaviorSubject<void>(undefined); // Disparador de actualizaciones

  public GetTaskById(id: number): Observable<GetTaskResponse> {
    return this.updateTrigger$.pipe(
      switchMap(() =>
        this._httpClient.get<GetTaskResponse>(
          `http://localhost:3000/tasks/${id}`
        )
      )
    );
  }
  
  public GetAllTasks(): Observable<GetTaskResponse[]> {
    return this.updateTrigger$.pipe(
      switchMap(() =>
        this._httpClient.get<GetTaskResponse[]>('http://localhost:3000/tasks')
      )
    );
  }

  public AddTask(task: CreateTaskRequest): Observable<void> {
    return this._httpClient
      .post<void>('http://localhost:3000/tasks', task)
      .pipe(tap(() => this.updateTrigger$.next()));
  }

  public UpdateTask(id: number, task: UpdateTaskRequest): Observable<void> {
    return this._httpClient
      .put<void>(`http://localhost:3000/tasks/${id}`, task)
      .pipe(tap(() => this.updateTrigger$.next()));
  }

}
