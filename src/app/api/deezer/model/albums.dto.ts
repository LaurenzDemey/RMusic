import { IAlbumDto } from './album.dto';

export interface IAlbumsDto {
  data: IAlbumDto[];
  total: number;
}
