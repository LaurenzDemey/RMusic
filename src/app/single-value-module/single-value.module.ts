import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PlayerComponent } from './player';
import { PlaylistComponent } from './playlist/playlist.component';
import { ReadableNumberPipe } from './readable-number/readable-number.pipe';
import { RoundComponent } from './round/round.component';
import { SongComponent } from './song/song.component';
import { SquareComponent } from './square/square.component';

const exportedComponents = [
  AlbumComponent,
  SongComponent,
  PlaylistComponent,
  ArtistComponent,
  PlayerComponent
];

@NgModule({
  declarations: [
    ...exportedComponents,
    RoundComponent,
    SquareComponent,
    ReadableNumberPipe,
    OverlayComponent
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [...exportedComponents]
})
export class SingleValueModule {}
