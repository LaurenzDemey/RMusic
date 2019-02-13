import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollClassDirective } from './scroll-class.directive';

@NgModule({
  declarations: [ScrollClassDirective],
  imports: [CommonModule],
  exports: [ScrollClassDirective]
})
export class ScrollClassModule {}
