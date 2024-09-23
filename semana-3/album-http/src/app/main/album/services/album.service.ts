import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../../../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get<Array<Album>>('https://jsonplaceholder.typicode.com/photos');
  }

}
