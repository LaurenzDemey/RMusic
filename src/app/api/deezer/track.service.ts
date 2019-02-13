import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITrackService } from '../interface';
import { ITrack } from '../model';

@Injectable()
export class TrackService implements ITrackService {
  constructor(private jsonP: Jsonp) {}

  getTrack(id: number): Observable<ITrack> {
    return this.jsonP
      .get(`https://api.deezer.com/track/${id}?output=jsonp&callback=JSONP_CALLBACK&q=`)
      .pipe(
        map(response => {
          const track: ITrack = response.json();
          return track;
        })
      );
  }
}
