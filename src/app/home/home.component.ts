import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IChart } from '../api';
import { ChartService } from '../api/fake-api/chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  charts$: Observable<IChart[]>;

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.charts$ = this.chartService.getChart();
  }
}
