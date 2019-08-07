import { AuthService } from './../../services/auth.service';
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

  public name: String;
  public location: String;
  public price: Number;
  public image_url: String;
  public user_id: String;
  public address_line: String;
  public city_name: String;
  public country: String;
  public postal_code: Number;

  constructor(private alertCtrl: AlertController,
              private propertyService: PropertyService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  postListing(){
    const requestOptions = {
      headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
    };

    this.location = this.address_line + ", "+ this.city_name + ", " + this.country + ", " + this.postal_code;

      let property = {
        "property_name": this.name,
        "property_location": this.location,
        "property_price": this.price,
        "property_image_url": this.image_url,
        "user_id": this.authService.getUserId()
      }

      this.propertyService.createProperty(property, requestOptions);
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
