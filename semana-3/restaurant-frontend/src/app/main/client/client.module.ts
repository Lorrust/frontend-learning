import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { CreateComponent } from './features/create/create.component';
import { ListComponent } from './features/list/list.component';
import { SubmenuComponent } from './components/submenu/submenu.component';


@NgModule({
  declarations: [
    ClientComponent,
    CreateComponent,
    ListComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
