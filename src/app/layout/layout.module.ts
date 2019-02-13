import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiModule } from '../api';
import { ScrollClassModule } from '../scroll-class/scroll-class.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, ScrollClassModule, ApiModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
