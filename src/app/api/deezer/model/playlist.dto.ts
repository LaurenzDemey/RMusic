import { ICreatorDto } from './creator.dto';
import { ITracksDto } from './tracks.dto';
import { IUserDto } from './user.dto';

export interface IPlaylistDto {
  id: number;
  title: string;
  public: boolean;
  nb_tracks: number;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  user: IUserDto;
  type: string;
  description: string;
  duration: number;
  is_loved_track: boolean;
  collaborative: boolean;
  fans: number;
  share: string;
  creator: ICreatorDto;
  tracks: ITracksDto;
}
