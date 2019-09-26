import { Property } from './../models/property';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {  

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<Property[]>{
    return this.http.get<Property[]>(`${environment.baseUrl}/api/properties/`);
  }

  getPropertyDetails(id){
    return this.http.get<Property>(`${environment.baseUrl}/api/properties/${id}`);
  }
}
