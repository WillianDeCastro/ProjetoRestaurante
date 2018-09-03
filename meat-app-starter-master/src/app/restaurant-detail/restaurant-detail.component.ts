import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { IRestaurant } from '../restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurante: IRestaurant
  constructor(private myRestService: RestaurantsService, private myRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myRestService.RestaurantsById(this.myRoute.snapshot.params['id']).subscribe(rest => this.restaurante = rest);
  }

}
