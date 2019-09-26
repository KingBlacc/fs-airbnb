import { AuthService } from './../../services/auth.service';
import { PropertyService } from './../../services/property.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listings-details',
  templateUrl: './listings-details.page.html',
  styleUrls: ['./listings-details.page.scss'],
})
export class ListingsDetailsPage implements OnInit {

  information = null;
  user = null;
  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private propertyService: PropertyService, private router: Router) { }

  ngOnInit() {
    if(this.authService.getUser() == null){
      this.router.navigateByUrl('/login');
    }
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.propertyService.getPropertyDetails(id).subscribe(result => {
      console.log('details: ', result);
      this.information = result;
      this.authService.getUsersById(this.information.user_id).subscribe(data =>{
        this.user = data;
      });
    });
  }

}
