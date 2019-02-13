import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import {
  ALBUM_SERVICE,
  ARTIST_SERVICE,
  CHART_SERVICE,
  PLAYLIST_SERVICE,
  TRACK_SERVICE
} from '../injection-tokens';
import { AlbumService } from './album.service';
import { ArtistService } from './artist.service';
import { ChartService } from './chart.service';
import { PlaylistService } from './playlist.service';
import { TrackService } from './track.service';

@NgModule({
  providers: [
    { provide: PLAYLIST_SERVICE, useClass: PlaylistService },
    { provide: CHART_SERVICE, useClass: ChartService },
    { provide: ALBUM_SERVICE, useClass: AlbumService },
    { provide: ARTIST_SERVICE, useClass: ArtistService },
    { provide: TRACK_SERVICE, useClass: TrackService }
  ],
  imports: [JsonpModule]
})
export class ApiModule {}
