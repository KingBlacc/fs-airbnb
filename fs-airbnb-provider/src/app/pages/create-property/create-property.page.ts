import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.page.html',
  styleUrls: ['./create-property.page.scss'],
})
export class CreatePropertyPage implements OnInit {

  name: String;
  locaton: String;
  price: Number;
  image_url: String;
  user_id = "5d3df72b3f4dd1144814f756";
  address_line: String;
  city_name: String;
  country: String;
  postal_code: Number;

  constructor() { }

  ngOnInit() {
  }

  postListing(){
    
  }
}
