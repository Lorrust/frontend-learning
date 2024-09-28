import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'restaurants', loadChildren: () => import('./main/restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: 'clients', loadChildren: () => import('./main/client/client.module').then(m => m.ClientModule) },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
