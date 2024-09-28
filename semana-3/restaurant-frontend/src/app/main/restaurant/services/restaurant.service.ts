import { Injectable } from '@angular/core';
import { Restaurant } from '../../../models/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
  private restaurants: Array<Restaurant> = [];
  private apiUrl = 'http://localhost:8080/restaurante';

  addRestaurant(restaurant: Restaurant) {
    console.log(restaurant);
    return this.http.post(this.apiUrl, restaurant);
  }

  removeRestaurant(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  get getRestaurants() {
    return this.http.get(this.apiUrl);
  };

  findById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.apiUrl}/${id}`);
  }

  editRestaurant(restaurant: Restaurant) {
    this.http.put(`${this.apiUrl}/${restaurant.id}`, restaurant).subscribe(() => {
    }
    );
  }
}
