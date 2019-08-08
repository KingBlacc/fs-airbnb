import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:6063';
  requestOptions = {
    headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
  };

  _userId: String;
  
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.baseUrl}/api/users`);
  }

  getUsersById(id){
    return this.http.get(`${this.baseUrl}/api/users/${id}`);
  }

  registerUser(user){
    return this.http.post(`${this.baseUrl}/api/auth/register`, user, this.requestOptions);
  }

  loginUser(user){
    return this.http.post(`${this.baseUrl}/api/auth/login`, user, this.requestOptions);
  }

  setUserId(id){
    this._userId = id;
  }

  getUserId(){
    return this._userId;
  }
}
