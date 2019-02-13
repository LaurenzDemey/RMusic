import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RoundComponent } from './round/round.component';
import { SongComponent } from './song/song.component';
import { SquareComponent } from './square/square.component';

const components = [
  AlbumComponent,
  SongComponent,
  PlaylistComponent,
  ArtistComponent,
  RoundComponent,
  SquareComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class SingleValueModule {}
