import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:6063';
  
  constructor(private http: HttpClient) { }

  getUserDetails(id){
    return this.http.get(`${this.baseUrl}/api/users/${id}`);
  }
}
