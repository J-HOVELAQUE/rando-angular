import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-place-modal',
  templateUrl: './create-place-modal.component.html',
  styleUrls: ['./create-place-modal.component.css'],
})
export class CreatePlaceModalComponent implements OnInit {
  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;

  showModal = false;

  constructor() {}

  onCloseModal() {
    this.showModal = false;
  }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => {
      this.showModal = true;
      console.log('TTTTTRRRIIIGGGEERRRR');
    });
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }
}
