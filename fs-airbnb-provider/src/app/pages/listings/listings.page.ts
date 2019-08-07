import { Property } from './../../shared/models/property';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from '../../services/property.service';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  properties: Observable<any>;
  userId: String = "5d3df6f33f4dd1144814f754";
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.properties = this.propertyService.getListings();
  }

}
