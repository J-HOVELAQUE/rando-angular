import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { IRecordedParticipant } from 'src/app/models/participant';
import { IRecordedHike } from 'src/app/models/hike';

import { StoreService } from 'src/app/services/store.service';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-hike-modal',
  templateUrl: './edit-hike-modal.component.html',
  styleUrls: ['./edit-hike-modal.component.css'],
})
export class EditHikeModalComponent implements OnInit, OnDestroy {
  @Input() openModalSwitcher: Observable<void>;

  isOpen = false;
  private _openModalSwitcherListener: Subscription;

  constructor(private _formBuilder: FormBuilder, public store: StoreService) {}

  participants: IRecordedParticipant[];
  editHikeForm = this._formBuilder.group({
    date: [this.store.activeHike?.date],
    durationInMinutes: [this.store.activeHike?.durationInMinutes],
    elevationInMeters: [this.store.activeHike?.elevationInMeters],
    distanceInMeters: [this.store.activeHike?.distanceInMeters],
    startingAltitude: [this.store.activeHike?.startingAltitude],
    arrivalAltitude: [this.store.activeHike?.arrivalAltitude],
    description: [this.store.activeHike?.description],
  });

  onCloseModal() {
    this.isOpen = false;
    this.store.activeHike.place.name;
  }

  onEditNewHike() {
    console.log(this.editHikeForm.value);
  }

  ngOnInit(): void {
    this._openModalSwitcherListener = this.openModalSwitcher.subscribe(() => {
      this.isOpen = true;
    });
  }

  ngOnDestroy(): void {
    this._openModalSwitcherListener.unsubscribe();
  }
}
