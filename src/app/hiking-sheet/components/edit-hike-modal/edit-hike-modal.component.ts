import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { IRecordedParticipant } from 'src/app/models/participant';
import { IRecordedHike } from 'src/app/models/hike';

import { StoreService } from 'src/app/services/store.service';
import { HikeRepoService } from 'src/app/services/hike-repo.service';

import { Observable, Subscription } from 'rxjs';

import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-edit-hike-modal',
  templateUrl: './edit-hike-modal.component.html',
  styleUrls: ['./edit-hike-modal.component.css'],
})
export class EditHikeModalComponent implements OnInit, OnDestroy {
  @Input() openModalSwitcher: Observable<void>;

  isOpen = false;
  private _openModalSwitcherListener: Subscription;
  private _scavenger = new Scavenger(this);

  constructor(
    private _formBuilder: FormBuilder,
    public store: StoreService,
    private _hikeRepo: HikeRepoService
  ) {}

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
    const request = this._hikeRepo.updateHike(
      this.editHikeForm.value,
      this.store.activeHike._id
    );
    request.pipe(this._scavenger.collectByKey('update-hike')).subscribe(
      (response) => {
        console.log(response);
        this.store.activeHike = {
          ...this.store.activeHike,
          ...this.editHikeForm.value,
        };
        this.onCloseModal();
      },
      (error) => console.error(error)
    );
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
