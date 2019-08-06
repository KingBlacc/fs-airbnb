import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:6063';
  
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.baseUrl}/api/users`);
  }

  registerUser(user, header){
    this.http.post(`${this.baseUrl}/api/users`, user, header);
  }

}
