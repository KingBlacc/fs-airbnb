import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  baseUrl = 'http://localhost:6063';
  
  constructor(private http: HttpClient) { }

  getListings(){
    return this.http.get(`${this.baseUrl}/api/properties`);
  }

  getPropertyDetails(id){
    return this.http.get(`${this.baseUrl}/api/properties/${id}`);
  }

  createProperty(property, headers){
    this.http.post(`${this.baseUrl}/api/properties/`, property, headers).subscribe(data => {
      console.log(data);
    });
  }
}
