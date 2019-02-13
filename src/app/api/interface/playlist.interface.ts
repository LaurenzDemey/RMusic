import { Observable } from 'rxjs';
import { IPlaylist, ITrack } from '../model';

export interface IPlaylistService {
  getPlaylist(id: string): Observable<IPlaylist>;
  getPlaylistTracks(url: string): Observable<ITrack[]>;
}
