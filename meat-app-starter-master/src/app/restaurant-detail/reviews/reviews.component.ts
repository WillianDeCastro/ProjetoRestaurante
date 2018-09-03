import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restService.ReviewsOfRestaurant(this.route.parent.snapshot.params.id);

  }

}
