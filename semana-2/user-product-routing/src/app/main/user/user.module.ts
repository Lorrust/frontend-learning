import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ListModule } from './features/list/list.module';
import { CreateModule } from './features/create/create.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    CreateModule,
    ListModule
  ]
})
export class UserModule { }
