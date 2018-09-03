import { Component, OnInit } from '@angular/core';
import { IRestaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  myRestaurants: IRestaurant[]

  constructor(private myServiceRestaurant: RestaurantsService) { }

  ngOnInit() {
    this.myServiceRestaurant.GetMyRestaurants()
    .subscribe(rest => this.myRestaurants = rest);
  }

}
