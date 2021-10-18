import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, Validator } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-place-modal',
  templateUrl: './create-place-modal.component.html',
  styleUrls: ['./create-place-modal.component.css'],
})
export class CreatePlaceModalComponent implements OnInit {
  @Input() events: Observable<void>;

  private eventsSubscription: Subscription;
  showModal = false;

  constructor(private _formBuilder: FormBuilder) {}

  createPlaceForm = this._formBuilder.group({
    name: ['', Validators.required],
    altitudeInMeter: ['', Validators.required],
    mountainLocation: ['', Validators.required],
    picture: [null],
  });

  onCloseModal() {
    this.showModal = false;
  }

  onSubmitNewPlace() {
    console.log('Submit', this.createPlaceForm.value);
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
