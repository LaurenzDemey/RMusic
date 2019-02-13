import { IArtistDto } from './artist.dto';

export interface IAlbumDto {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  record_type: string;
  tracklist: string;
  explicit_lyrics: boolean;
  position: number;
  artist: IArtistDto;
  type: string;
}
