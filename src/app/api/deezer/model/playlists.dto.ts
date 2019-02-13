import { IPlaylistDto } from './playlist.dto';

export interface IPlaylistsDto {
  data: IPlaylistDto[];
  total: number;
}
