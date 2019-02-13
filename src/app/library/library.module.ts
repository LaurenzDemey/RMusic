import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from '../tabs/tabs.module';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [LibraryComponent],
  imports: [CommonModule, LibraryRoutingModule, TabsModule]
})
export class LibraryModule {}
