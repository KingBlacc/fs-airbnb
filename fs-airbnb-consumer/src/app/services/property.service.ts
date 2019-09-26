import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {  

  constructor(private http: HttpClient) { }

  getAllProperties(){
    return this.http.get(`${environment.baseUrl}/api/properties/`);
  }

  getPropertyDetails(id){
    return this.http.get(`${environment.baseUrl}/api/properties/${id}`);
  }
}
