import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription, Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-validation-modal',
  templateUrl: './validation-modal.component.html',
  styleUrls: ['./validation-modal.component.css'],
})
export class ValidationModalComponent implements OnInit, OnDestroy {
  @Input() open: Observable<void>;
  @Input() message: string;

  @Output() validate = new EventEmitter<void>();

  showModal = false;
  private _eventSubscription: Subscription;

  constructor() {}

  onCloseModal() {
    this.showModal = false;
  }

  onValidate() {
    this.validate.emit();
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
