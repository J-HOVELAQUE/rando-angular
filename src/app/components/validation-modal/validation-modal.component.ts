import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-validation-modal',
  templateUrl: './validation-modal.component.html',
  styleUrls: ['./validation-modal.component.css'],
})
export class ValidationModalComponent implements OnInit, OnDestroy {
  @Input() open: Observable<void>;
  @Input() message: string;

  showModal = false;
  private _eventSubscription: Subscription;

  constructor() {}

  onCloseModal() {
    this.showModal = false;
  }

  ngOnInit(): void {
    this._eventSubscription = this.open.subscribe(() => {
      this.showModal = true;
    });
  }

  ngOnDestroy(): void {
    this._eventSubscription.unsubscribe();
  }
}
