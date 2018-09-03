import { Component, OnInit, Input } from '@angular/core';
import { IRestaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

@Input() rest: IRestaurant
  constructor() { }

  ngOnInit() {
  }

}
