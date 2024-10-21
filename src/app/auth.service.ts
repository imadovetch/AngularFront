import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/auth'; // Update with your actual API endpoint

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/signup`, data);
  }
}
