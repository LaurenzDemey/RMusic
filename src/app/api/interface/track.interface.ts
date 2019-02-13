import { Observable } from 'rxjs';
import { ITrack } from '../model';

export interface ITrackService {
  getTrack(id: number): Observable<ITrack>;
}
