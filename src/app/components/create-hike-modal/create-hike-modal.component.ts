import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { IRecordedPlace } from 'src/app/models/place';
import { IRecordedParticipant } from 'src/app/models/participant';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-hike-modal',
  templateUrl: './create-hike-modal.component.html',
  styleUrls: ['./create-hike-modal.component.css'],
})
export class CreateHikeModalComponent implements OnInit, OnDestroy {
  @Input() openModal: Observable<void>;
  @Input() placeWhereCreateNewHike: IRecordedPlace;

  isOpen = false;
  selectedParticipants: IRecordedParticipant[] = [];
  private _openModalSubscription: Subscription;

  constructor(private _formBuilder: FormBuilder) {}

  newHikeForm = this._formBuilder.group({
    date: [''],
    durationInMinutes: [''],
    elevationInMeters: [''],
    distanceInMeters: [''],
    startingAltitude: [''],
    arrivalAltitude: [''],
    description: [''],
  });

  onCloseModal() {
    this.isOpen = false;
  }

  onChangeSelectedParticipants(participants: IRecordedParticipant[]) {
    this.selectedParticipants = participants;
  }

  onSubmitNewHike() {
    const participants: string[] = this.selectedParticipants.map(
      (part) => part._id
    );
    const newHike = {
      ...this.newHikeForm.value,
      place: this.placeWhereCreateNewHike._id,
      participants: participants,
    };
    console.log('CREATE HIKE', newHike);
  }

  ngOnInit(): void {
    this._openModalSubscription = this.openModal.subscribe(() => {
      this.isOpen = true;
    });
  }

  ngOnDestroy(): void {
    this._openModalSubscription.unsubscribe();
  }
}
