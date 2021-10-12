import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeModule } from './home/home.module';
import { PlaceListModule } from './place-list/place-list.module';
import { PlaceMapModule } from './place-map/place-map.module';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceMapComponent } from './place-map/place-map.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PlaceListModule,
    PlaceMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
