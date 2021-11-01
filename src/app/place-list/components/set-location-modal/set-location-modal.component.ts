import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

import { Observable, Subscription, Subject } from 'rxjs';
import { IRecordedPlace } from '../../../models/place';
import { PlaceRepoService } from '../../../services/place-repo.service';
import { Scavenger } from '@wishtack/rx-scavenger';

interface ICoords {
  lat: string;
  long: string;
}

@Component({
  selector: 'app-set-location-modal',
  templateUrl: './set-location-modal.component.html',
  styleUrls: ['./set-location-modal.component.css'],
})
export class SetLocationModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() openModalSwitcher: Observable<void>;
  @Input() place: IRecordedPlace;

  @Output() refreshPlaces = new EventEmitter<void>();

  reinitMarker = new Subject<void>();

  isOpen = false;
  coords: ICoords | undefined = undefined;

  private _openModalListener: Subscription;
  private _scavenger = new Scavenger(this);

  constructor(private _placeRepo: PlaceRepoService) {}

  onClose() {
    this.refreshPlaces.emit();
    this.isOpen = false;
    this.coords = undefined;
  }

  onSubmitNewCoordinates() {
    if (!this.coords) {
      return;
    }

    const request = this._placeRepo.setPlaceLocation(
      this.coords,
      this.place._id
    );

    request.pipe(this._scavenger.collectByKey('set-location')).subscribe(
      (response) => {
        console.log(response);
        this.onClose();
      },
      (error) => console.log(error)
    );
  }

  onChangeCoordinates(coords: ICoords) {
    this.coords = {
      lat: coords.lat,
      long: coords.long,
    };
  }

  ngOnInit(): void {
    this._openModalListener = this.openModalSwitcher.subscribe(() => {
      this.isOpen = true;
      this.reinitMarker.next();
    });
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.place && this.place) {
      // if (this.place.location.coordinates.length === 0) {
      //   this.coords.lat = '0';
      //   this.coords.long = '0';
      //   return;
      // }

      if (this.place.location.coordinates.length === 2) {
        this.coords = {
          lat: this.place.location.coordinates[0].toString(),
          long: this.place.location.coordinates[1].toString(),
        };
      }
    }
  }

  ngOnDestroy(): void {
    this._openModalListener.unsubscribe();
  }
}
