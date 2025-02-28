import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetTaskResponse } from './interfaces/response/GetTaskResponse.interface';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { CreateTaskRequest } from './interfaces/request/CreateTaskRequest.interface';
import { UpdateTaskRequest } from './interfaces/request/UpdateTaskRequest.interface';
import { environment } from '../../../../environments/environment';
import { GetTasksQueryParams } from './interfaces/request/GetTasksQueryParams.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private readonly _httpClient: HttpClient) {}

  private updateTrigger$ = new BehaviorSubject<void>(undefined); // Disparador de actualizaciones

  private get Headers(): HttpHeaders {
    const authToken = localStorage.getItem('authToken');
    return new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    });
  }
  public GetTaskById(id: number): Observable<GetTaskResponse> {
    return this.updateTrigger$.pipe(
      switchMap(() =>
        this._httpClient.get<GetTaskResponse>(
          `${environment.baseUrl}/tasks/${id}`,
          {
            headers: this.Headers,
          }
        )
      )
    );
  }

  public GetAllTasks(
    query?: GetTasksQueryParams
  ): Observable<GetTaskResponse[]> {
    const params = new HttpParams({
      fromObject: query as any,
    });

    return this.updateTrigger$.pipe(
      switchMap(() =>
        this._httpClient.get<GetTaskResponse[]>(
          `${environment.baseUrl}/tasks`,
          {
            headers: this.Headers,
            params,
          }
        )
      )
    );
  }

  public AddTask(task: CreateTaskRequest): Observable<void> {
    return this._httpClient
      .post<void>(`${environment.baseUrl}/tasks`, task, {
        headers: this.Headers,
      })
      .pipe(tap(() => this.updateTrigger$.next()));
  }

  public UpdateTask(id: number, task: UpdateTaskRequest): Observable<void> {
    return this._httpClient
      .put<void>(`${environment.baseUrl}/tasks/${id}`, task, {
        headers: this.Headers,
      })
      .pipe(tap(() => this.updateTrigger$.next()));
  }

  public DeleteTask(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${environment.baseUrl}/tasks/${id}`, {
      headers: this.Headers,
    });
  }
}
