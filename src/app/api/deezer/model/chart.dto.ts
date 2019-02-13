import { IAlbumsDto } from './albums.dto';
import { IArtistsDto } from './artists.dto';
import { IPlaylistsDto } from './playlists.dto';
import { ITracksDto } from './tracks.dto';

export interface IChartDto {
  tracks: ITracksDto;
  albums: IAlbumsDto;
  artists: IArtistsDto;
  playlists: IPlaylistsDto;
}
