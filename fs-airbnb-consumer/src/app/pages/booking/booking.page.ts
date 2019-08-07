import { AuthService } from './../../services/auth.service';
import { PropertyService } from './../../services/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from './../../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  date_from: any = null;
  date_to: any = null;
  property_id: any;
  adult_count: Number = 1;
  children_count: Number = 0;
  property_details: any;
  total_price: Number;
  
  constructor(private bookingService: BookingService,
              private activateRoute: ActivatedRoute,
              private alertCtrl: AlertController,
              private propertyService: PropertyService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {

    if(this.authService.getUserId() == null){
      this.router.navigateByUrl('/login');
    }

    this.property_id = this.activateRoute.snapshot.paramMap.get('id');

    this.propertyService.getPropertyDetails(this.property_id).subscribe(result => {
      this.property_details = result;
    });
  }

  async presentAlert(err, msg) {
    const alert = await this.alertCtrl.create({
      header: msg,
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

  makeBooking(){
    const requestOptions = {
      headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
    };

    if (this.date_from == null || this.date_to == null) {
      this.presentAlert("Please make sure that you've selected an appropriate time period", "Invalid Date");
    } else {
      let booking_data = {
        "date_from": this.date_from,
        "date_to": this.date_to,
        "user_id": this.authService.getUserId(),
        "property_id": this.property_id,
        "booking_status": "NEW"
      }
      this.bookingService.postBooking(booking_data, requestOptions);
      this.presentAlert("Booking has been sent", "Booking Submitted");
        this.router.navigateByUrl('/listings');
    }
    
  }

  cancelBooking(){
    this.router.navigateByUrl('listings');
  }

}
