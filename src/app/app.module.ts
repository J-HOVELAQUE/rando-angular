import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeModule } from './home/home.module';
import { PlaceListModule } from './place-list/place-list.module';
import { PlaceMapModule } from './place-map/place-map.module';
import { HikingSheetModule } from './hiking-sheet/hiking-sheet.module';
import { ParticipantsModule } from './participants/participants.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PlaceListModule,
    PlaceMapModule,
    HikingSheetModule,
    ParticipantsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
