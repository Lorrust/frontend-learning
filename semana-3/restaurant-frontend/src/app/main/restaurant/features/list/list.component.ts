import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  restaurants = Array<Restaurant>();

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.updateList();
  }

  updateList(): void {
    this.restaurantService.getRestaurants.subscribe((response: any) => {
      console.log(response);
      this.restaurants = response;
      this.router.navigate(['/restaurants/list']);
    });
  }

  editRestaurant(id: number) {
    this.router.navigate(['/restaurants/create', id]);
  }

  removeRestaurant(id: number) {
    console.log(id);
    this.restaurantService.removeRestaurant(id).subscribe(() => {
      this.updateList();
    })
  }

}
