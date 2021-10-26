import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  faTrash,
  faPen,
  faImage,
  faLocationArrow,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { Scavenger } from '@wishtack/rx-scavenger';

import { IRecordedPlace } from 'src/app/models/place';
import { PlaceRepoService } from 'src/app/services/place-repo.service';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css'],
})
export class PlaceCardComponent implements OnInit, OnDestroy {
  @Input() place: IRecordedPlace = {
    _id: 'N/A',
    name: 'N/A',
    mountainLocation: 'N/A',
    altitudeInMeters: 0,
    location: { type: 'Point', coordinates: [] },
  };
  @Input() refreshPlace: () => void;

  @Output() refreshFromChild = new EventEmitter<void>();
  @Output() createNewHike = new EventEmitter();
  @Output() setLocation = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;
  faImage = faImage;
  faLocationArrow = faLocationArrow;
  faEye = faEye;

  openEditPictureModal: Subject<void> = new Subject<void>();
  openEditPlaceModal: Subject<void> = new Subject<void>();
  openDeleteValidationModal: Subject<void> = new Subject<void>();
  private _scavenger = new Scavenger(this);

  constructor(private _placeRepo: PlaceRepoService) {}

  onChangePicture() {
    this.openEditPictureModal.next();
  }

  onEditPlace() {
    this.openEditPlaceModal.next();
  }

  onAskPlaceDeletion() {
    this.openDeleteValidationModal.next();
  }

  onCreateNewHike() {
    this.createNewHike.emit(this.place);
  }

  onChangeLocation() {
    this.setLocation.emit(this.place);
  }

  onDeletePlace() {
    const request = this._placeRepo.deletePlace(this.place._id);
    request.pipe(this._scavenger.collectByKey('delete-place')).subscribe(
      (response) => {
        this.refreshFromChild.emit();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    if (!this.place.picture) {
      this.place.picture = '../../../../assets/montain_default.jpg';
    }
  }

  ngOnDestroy(): void {}
}
