import { Component } from '@angular/core';
import { Album } from '../../../../models/album.model';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  albums: Array<Album> = [];
  id?: number;

  constructor(private albumService: AlbumService, private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.albumService.getAlbums().subscribe((res: any) => {
      this.albums = res;
      console.log(res);
    });
  }

  viewAlbumPhotos(album: Album) {
    this.router.navigate([`/photo/${album.id}`])
  }



}
