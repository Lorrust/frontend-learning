import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { ListComponent } from './features/list/list.component';
import { PhotoComponent } from './photo.component';


@NgModule({
  declarations: [
    ListComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
