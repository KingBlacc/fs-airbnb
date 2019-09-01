import { User } from './../models/user';
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
  _currentUser: User; 
  
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User>(`${this.baseUrl}/api/users`);
  }

  getUsersById(id){
    return this.http.get<User>(`${this.baseUrl}/api/users/${id}`);
  }

  registerUser(user){
    return this.http.post<User>(`${this.baseUrl}/api/auth/register`, user, this.requestOptions);
  }

  loginUser(user){
    return this.http.post<User>(`${this.baseUrl}/api/auth/login`, user, this.requestOptions);
  }

  setUser(user){
    this._currentUser = user;
  }

  getUser(){
    return this._currentUser;
  }
}
