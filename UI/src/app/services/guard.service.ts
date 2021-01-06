import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuardService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  // getEmployee(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  createGuard(guard): Observable<any> {
    console.log(guard)
    return this.http.post(`${this.baseUrl}/saveGuard`, guard);
  }

  deleteGuard(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeGuard/${id}`);
  }

  getGuardList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getGuardList`);
  }
}
