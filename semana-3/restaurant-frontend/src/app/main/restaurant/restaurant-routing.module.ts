import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';
import { RestaurantComponent } from './restaurant.component';

const routes: Routes = [
  {
    path: '', component: RestaurantComponent, children: [
      { path: 'list', component: ListComponent, pathMatch: 'full' },
      { path: 'create', component: CreateComponent, pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
