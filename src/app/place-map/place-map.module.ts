import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceMapComponent } from './place-map.component';
import { MapPlaceLocationComponent } from './components/map-place-location/map-place-location.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [PlaceMapComponent, MapPlaceLocationComponent],
  imports: [CommonModule, LeafletModule],
  exports: [PlaceMapComponent],
})
export class PlaceMapModule {}
