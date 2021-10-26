import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { latLng, tileLayer, marker, icon, Map } from 'leaflet';
import { PlaceRepoService } from 'src/app/services/place-repo.service';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Subject } from 'rxjs';
import { IRecordedPlace } from 'src/app/models/place';

@Component({
  selector: 'app-map-place-location',
  templateUrl: './map-place-location.component.html',
  styleUrls: ['./map-place-location.component.css'],
})
export class MapPlaceLocationComponent implements OnInit, OnDestroy {
  map: Map;
  openSelectHikeModal = new Subject<void>();
  showMap = 'block';
  selectedPlace: IRecordedPlace;
  private _scavenger = new Scavenger(this);

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

  constructor(private _plaveRepo: PlaceRepoService, private _zone: NgZone) {}

  initMarker(places: IRecordedPlace[]) {
    places.forEach((place) => {
      if (place.location.coordinates.length === 2) {
        marker(
          [place.location.coordinates[0], place.location.coordinates[1]],
          this.markerIcon
        )
          .addTo(this.map)
          .addEventListener('click', () => this.onSelectPlace(place))
          .bindTooltip(place.name);
      }
    });
  }

  onSelectPlace(place: IRecordedPlace) {
    this._zone.run(() => {
      this.selectedPlace = place;
      this.openSelectHikeModal.next();
    });
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }

  ngOnInit(): void {
    const request = this._plaveRepo.getAllPlaces();
    request.pipe(this._scavenger.collectByKey('get-places')).subscribe(
      (response) => {
        console.log(response);
        this.initMarker(response.places);
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {}
}
