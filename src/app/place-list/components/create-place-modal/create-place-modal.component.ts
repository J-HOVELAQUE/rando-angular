import {
  Component,
  OnInit,
  Input,
  Output,
  OnDestroy,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators, Validator } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { PlaceRepoService } from 'src/app/services/place-repo.service';
import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-create-place-modal',
  templateUrl: './create-place-modal.component.html',
  styleUrls: ['./create-place-modal.component.css'],
})
export class CreatePlaceModalComponent implements OnInit {
  @Input() events: Observable<void>;

  @Output() refreshFromChild = new EventEmitter<void>();

  private eventsSubscription: Subscription;
  private _scavenger = new Scavenger(this);
  private _isRecordingPlace = false;

  public errorMessage = '';

  showModal = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _placeRepo: PlaceRepoService
  ) {}

  createPlaceForm = this._formBuilder.group({
    name: ['', Validators.required],
    altitudeInMeters: ['', Validators.required],
    mountainLocation: ['', Validators.required],
    picture: [null],
  });

  onCloseModal() {
    this.showModal = false;
    this.createPlaceForm.reset();
    this.refreshFromChild.emit();
  }

  onSubmitNewPlace() {
    this._isRecordingPlace = true;

    const newPlace = {
      name: this.createPlaceForm.value.name,
      altitudeInMeters: this.createPlaceForm.value.altitudeInMeters,
      mountainLocation: this.createPlaceForm.value.mountainLocation,
    };

    const request = this._placeRepo.createPlace(newPlace);
    request.pipe(this._scavenger.collectByKey('record-place')).subscribe(
      (response) => {
        console.log(response);
        this._isRecordingPlace = false;
        this.createPlaceForm.reset();
        this.onCloseModal();
      },
      (error) => {
        console.error('ERROR CAUGHT IN COMPONENT', error);
      }
    );
  }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => {
      this.showModal = true;
    });
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }
}
