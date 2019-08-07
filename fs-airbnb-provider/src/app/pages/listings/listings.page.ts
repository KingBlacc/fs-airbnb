import { AuthService } from './../../services/auth.service';
import { CreatePropertyPage } from './../create-property/create-property.page';
import { Property } from './../../shared/models/property';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from '../../services/property.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  properties: Observable<any>;
  userId: String;
  constructor(private propertyService: PropertyService,
              private navController: NavController,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.userId = this.authService.getUserId();
    this.getData();
  }

  getData(){
    this.properties = this.propertyService.getListings();
  }

  navigateToCreate(){
    this.router.navigateByUrl('/createproperty');
  }
}
