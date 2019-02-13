import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { LayoutModule } from './layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // application wide module
    BrowserModule,
    HttpClientModule,

    // routing
    AppRoutingModule,

    // layout module for app layout
    LayoutModule,

    // initial route module
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
