import { AlertController } from '@ionic/angular';
import { PropertyService } from './../../services/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.page.html',
  styleUrls: ['./edit-property.page.scss'],
})
export class EditPropertyPage implements OnInit {

  property_details;
  property_id;
  property_name: String;
  property_location: String;
  property_image_url: String;
  property_price: Number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private propertyService: PropertyService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.property_id = id;
    this.propertyService.getPropertyDetails(id).subscribe(data => {
      this.property_details = data;
    });
  }

  updateProperty(){
    let property = {
      "property_name": this.property_name,
      "property_location": this.property_location,
      "property_price": this.property_price,
      "property_image_url": this.property_image_url
  }

    this.propertyService.updateProperty(property, this.property_id);
    
    this.presentAlert("Property has been updated", "Property Updated");
    this.router.navigateByUrl('listings');
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
