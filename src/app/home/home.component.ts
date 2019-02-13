import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IChart, IChartService } from '../api';
import { CHART_SERVICE } from '../api/injection-tokens';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  charts$: Observable<IChart[]>;

  constructor(@Inject(CHART_SERVICE) private chartService: IChartService) {}

  ngOnInit() {
    this.charts$ = this.chartService.getChart().pipe(tap(x => console.log(x)));
  }
}
