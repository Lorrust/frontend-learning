import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../../../models/photo.model';
import { PhotoService } from './../../services/photo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  photos: Array<Photo> = [];
  id?: number;

  constructor(private PhotoService: PhotoService, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }

  ngOnInit() {
    if (this.id) {
      this.PhotoService.getPhotosByAlbum(this.id).subscribe((res: any) => {
        this.photos = res;
        console.log(res);
      });
    } else {
      this.PhotoService.getPhotos().subscribe((res: any) => {
        this.photos = res;
        console.log(res);
      });
    }
  }

}
