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
  cell_number: String = null;
  user_type: String = "provider";


  constructor(private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router) { }

ngOnInit() {
}

register(){
if (this.first_name == null || this.last_name == null || this.email == null || 
this.password == null || this.cell_number == null) {
this.presentAlert("Please fill in all the fields", "Registration Error");
} else {
let user = {
"first_name": this.first_name,
"last_name": this.last_name,
"email": this.email,
"password": this.password,
"cell_number": this.cell_number,
"user_type": this.user_type
}
this.authService.registerUser(user).subscribe(data => {
if(data == "Error"){
this.presentAlert("Email address already exists", "Registration Failed")
}else{
this.authService.setUserId(data);
this.goToLogin();
}
});
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

}
