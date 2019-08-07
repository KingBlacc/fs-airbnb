import { Property } from './../../shared/models/property';
import { PropertyService } from './../../services/property.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.page.html',
  styleUrls: ['./create-property.page.scss'],
})
export class CreatePropertyPage implements OnInit {

  name: String = null;
  locaton: String = null;
  price: Number;
  image_url: String = null;
  user_id = "5d3df72b3f4dd1144814f756";
  address_line: String;
  city_name: String;
  country: String;
  postal_code: Number;

  constructor(private alertCtrl: AlertController,
              private propertyService: PropertyService) { }

  ngOnInit() {
  }

  postListing(){
    const requestOptions = {
      headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
    };
    this.locaton = this.address_line + ", "+ this.city_name + ", " + this.country + ", " + this.postal_code;
    // if(this.name == null || this.locaton == null 
    //     || this.image_url == null ){
    //       this.presentAlert("", "All fields are required");
    // }else{
      let property = {
        "property_name": this.name,
        "property_location": this.locaton,
        "property_price": this.price,
        "property_image_url": this.image_url,
        "user_id": this.user_id
      }

      this.propertyService.createProperty(property, requestOptions);
    // }
  }

  async presentAlert(err, msg) {
    const alert = await this.alertCtrl.create({
      header: msg,
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
}
