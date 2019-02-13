import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RoundComponent } from './round/round.component';
import { SongComponent } from './song/song.component';
import { SquareComponent } from './square/square.component';

const exportedComponents = [AlbumComponent, SongComponent, PlaylistComponent, ArtistComponent];

@NgModule({
  declarations: [...exportedComponents, RoundComponent, SquareComponent],
  imports: [CommonModule],
  exports: [...exportedComponents]
})
export class SingleValueModule {}
