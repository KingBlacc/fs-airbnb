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
  propertyId;

  constructor(private activatedRoute: ActivatedRoute,
              private propertyService: PropertyService,
              private router: Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.propertyId = id;
    this.propertyService.getPropertyDetails(id).subscribe(result => {
      console.log('details: ', result);
      this.information = result;});
  }

  editProperty(){
    this.router.navigateByUrl(`property/${this.propertyId}`);
  }

}
