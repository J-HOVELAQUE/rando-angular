import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceMapComponent } from './place-map.component';
import { MapPlaceLocationComponent } from './components/map-place-location/map-place-location.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectHikeModalComponent } from './components/select-hike-modal/select-hike-modal.component';

@NgModule({
  declarations: [PlaceMapComponent, MapPlaceLocationComponent, SelectHikeModalComponent],
  imports: [CommonModule, LeafletModule, NgbPopoverModule],
  exports: [PlaceMapComponent],
})
export class PlaceMapModule {}
