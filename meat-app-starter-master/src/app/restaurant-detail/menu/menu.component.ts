import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private myService: RestaurantsService, private myRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.myService.MenuOfRestaurant(this.myRoute.parent.snapshot.params.id)
  }

  addMenuItem(item: MenuItem)
  {
    console.log(item);
  }

}
