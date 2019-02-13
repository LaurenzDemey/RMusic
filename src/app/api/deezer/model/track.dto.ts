import { IAlbumDto } from './album.dto';
import { IArtistDto } from './artist.dto';

export interface ITrackDto {
  id: number;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  position: number;
  artist: IArtistDto;
  album: IAlbumDto;
  type: string;
}
