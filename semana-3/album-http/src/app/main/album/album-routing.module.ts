import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component';
import { ListComponent } from './features/list/list.component';

const routes: Routes = [
  {
    path: '', component: AlbumComponent,
    children: [
      { path: '', component: ListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
