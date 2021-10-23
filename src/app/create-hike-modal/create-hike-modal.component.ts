import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-hike-modal',
  templateUrl: './create-hike-modal.component.html',
  styleUrls: ['./create-hike-modal.component.css'],
})
export class CreateHikeModalComponent implements OnInit, OnDestroy {
  @Input() openModal: Observable<void>;

  isOpen = false;
  private _openModalSubscription: Subscription;

  constructor() {}

  onCloseModal() {
    this.isOpen = false;
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
