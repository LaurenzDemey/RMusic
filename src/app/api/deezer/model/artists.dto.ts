import { IArtistDto } from './artist.dto';

export interface IArtistsDto {
  data: IArtistDto[];
  total: number;
}
