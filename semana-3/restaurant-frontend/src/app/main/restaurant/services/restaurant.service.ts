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

  addRestaurant(restaurant: Restaurant) {
    console.log(restaurant);
    return this.http.post('http://localhost:8080/restaurante', restaurant);
  }

  removeRestaurant(id: number) {
    return this.http.delete(`http://localhost:8080/restaurante/${id}`);
  }

  get getRestaurants() {
    return this.http.get('http://localhost:8080/restaurante')
  };

  findById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`http://localhost:8080/restaurante/${id}`);
  }

  editRestaurant(restaurant: Restaurant) {
    this.http.put(`http://localhost:8080/restaurante/${restaurant.id}`, restaurant).subscribe(() => {
    }
    );
  }
}
