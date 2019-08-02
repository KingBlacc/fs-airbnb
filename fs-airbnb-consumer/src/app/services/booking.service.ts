import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl = 'http://localhost:6063';

  constructor(private http: HttpClient) { }

  postBooking(booking, header_request){
    return this.http.post(`${this.baseUrl}/api/bookings`, booking, header_request);
  }
}
