import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-edit-place-modal',
  templateUrl: './edit-place-modal.component.html',
  styleUrls: ['./edit-place-modal.component.css'],
})
export class EditPlaceModalComponent implements OnInit {
  @Input() event: Observable<void>;
  @Input() placeId: string;
  @Input() placeName: string;

  showModal = false;
  private _eventSubscription: Subscription;
  private _scavenger = new Scavenger(this);

  constructor(private _formBuilder: FormBuilder) {}

  editPlaceForm = this._formBuilder.group({
    name: [''],
    altitudeInMeters: [''],
    mountainLocation: [''],
  });

  onCloseModal() {
    this.showModal = false;
  }

  onEditPlace() {
    console.log(this.editPlaceForm.value);
  }

  ngOnInit(): void {
    this._eventSubscription = this.event.subscribe(() => {
      this.showModal = true;
    });
  }

  ngOnDestroy(): void {}
}
