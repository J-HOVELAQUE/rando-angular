import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faTrash,
  faPen,
  faImage,
  faLocationArrow,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';

import { IRecordedPlace } from 'src/app/models/place';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css'],
})
export class PlaceCardComponent implements OnInit {
  @Input() place: IRecordedPlace = {
    _id: 'N/A',
    name: 'N/A',
    mountainLocation: 'N/A',
    altitudeInMeters: 0,
    location: { type: 'Point', coordinates: [] },
  };
  @Input() refreshPlace: () => void;

  @Output() refreshFromChild = new EventEmitter<void>();

  faPen = faPen;
  faTrash = faTrash;
  faImage = faImage;
  faLocationArrow = faLocationArrow;
  faEye = faEye;

  openEditPictureModal: Subject<void> = new Subject<void>();
  openEditPlaceModal: Subject<void> = new Subject<void>();
  openDeleteValidationModal: Subject<void> = new Subject<void>();

  constructor() {}

  onChangePicture() {
    this.openEditPictureModal.next();
  }

  onEditPlace() {
    this.openEditPlaceModal.next();
  }

  onAskPlaceDeletion() {
    this.openDeleteValidationModal.next();
  }

  ngOnInit(): void {
    if (!this.place.picture) {
      this.place.picture = '../../../../assets/montain_default.jpg';
    }
  }
}
