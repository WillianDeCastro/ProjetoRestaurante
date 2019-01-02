import { Component, OnInit, Input } from '@angular/core';
import { IRestaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('titleAppear', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-5100px, 0px)' }),
        animate('300ms 0s ease-in-out')
      ])
    ]),
    trigger('toggleSearch', [
      state('hidden', style({ opacity: 0, "max-height": "0px" })),
      state('visible', style({ opacity: 1, "max-height": "70px", "margin-top": "20px" })),
      transition('* => *', animate('500ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {
  titleState = 'ready';

  searchBarState = 'hidden';
  myRestaurants: IRestaurant[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private myServiceRestaurant: RestaurantsService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('');

    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchWords =>
        this.myServiceRestaurant.GetMyRestaurants(searchWords)
        .catch(error => Observable.from([]))
        )
      .subscribe(rest => this.myRestaurants = rest);

    this.myServiceRestaurant.GetMyRestaurants()
      .subscribe(rest => this.myRestaurants = rest);
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
