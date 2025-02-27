import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from './interfaces/request/AuthRequest';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  Login(authReq: AuthRequest): Observable<string> {
    return this.http.post<string>(environment.baseUrl + '/login', authReq);
  }

  Register(authReq: AuthRequest): Observable<void> {
    return this.http.post<void>(environment.baseUrl + '/register', authReq);
  }
}
