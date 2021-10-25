import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, polygon, circle, icon } from 'leaflet';

@Component({
  selector: 'app-map-place-location',
  templateUrl: './map-place-location.component.html',
  styleUrls: ['./map-place-location.component.css'],
})
export class MapPlaceLocationComponent implements OnInit {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
      circle([46.95, -122], { radius: 5000 }),
      polygon([
        [46.8, -121.85],
        [46.92, -121.92],
        [46.87, -121.8],
      ]),
      marker([46.879966, -121.726909], {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png',
        }),
      }),
    ],
    zoom: 7,
    center: latLng([46.879966, -121.726909]),
  };

  constructor() {}

  ngOnInit(): void {}
}
