import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  ALBUM_SERVICE,
  ARTIST_SERVICE,
  PLAYLIST_SERVICE,
  TRACK_SERVICE
} from 'src/app/api/injection-tokens';
import {
  IAlbumService,
  IArtistService,
  IPlaylistService,
  ITrack,
  ITrackService
} from '../../../api';
import { PlayerInfo } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  audio: HTMLAudioElement;
  currentTracks: Subject<PlayerInfo>;

  constructor(
    @Inject(PLAYLIST_SERVICE) private playlistService: IPlaylistService,
    @Inject(ALBUM_SERVICE) private albumService: IAlbumService,
    @Inject(TRACK_SERVICE) private trackService: ITrackService,
    @Inject(ARTIST_SERVICE) private artistService: IArtistService
  ) {
    this.audio = new Audio();
    this.currentTracks = new Subject<PlayerInfo>();
  }

  load(url: string) {
    this.audio.src = url;
    this.audio.load();
  }

  play(track: ITrack) {
    this.load(track.preview);
    this.audio.play();
  }

  selectedTracklist(track: PlayerInfo) {
    this.currentTracks.next(track);
  }

  getCurrentTrackList(): Observable<ITrack[]> {
    return this.currentTracks.pipe(
      switchMap(trk => {
        switch (trk.type) {
          case 'song':
            return this.trackService.getTrack(trk.id).pipe(map(t => [t]));
          case 'album':
            return this.albumService.getAlbumTracks(trk.tracklist);
          case 'artist':
            return this.artistService.getArtistTracks(trk.tracklist);
          case 'playlist':
            return this.playlistService.getPlaylistTracks(trk.tracklist);
          default:
            return [];
        }
      })
    );
  }

  formatTime(seconds): string {
    let minutes: any = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
  }
}
