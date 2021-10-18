import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaceRepoService } from '../services/place-repo.service';

import { IRecordedPlace } from '../models/place';

import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
})
export class PlaceListComponent implements OnInit, OnDestroy {
  places: IRecordedPlace[] = [];
  isCreatingPlace = false;
  private _scavenger = new Scavenger(this);

  constructor(private _placeRepo: PlaceRepoService) {}

  onCreatePlace() {
    this.isCreatingPlace = true;
  }

  ngOnInit(): void {
    const request = this._placeRepo.getAllPlaces();
    request
      .pipe(this._scavenger.collectByKey('getAllPlaces'))
      .subscribe((answer) => {
        console.log(answer);
        this.places = answer.places;
      });
  }

  ngOnDestroy(): void {}
}
