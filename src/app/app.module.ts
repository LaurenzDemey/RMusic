import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotlistComponent } from './hotlist/hotlist.component';
import { LibraryComponent } from './library/library.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HotlistComponent, LibraryComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
