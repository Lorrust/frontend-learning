import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { CreateComponent } from './features/create/create.component';
import { ListComponent } from './features/list/list.component';
import { RestaurantComponent } from './restaurant.component';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
