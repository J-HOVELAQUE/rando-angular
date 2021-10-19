import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-change-picture-modal',
  templateUrl: './change-picture-modal.component.html',
  styleUrls: ['./change-picture-modal.component.css'],
})
export class ChangePictureModalComponent implements OnInit, OnDestroy {
  @Input() event: Observable<void>;

  showModal = false;
  private _selectedFile: File;
  private _eventSubscription: Subscription;

  constructor() {}

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
      this._selectedFile = file;
    }
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
