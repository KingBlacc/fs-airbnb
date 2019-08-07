import { AlertController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: String;
  password: String;

  constructor(private authService: AuthService,
              private alertCtrl: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email == null || this.password == null){
        this.presentAlert("Please fill in all fields", "Warning");
    }else{
      const user = {
        "email": this.email,
        "password": this.password
      }

      this.authService.loginUser(user).subscribe(data => {
          if(data == "Error"){
            this.presentAlert("Incorrect Email/Password", "Login Failed")
          }else{
            this.authService.setUserId(data);
            this.goToListings();
          }
      });
    }
  }

  goToListings(){
    this.router.navigateByUrl("/listings");
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
