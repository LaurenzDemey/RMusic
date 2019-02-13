import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabDirective } from './tab.directive';
import { TabsComponent } from './tabs/tabs.component';

const sharedComponents = [TabsComponent, TabDirective];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule],
  exports: [...sharedComponents]
})
export class TabsModule {}
