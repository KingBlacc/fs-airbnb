import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user;
  id;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.id = this.authService.getUser()
  }

  fetchUserDetails(){
    this.user = this.authService.getUsersById(this.id);
  }

}
