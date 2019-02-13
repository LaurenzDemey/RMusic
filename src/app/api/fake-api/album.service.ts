import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appConfig } from 'src/app/app.config';
import { IAlbumService } from '../interface';
import { IAlbum } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService implements IAlbumService {
  constructor(private http: HttpClient) {}

  public getAlbums(): Observable<IAlbum[]> {
    return this.http.get<any>(`${appConfig.baseUrl}album`).pipe(
      map(album => {
        const result: IAlbum[] = [];
        result.push({
          artist: album.artist.name,
          img: album.cover_medium,
          name: album.title
        });
        return result;
      })
    );
  }
}
