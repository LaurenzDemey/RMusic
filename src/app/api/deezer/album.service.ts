import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAlbumService } from '../interface';
import { IAlbum, ITrack } from '../model';
import { IAlbumDto, ITracksDto } from './model';

@Injectable()
export class AlbumService implements IAlbumService {
  constructor(private jsonP: Jsonp) {}

  getAlbums(): Observable<IAlbum[]> {
    return this.jsonP
      .get('https://api.deezer.com/album/302127?output=jsonp&callback=JSONP_CALLBACK&q=')
      .pipe(
        map(response => {
          const album: IAlbumDto = response.json();
          const result: IAlbum[] = [];
          result.push({
            artist: album.artist,
            img: album.cover_medium,
            name: album.title
          });
          return result;
        })
      );
  }

  getAlbumTracks(url: string): Observable<ITrack[]> {
    return this.jsonP.get(`${url}?output=jsonp&callback=JSONP_CALLBACK&q=`).pipe(
      map(response => {
        const album: ITracksDto = response.json();
        console.log(album);
        return album.data.map(track => {
          const result: ITrack = {
            id: track.id,
            artist: track.artist.name,
            duration: track.duration,
            preview: track.preview,
            name: track.title,
            type: track.type
          };
          return result;
        });
      })
    );
  }
}
