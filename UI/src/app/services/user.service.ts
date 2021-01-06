import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  createUser(user): Observable<any> {
    console.log(user)
    return this.http.post(`${this.baseUrl}/saveUser`, user);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllUsers`);
  }
  isExists(username:string,password:string): Observable<any> {
    return this.http.get(`${this.baseUrl}isExists/${username}/${password}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeUser/${id}`);
  }

  
}
