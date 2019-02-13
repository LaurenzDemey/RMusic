import { Observable } from 'rxjs';
import { IChart } from '../model';

export interface IChartService {
  getChart(): Observable<IChart[]>;
}
