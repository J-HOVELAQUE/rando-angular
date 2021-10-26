import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Observable, Subscription, Subject } from 'rxjs';
import { IRecordedPlace } from '../../../models/place';

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

  reinitMarker = new Subject<void>();

  isOpen = false;
  coords: ICoords = {
    lat: '0',
    long: '0',
  };

  private _openModalListener: Subscription;

  constructor() {}

  onClose() {
    this.isOpen = false;
  }

  onChangeCoordinates(coords: ICoords) {
    this.coords.lat = coords.lat;
    this.coords.long = coords.long;
  }

  ngOnInit(): void {
    this._openModalListener = this.openModalSwitcher.subscribe(() => {
      this.isOpen = true;
      this.reinitMarker.next();
    });
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.place && this.place) {
      if (this.place.location.coordinates.length === 0) {
        this.coords.lat = '0';
        this.coords.long = '0';
        return;
      }

      this.coords.lat = this.place.location.coordinates[0].toString();
      this.coords.long = this.place.location.coordinates[1].toString();
    }
  }

  ngOnDestroy(): void {
    this._openModalListener.unsubscribe();
  }
}
