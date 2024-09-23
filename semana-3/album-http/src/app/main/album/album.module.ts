import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { ListComponent } from './features/list/list.component';


@NgModule({
  declarations: [
    AlbumComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
