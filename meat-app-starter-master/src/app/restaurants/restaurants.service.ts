import { IRestaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from '../app.api';
import { Observable } from '../../../node_modules/rxjs/Observable';
import 'rxjs/add/operator/map';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';




@Injectable()
export class RestaurantsService {

    constructor(private myHttp: Http) { }

    myRestaurants: IRestaurant[] = []


    GetMyRestaurants(search?: string): Observable<IRestaurant[]> {
        return this.myHttp.get(`${MEAT_API}/restaurants`, { params: { q: search } })
            .map(response => response.json());
    }

    RestaurantsById(id: string): Observable<IRestaurant> {

        return this.myHttp.get(`${MEAT_API}/restaurants/${id}`)
            .map(Response => Response.json());
    }

    ReviewsOfRestaurant(id: string): Observable<any> {
        return this.myHttp.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(Response => Response.json());
    }

    MenuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.myHttp.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(Response => Response.json());
    }
}
