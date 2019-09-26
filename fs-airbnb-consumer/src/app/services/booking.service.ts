import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  postBooking(booking, header_request){
    return this.http.post(`${environment.baseUrl}/api/bookings`, booking, header_request).subscribe(data => {
      console.log(data);
    });
  }
}
