import { IArtist } from './artist.interface';

export interface IAlbum {
  id?: number;
  name: string;
  img: string;
  record_type?: string;
  tracklist?: string;
  position?: number;
  artist: IArtist;
  type?: string;
}
