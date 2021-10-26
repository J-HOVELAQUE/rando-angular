import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
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
  Marker,
} from 'leaflet';
import { PlaceRepoService } from 'src/app/services/place-repo.service';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Subject, Observable, Subscription } from 'rxjs';
import { IRecordedPlace } from 'src/app/models/place';

interface ICoords {
  lat: string;
  long: string;
}

@Component({
  selector: 'app-set-location-map',
  templateUrl: './set-location-map.component.html',
  styleUrls: ['./set-location-map.component.css'],
})
export class SetLocationMapComponent implements OnInit, OnDestroy, OnChanges {
  map: Map;

  @Input() coords: ICoords;
  @Input() reinitMarkerSwitcher: Observable<void>;
  @Output() changeCoordinates = new EventEmitter<ICoords>();

  private _reinitMarkerSwitcherListener: Subscription;

  marker: Marker;

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
    zoom: 12,
    center: latLng([46.132, 6.592]),
  };

  constructor() {}

  initMarker() {
    setTimeout(() => {
      this.map.invalidateSize();
      if (this.marker) {
        this.marker.remove();
      }

      this.map.flyTo([
        parseInt(this.coords.lat, 10),
        parseInt(this.coords.long, 10),
      ]);

      this.marker = marker(
        [parseInt(this.coords.lat, 10), parseInt(this.coords.long, 10)],
        this.markerIcon
      ).addTo(this.map);
    }, 10);
  }

  onClickOnMap(event: LeafletMouseEvent) {
    this.changeCoordinates.emit({
      lat: event.latlng.lat.toString(),
      long: event.latlng.lng.toString(),
    });

    this.marker.setLatLng([event.latlng.lat, event.latlng.lng]);
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.initMarker();
    this.map.invalidateSize();
  }

  ngOnInit(): void {
    this._reinitMarkerSwitcherListener = this.reinitMarkerSwitcher.subscribe(
      () => {
        this.initMarker();
      }
    );
  }

  ngOnChanges(): void {}

  ngOnDestroy(): void {
    this._reinitMarkerSwitcherListener.unsubscribe();
  }
}
