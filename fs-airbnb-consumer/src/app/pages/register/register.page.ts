import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

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
  user_type: String = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  checkIfUserExists(){
    this.authService.getUsers().subscribe(user => {

    });
  }

  validateEmailAccessibility(){
    
  }

}
