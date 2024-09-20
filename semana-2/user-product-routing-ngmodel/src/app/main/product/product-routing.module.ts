import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './features/create/create.component';
import { ListComponent } from './features/list/list.component';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
