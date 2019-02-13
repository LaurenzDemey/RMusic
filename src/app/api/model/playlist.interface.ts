import { ITrack } from './track.interface';

export interface IPlaylist {
  title: string;
  nb_tracks: number;
  link?: string;
  img: string;
  tracklist?: string;
  creation_date?: string;
  type?: string;
  description?: string;
  duration?: number;
  is_loved_track?: boolean;
  fans: number;
  share?: string;
  tracks: ITrack[];
}
