import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule } from '../api';
import { SingleValueModule } from '../single-value-module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SingleValueModule, HomeRoutingModule, ApiModule]
})
export class HomeModule {}
