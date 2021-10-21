import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { Scavenger } from '@wishtack/rx-scavenger';
import { PlaceRepoService } from 'src/app/services/place-repo.service';
import { IRecordedPlace } from 'src/app/models/place';

@Component({
  selector: 'app-edit-place-modal',
  templateUrl: './edit-place-modal.component.html',
  styleUrls: ['./edit-place-modal.component.css'],
})
export class EditPlaceModalComponent implements OnInit {
  @Input() event: Observable<void>;
  @Input() place: IRecordedPlace;

  showModal = false;
  editPlaceForm: FormGroup;
  private _eventSubscription: Subscription;
  private _scavenger = new Scavenger(this);

  constructor(
    private _formBuilder: FormBuilder,
    private _placeRepo: PlaceRepoService
  ) {}

  onCloseModal() {
    this.showModal = false;
  }

  onEditPlace() {
    console.log(this.editPlaceForm.value);
    const request = this._placeRepo.editPlace(
      this.editPlaceForm.value,
      this.place._id
    );

    request.pipe(this._scavenger.collectByKey('edit-place')).subscribe(
      (answer) => {
        console.log('UPDATE', answer);
      },
      (error) => {
        console.log('Update fail', error);
      }
    );
  }

  ngOnInit(): void {
    this.editPlaceForm = this._formBuilder.group({
      name: [this.place.name],
      altitudeInMeters: [this.place.altitudeInMeters],
      mountainLocation: [this.place.mountainLocation],
    });

    this._eventSubscription = this.event.subscribe(() => {
      this.showModal = true;
    });
  }

  ngOnDestroy(): void {}
}
