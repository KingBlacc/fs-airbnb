import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  results: Observable<any>;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.getProperties()
  }

  getProperties(){
    this.results = this.propertyService.getAllProperties();
  }

}
