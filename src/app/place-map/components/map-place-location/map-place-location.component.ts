import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, polygon, circle, icon, Map } from 'leaflet';

@Component({
  selector: 'app-map-place-location',
  templateUrl: './map-place-location.component.html',
  styleUrls: ['./map-place-location.component.css'],
})
export class MapPlaceLocationComponent implements OnInit {
  map: Map;

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
    zoom: 7,
    center: latLng([46.132, 6.592]),
  };

  constructor() {}

  initMarker() {
    marker([46.132, 6.592], this.markerIcon)
      .addTo(this.map)
      .addEventListener('click', () => {
        console.log('CLICK');
      })
      .bindTooltip('TEST');
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.initMarker();
  }

  ngOnInit(): void {}
}
