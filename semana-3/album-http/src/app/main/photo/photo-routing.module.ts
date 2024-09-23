import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { PhotoComponent } from './photo.component';

const routes: Routes = [
  {
    path: '', component: PhotoComponent,
    children: [
      { path: '', component: ListComponent },
      { path: ':id', component: ListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
