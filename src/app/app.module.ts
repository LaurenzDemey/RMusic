import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // application wide module
    BrowserModule,

    // routing
    AppRoutingModule,

    // initial route module
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
