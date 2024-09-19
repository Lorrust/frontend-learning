import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateModule } from './features/create/create.module';
import { ListModule } from './features/list/list.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    CreateModule,
    ListModule
  ]
})
export class ProductModule { }
