import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IArtistService } from '../interface';
import { IArtist, ITrack, ITracks } from '../model';

@Injectable()
export class ArtistService implements IArtistService {
  constructor(private jsonP: Jsonp) {}

  getArtist(id: number): Observable<IArtist> {
    return this.jsonP
      .get(`https://api.deezer.com/artist/${id}?output=jsonp&callback=JSONP_CALLBACK&q=`)
      .pipe(
          map(response => response.json())
      );
  }

  getArtistTracks(url: string): Observable<ITrack[]> {
    return this.jsonP.get(`${url}&output=jsonp&callback=JSONP_CALLBACK&q=`).pipe(
      map(response => {
        const artist: ITracks = response.json();
        return artist.data.map(track => {
          return track;
        });
      })
    );
  }
}
