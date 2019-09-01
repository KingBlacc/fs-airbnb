import { User } from './../../models/user';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
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

      this.authService.loginUser(user).subscribe((data: User) => {
          if(data._id != null){
            if (data.user_type == "consumer" || data.user_type == "admin") {
              this.authService.setUser(data);
            this.goToListings();
            } else {
              this.presentAlert(`Seems like only have access to the ${data.user_type} application`, "Unauthorized");
            }
          }else{
            this.presentAlert(data, "Login Failed")
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
