import { IRestaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MEAT_API } from '../app.api';
import { Observable } from '../../../node_modules/rxjs/Observable';
import 'rxjs/add/operator/map';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';




@Injectable()
export class RestaurantsService {

    constructor(private myHttp: HttpClient) { }

    myRestaurants: IRestaurant[] = []


    GetMyRestaurants(search?: string): Observable<IRestaurant[]> {
        let params: HttpParams = undefined;
        if (search) {
            params = new HttpParams().append('q', search);
        }
        return this.myHttp.get<IRestaurant[]>(`${MEAT_API}/restaurants`, { params: params });
    }

    RestaurantsById(id: string): Observable<IRestaurant> {

        return this.myHttp.get<IRestaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    ReviewsOfRestaurant(id: string): Observable<any> {
        return this.myHttp.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    MenuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.myHttp.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}
