import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  latLng,
  tileLayer,
  marker,
  icon,
  Map,
  LeafletMouseEvent,
} from 'leaflet';
import { PlaceRepoService } from 'src/app/services/place-repo.service';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Subject } from 'rxjs';
import { IRecordedPlace } from 'src/app/models/place';

@Component({
  selector: 'app-set-location-map',
  templateUrl: './set-location-map.component.html',
  styleUrls: ['./set-location-map.component.css'],
})
export class SetLocationMapComponent implements OnInit {
  map: Map;

  @Output() changeCoordinates = new EventEmitter();

  markerIcon = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png',
    }),
  };

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
    ],
    zoom: 8,
    center: latLng([46.132, 6.592]),
  };

  constructor() {}

  initMarker() {
    marker([46.132, 6.592], this.markerIcon).addTo(this.map);
  }

  onClickOnMap(event: LeafletMouseEvent) {
    this.changeCoordinates.emit(event.latlng);
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.initMarker();
  }

  ngOnInit(): void {
    this.map.invalidateSize();
  }
}
