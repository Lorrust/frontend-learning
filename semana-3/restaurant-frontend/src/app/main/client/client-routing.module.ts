import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      { path: 'list', component: ListComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: CreateComponent, pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
