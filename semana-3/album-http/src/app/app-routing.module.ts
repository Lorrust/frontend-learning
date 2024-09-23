import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'album', loadChildren: () => import('./main/album/album.module').then(m => m.AlbumModule) },
  { path: 'photo', loadChildren: () => import('./main/photo/photo.module').then(m => m.PhotoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
