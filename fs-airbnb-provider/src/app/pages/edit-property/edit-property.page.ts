import { PropertyService } from './../../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.page.html',
  styleUrls: ['./edit-property.page.scss'],
})
export class EditPropertyPage implements OnInit {

  property_details;

  property_name: String;
  property_location: String;
  property_image_url: String;
  property_price: Number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private propertyService: PropertyService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.propertyService.getPropertyDetails(id).subscribe(data => {
      this.property_details = data;
    });
  }

}
