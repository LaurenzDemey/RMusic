import { Observable } from 'rxjs';
import { IArtist, ITrack } from '../model';

export interface IArtistService {
  getArtist(id: number): Observable<IArtist>;
  getArtistTracks(url: string): Observable<ITrack[]>;
}
