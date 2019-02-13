import { Observable } from 'rxjs';
import { IAlbum } from '../model';

export interface IAlbumService {
  getAlbums(): Observable<IAlbum[]>;
}
