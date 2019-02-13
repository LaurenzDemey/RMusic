import { Observable } from 'rxjs';
import { IAlbum } from '../model';

export interface IAlbumService {
  getAlbumById(id: number): Observable<IAlbum>;
}
