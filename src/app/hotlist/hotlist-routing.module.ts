import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotlistComponent } from './hotlist.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HotlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotlistRoutingModule {}
