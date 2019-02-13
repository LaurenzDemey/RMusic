import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPlaylistService } from '../interface';
import { IPlaylist, ITrack } from '../model';
import { IPlaylistDto, ITracksDto } from './model';

@Injectable()
export class PlaylistService implements IPlaylistService {
  constructor(private jsonP: Jsonp) {}

  public getPlaylist(id: string): Observable<IPlaylist> {
    return this.jsonP
      .get(`https://api.deezer.com/playlist/${id}?output=jsonp&callback=JSONP_CALLBACK&q=`)
      .pipe(
        map(res => {
          const playlistDto: IPlaylistDto = res.json();
          const result: IPlaylist = {
            title: playlistDto.title,
            nb_tracks: playlistDto.nb_tracks,
            img: playlistDto.picture_medium,
            fans: playlistDto.fans,
            tracks: playlistDto.tracks.data.map(track => {
              return {
                id: track.id,
                name: track.title,
                duration: track.duration,
                preview: track.preview,
                img: track.album.cover_medium,
                type: 'song',
                artist: track.artist.name
              };
            })
          };
          return result;
        })
      );
  }

  getPlaylistTracks(url: string): Observable<ITrack[]> {
    return this.jsonP.get(`${url}?output=jsonp&callback=JSONP_CALLBACK&q=`).pipe(
      map(response => {
        const playlist: ITracksDto = response.json();
        return playlist.data.map(track => {
          return {
            id: track.id,
            name: track.title,
            duration: track.duration,
            preview: track.preview,
            img: track.album.cover_medium,
            type: track.type,
            artist: track.artist.name
          };
        });
      })
    );
  }
}
