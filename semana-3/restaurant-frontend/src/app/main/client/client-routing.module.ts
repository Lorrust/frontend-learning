import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent, pathMatch: 'full' },
      { path: 'create', component: CreateComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: ClientComponent, pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
