import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appConfig } from '../../app.config';
import { IChartService } from '../interface';
import { IChart } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ChartService implements IChartService {
  constructor(private http: HttpClient) {}

  public getChart(): Observable<IChart[]> {
    return this.http.get<any>(`${appConfig.baseUrl}chart`).pipe(
      map(res => {
        const result: IChart[] = [];

        res.albums.data.forEach(album => {
          result.push({
            type: 'album',
            img: album.cover_medium,
            artist: album.artist.name,
            name: album.title
          });
        });
        res.artists.data.forEach(artist => {
          result.push({
            type: 'artist',
            img: artist.picture_medium,
            followers: artist.followers,
            name: artist.name
          });
        });
        res.playlists.data.forEach(playlist => {
          result.push({
            type: 'playlist',
            img: playlist.picture_medium,
            totalTracks: playlist.nb_tracks,
            name: playlist.title
          });
        });
        res.tracks.data.forEach(track => {
          result.push({
            type: 'song',
            img: track.album.cover_medium,
            name: track.title
          });
        });
        return result;
      })
    );
  }
}
