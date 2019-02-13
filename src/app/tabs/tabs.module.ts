import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollClassModule } from '../scroll-class/scroll-class.module';
import { TabDirective } from './tab.directive';
import { TabsComponent } from './tabs/tabs.component';

const sharedComponents = [TabsComponent, TabDirective];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, ScrollClassModule],
  exports: [...sharedComponents]
})
export class TabsModule {}
