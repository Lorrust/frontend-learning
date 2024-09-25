import { Injectable } from '@angular/core';
import { Restaurant } from '../../../models/restaurant.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  private id = 0;
  private restaurants: Array<Restaurant> = [];

  // addRestaurant(restaurant: Restaurant) {
  //   restaurant.id = this.id;
  //   this.restaurants.push(restaurant);
  //   this.id++;
  // }

  addRestaurant(restaurant: Restaurant) {
    this.http.post('http://localhost:8080/restaurants', restaurant).subscribe((response: any) => {
      console.log(response);
    }
    )
  };

  removeRestaurant(id: number) {
    this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== id);
  }

  get getRestaurants() {
    return this.restaurants;
  }

  findById(id: number): Restaurant | undefined {
    return this.restaurants.find(restaurant => restaurant.id == id);
  }

  editRestaurant(restaurant: Restaurant) {
    this.restaurants.forEach(restaurantList => {
      if (restaurantList.id === restaurant.id) {
        restaurantList.nome = restaurant.nome;
        restaurantList.cnpj = restaurant.cnpj;
        restaurantList.estrelas = restaurant.estrelas;
        restaurantList.tipoComida = restaurant.tipoComida;
        return;
      }
    });
  }
}
