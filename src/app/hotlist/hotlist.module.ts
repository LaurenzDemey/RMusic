import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HotlistRoutingModule } from './hotlist-routing.module';
import { HotlistComponent } from './hotlist.component';

@NgModule({
  declarations: [HotlistComponent],
  imports: [CommonModule, HotlistRoutingModule]
})
export class HotlistModule {}
