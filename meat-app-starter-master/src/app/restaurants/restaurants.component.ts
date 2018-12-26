import { Component, OnInit, Input } from '@angular/core';
import { IRestaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('titleAppear', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-5100px, 0px)'  }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantsComponent implements OnInit {
  titleState = 'ready';

  myRestaurants: IRestaurant[]

  constructor(private myServiceRestaurant: RestaurantsService) { }

  ngOnInit() {
    this.myServiceRestaurant.GetMyRestaurants()
      .subscribe(rest => this.myRestaurants = rest);
  }

}
