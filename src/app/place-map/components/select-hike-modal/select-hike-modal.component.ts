import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-select-hike-modal',
  templateUrl: './select-hike-modal.component.html',
  styleUrls: ['./select-hike-modal.component.css'],
})
export class SelectHikeModalComponent implements OnInit, OnDestroy {
  @Input() openFromParent: Observable<void>;

  isOpen = false;
  private _openFromParentSubscription: Subscription;

  constructor() {}

  onCloseModal() {
    this.isOpen = false;
  }

  ngOnInit(): void {
    this._openFromParentSubscription = this.openFromParent.subscribe(() => {
      this.isOpen = true;
      console.log('OPEN!!!!!', this.isOpen);
    });
  }

  ngOnDestroy(): void {
    this._openFromParentSubscription.unsubscribe();
  }
}
