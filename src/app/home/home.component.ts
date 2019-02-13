import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CHART_SERVICE, IChart, IChartService } from '../api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  charts$: Observable<IChart[]>;

  constructor(@Inject(CHART_SERVICE) private chartService: IChartService) {}

  ngOnInit() {
    this.charts$ = this.chartService.getChart();
  }
}
