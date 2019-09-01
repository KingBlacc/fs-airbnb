import { User } from './../../models/user';
import { AlertController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  first_name: String = null;
  last_name: String = null;
  email: String = null;
  password: String = null;
  confirm_password: String = null;
  cell_number: String = null;
  user_type: String = "consumer";

  constructor(private authService: AuthService,
              private alertCtrl: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  register(){
    if (this.password == null) {
      this.presentAlert("Please fill password fields", "Registration Error");
    } else {
      if (this.password !== this.confirm_password) {
        this.presentAlert("Passwords do not match each other", "Registration Error");
      } else {
        let user = {
          "first_name": this.first_name,
          "last_name": this.last_name,
          "email": this.email,
          "password": this.password,
          "cell_number": this.cell_number,
          "user_type": this.user_type
        }
        this.authService.registerUser(user).subscribe((data: User) => {
          if(data._id != null){
            this.authService.setUser(data);
            this.goToLogin();
          }else{
            this.presentAlert("Email address already exists", "Registration Failed");
          }
      });
      }
    }
  }

  goToLogin(){
    this.presentAlert("User was created successfully", "Registration Complete");
    this.router.navigateByUrl('/login');
  }

  async presentAlert(err, msg) {
    const alert = await this.alertCtrl.create({
      header: msg,
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

  proceed(){
    if (this.first_name == null || this.last_name == null || this.email == null || this.cell_number == null) {
      this.presentAlert("Please make sure that you fill in all the necessary fields", "Required Fields");
      document.getElementById("contact_fields").style.display = "block";
      document.getElementById("").style.display = "none";
    } else {
      document.getElementById("contact_fields").style.display = "none";
      document.getElementById("password_fields").style.display = "block";
    }
  }

}
