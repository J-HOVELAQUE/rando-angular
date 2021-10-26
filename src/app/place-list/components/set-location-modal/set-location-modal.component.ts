import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { IRecordedPlace } from '../../../models/place';

@Component({
  selector: 'app-set-location-modal',
  templateUrl: './set-location-modal.component.html',
  styleUrls: ['./set-location-modal.component.css'],
})
export class SetLocationModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() openModalSwitcher: Observable<void>;
  @Input() place: IRecordedPlace;

  isOpen = false;
  coordForm = this._formBuilder.group({
    lat: [''],
    long: [''],
  });

  private _openModalListener: Subscription;

  constructor(private _formBuilder: FormBuilder) {}

  onClose() {
    this.isOpen = false;
  }

  onChangeCoordinates(coords: any) {
    console.log('CHANGE', coords);
  }

  ngOnInit(): void {
    this._openModalListener = this.openModalSwitcher.subscribe(() => {
      this.isOpen = true;
    });
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.place && this.place.location.coordinates.length === 2) {
      this.coordForm.setValue({
        lat: this.place.location.coordinates[0],
        long: this.place.location.coordinates[1],
      });
      return;
    }
    this.coordForm.setValue({
      lat: '0',
      long: '0',
    });
  }

  ngOnDestroy(): void {
    this._openModalListener.unsubscribe();
  }
}
