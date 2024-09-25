import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { CreateComponent } from './features/create/create.component';
import { ListComponent } from './features/list/list.component';
import { RestaurantComponent } from './restaurant.component';
import { SubmenuComponent } from './components/submenu/submenu.component';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    RestaurantComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
