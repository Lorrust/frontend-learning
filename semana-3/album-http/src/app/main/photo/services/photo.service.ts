import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { Photo } from '../../../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<Array<Photo>>('https://jsonplaceholder.typicode.com/photos').pipe(take(1));
  }

  getPhotosByAlbum(id: number) {
    return this.http.get<Array<Photo>>('https://jsonplaceholder.typicode.com/photos', { params: { albumId: id } }).pipe(take(1));
  }

}
