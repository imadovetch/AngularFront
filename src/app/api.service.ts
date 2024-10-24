import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost/start_war/AddUser'; 

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Add other headers if necessary, e.g. Authorization
    })
  };

  constructor(private http: HttpClient) { }

  /** POST: send data to the server */
  sendData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/endpoint`, data, this.httpOptions)
      .pipe(
        catchError(this.handleError('sendData', data)) // Handle errors
      );
  }

  // Error handling method
  private handleError(operation: string, result?: any) {
    return (error: any): Observable<any> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(() => new Error(error)); // Return an observable with a user-facing error message
    };
  }
}
