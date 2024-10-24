import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost/start_war'; // Update with your actual API endpoint

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/AddUser`, data);
  }

  signin(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/AddUser`, data);
  }
}
