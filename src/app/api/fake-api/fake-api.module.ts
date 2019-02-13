import { NgModule } from '@angular/core';
import { ALBUM_SERVICE, CHART_SERVICE } from '../injection-tokens';
import { AlbumService } from './album.service';
import { ChartService } from './chart.service';

@NgModule({
  providers: [
    { provide: ALBUM_SERVICE, useClass: AlbumService },
    { provide: CHART_SERVICE, useClass: ChartService }
  ]
})
export class ApiModule {}
