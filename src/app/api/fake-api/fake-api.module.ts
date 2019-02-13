import { NgModule } from '@angular/core';
import { AlbumService } from './album.service';
import { ChartService } from './chart.service';

@NgModule({
  providers: [AlbumService, ChartService]
})
export class ApiModule {}
