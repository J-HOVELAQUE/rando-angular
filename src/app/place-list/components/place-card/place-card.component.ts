import { Component, OnInit, Input } from '@angular/core';
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

  faPen = faPen;
  faTrash = faTrash;
  faImage = faImage;
  faLocationArrow = faLocationArrow;
  faEye = faEye;

  eventsSubject: Subject<void> = new Subject<void>();

  constructor() {}

  onChangePicture() {
    this.eventsSubject.next();
  }

  ngOnInit(): void {
    if (!this.place.picture) {
      this.place.picture = '../../../../assets/montain_default.jpg';
    }
  }
}
