import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  results: Observable<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getProperties()
  }

  getProperties(){
    this.results = this.apiService.getAllProperties();
  }

}
