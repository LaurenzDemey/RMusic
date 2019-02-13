import { Observable } from 'rxjs';
import { IAlbum, ITrack } from '../model';

export interface IAlbumService {
  getAlbums(): Observable<IAlbum[]>;
  getAlbumTracks(url: string): Observable<ITrack[]>;
}
