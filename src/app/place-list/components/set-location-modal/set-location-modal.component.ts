import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { IRecordedPlace } from '../../../models/place';

@Component({
  selector: 'app-set-location-modal',
  templateUrl: './set-location-modal.component.html',
  styleUrls: ['./set-location-modal.component.css'],
})
export class SetLocationModalComponent implements OnInit, OnDestroy {
  @Input() openModalSwitcher: Observable<void>;
  @Input() place: IRecordedPlace;

  isOpen = false;
  private _openModalListener: Subscription;

  constructor() {}

  onClose() {
    this.isOpen = false;
  }

  ngOnInit(): void {
    this._openModalListener = this.openModalSwitcher.subscribe(() => {
      this.isOpen = true;
    });
  }

  ngOnDestroy(): void {
    this._openModalListener.unsubscribe();
  }
}
