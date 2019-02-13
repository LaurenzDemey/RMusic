import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SingleValueModule } from '../single-value-module';
import { HotlistRoutingModule } from './hotlist-routing.module';
import { HotlistComponent } from './hotlist.component';

@NgModule({
  declarations: [HotlistComponent],
  imports: [CommonModule, HotlistRoutingModule, SingleValueModule]
})
export class HotlistModule {}
