import { ActivatedRoute } from '@angular/router';
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

  date_from: any;
  date_to: any;
  booking_id: any;

  constructor(private bookingService: BookingService,
              private activateRoute: ActivatedRoute,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.booking_id = this.activateRoute.snapshot.paramMap.get('id');
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
    let booking_data = {
      "date_from": this.date_from,
      "date_to": this.date_to,
      "user_id": "5d3df72b3f4dd1144814f756",
      "property_id": this.booking_id,
      "booking_status": "NEW"
    }

    try {
      this.bookingService.postBooking(booking_data, requestOptions);
    } catch (error) {
      this.presentAlert(error, "Error Message")
    }
  }
}
