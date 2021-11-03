import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
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
import { Observable, Subscription } from 'rxjs';

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

  @Input() coords: ICoords | undefined;
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
      this.map.invalidateSize({ pan: false, animate: false });
      if (this.marker) {
        this.marker.remove();
      }

      if (this.coords) {
        this.map.setView(
          [parseFloat(this.coords.lat), parseFloat(this.coords.long)],
          12
        );
        this.marker = marker(
          [parseFloat(this.coords.lat), parseFloat(this.coords.long)],
          this.markerIcon
        ).addTo(this.map);
      } else {
        this.map.setView([46.132, 6.592], 5);
      }
    }, 10);
  }

  onClickOnMap(event: LeafletMouseEvent) {
    this.changeCoordinates.emit({
      lat: event.latlng.lat.toString(),
      long: event.latlng.lng.toString(),
    });

    this.coords = {
      lat: event.latlng.lat.toString(),
      long: event.latlng.lng.toString(),
    };

    this.initMarker();
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.initMarker();
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
