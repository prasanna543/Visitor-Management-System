import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  // getEmployee(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  createFaculty(faculty): Observable<any> {
    console.log(faculty)
    return this.http.post(`${this.baseUrl}/saveFaculty`, faculty);
  }

  deleteFaculty(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeFaculty/${id}`);
  }

  getFacultyList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getFacultyList`);
  }
}
