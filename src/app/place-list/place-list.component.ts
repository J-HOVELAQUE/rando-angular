import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { PlaceRepoService } from '../services/place-repo.service';
import { IRecordedPlace } from '../models/place';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Subject } from 'rxjs';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
})
export class PlaceListComponent implements OnInit, OnDestroy, OnChanges {
  places: IRecordedPlace[] = [];
  private _scavenger = new Scavenger(this);

  createNewPlace = new Subject<void>();
  createNewHike = new Subject<void>();
  setLocation = new Subject<void>();
  clickedPlace: IRecordedPlace;

  researchForm = new FormGroup({
    researchName: new FormControl(['']),
  });

  constructor(private _placeRepo: PlaceRepoService) {}

  refreshPlaces() {
    const request = this._placeRepo.getAllPlaces();
    request
      .pipe(this._scavenger.collectByKey('getAllPlaces'))
      .subscribe((answer) => {
        console.log(answer);
        this.places = answer.places;
      });
  }

  onSortPlacesByName() {
    function compareByName(a: IRecordedPlace, b: IRecordedPlace) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    this.places.sort(compareByName);
  }

  onSortPlacesByAltitude() {
    function compareByAltitude(a: IRecordedPlace, b: IRecordedPlace) {
      if (a.altitudeInMeters < b.altitudeInMeters) return -1;
      if (a.altitudeInMeters > b.altitudeInMeters) return 1;
      return 0;
    }
    this.places.sort(compareByAltitude);
  }

  onCreatePlace() {
    this.createNewPlace.next();
  }

  onCreateHike(place: IRecordedPlace) {
    this.clickedPlace = place;
    this.createNewHike.next();
  }

  onSetLocation(place: IRecordedPlace) {
    this.clickedPlace = place;
    this.setLocation.next();
  }

  onSearchByName() {
    if (
      !this.researchForm.value.researchName ||
      this.researchForm.value.researchName === ''
    ) {
      this.refreshPlaces();
      return;
    }
    const regex = new RegExp(this.researchForm.value.researchName, 'gi');
    this.places = this.places.filter((place) => place.name.match(regex));
  }

  ngOnInit(): void {
    this.refreshPlaces();
  }

  ngOnChanges(): void {
    this.refreshPlaces();
  }

  ngOnDestroy(): void {}
}
