import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:6063';
  
  constructor(private http: HttpClient) { }

  getAllProperties(){
    return this.http.get(`${this.baseUrl}/api/properties/`);
  }

  getPropertyDetails(id){
    return this.http.get(`${this.baseUrl}/api/properties/${id}`);
  }

  getUserDetails(id){
    return this.http.get(`${this.baseUrl}/api/users/${id}`);
  }

  getAllBookings(){
    return this.http.get(`${this.baseUrl}/api/bookings/`);
  }

  postBooking(booking, header_request){
    return this.http.post(`${this.baseUrl}/api/bookings`, booking, header_request);
  }
}
