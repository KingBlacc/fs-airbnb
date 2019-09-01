import { AuthService } from './../../services/auth.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  results: Observable<any>;

  constructor(private propertyService: PropertyService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    if(this.authService.getUser() == null){
      this.router.navigateByUrl('/login');
    }
    this.getProperties()
  }

  getProperties(){
    this.results = this.propertyService.getAllProperties();
  }

}
