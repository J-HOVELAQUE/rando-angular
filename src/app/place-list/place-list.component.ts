import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { PlaceRepoService } from '../services/place-repo.service';

import { IRecordedPlace } from '../models/place';

import { Scavenger } from '@wishtack/rx-scavenger';

import { Subject } from 'rxjs';

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
  placeWhereCreateNewHike: IRecordedPlace;

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

  onCreatePlace() {
    this.createNewPlace.next();
  }

  onCreateHike(place: IRecordedPlace) {
    this.placeWhereCreateNewHike = place;
    this.createNewHike.next();
  }

  ngOnInit(): void {
    this.refreshPlaces();
  }

  ngOnChanges(): void {
    this.refreshPlaces();
  }

  ngOnDestroy(): void {}
}
