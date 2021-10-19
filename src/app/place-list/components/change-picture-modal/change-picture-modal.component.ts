import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { PlaceRepoService } from 'src/app/services/place-repo.service';
import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-change-picture-modal',
  templateUrl: './change-picture-modal.component.html',
  styleUrls: ['./change-picture-modal.component.css'],
})
export class ChangePictureModalComponent implements OnInit, OnDestroy {
  @Input() event: Observable<void>;
  @Input() placeId: string;
  @Input() placeName: string;

  showModal = false;
  isLoading = false;
  selectedFile: File;
  private _eventSubscription: Subscription;
  private _scavenger = new Scavenger(this);

  constructor(private _placeRepo: PlaceRepoService) {}

  onCloseModal() {
    this.showModal = false;
  }

  onFileSelected(event: Event) {
    if (
      !event.target ||
      !(event.target instanceof HTMLInputElement) ||
      !event.target.files
    ) {
      return;
    }

    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;
    }
  }

  onSendPicture() {
    this.isLoading = true;

    const request = this._placeRepo.changePicture(
      this.selectedFile,
      this.placeId
    );
    request.pipe(this._scavenger.collectByKey('change-picture')).subscribe(
      (answer) => {
        console.log(answer);
        this.isLoading = false;
        this.onCloseModal();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._eventSubscription = this.event.subscribe(() => {
      this.showModal = true;
    });
  }

  ngOnDestroy(): void {
    this._eventSubscription.unsubscribe();
  }
}
