import { User } from './../../models/user';
import { Property } from './../../models/property';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  results: Property[];


  constructor(private propertyService: PropertyService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    // if(this.authService.getUser() == null){
    //   this.router.navigateByUrl('/login');
    // }
    this.getProperties();
  }

  getProperties(){
    var data;
    this.propertyService.getAllProperties().subscribe((res: Property[]) => {
      this.results = res;
      data = res;
    });
  }

}
