import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-participant-modal',
  templateUrl: './create-participant-modal.component.html',
  styleUrls: ['./create-participant-modal.component.css'],
})
export class CreateParticipantModalComponent implements OnInit, OnDestroy {
  @Input() openSwitcher: Observable<void>;

  private _openSwitcherListener: Subscription;
  isOpen = false;

  constructor(private _formBuilder: FormBuilder) {}

  createParticipantForm = this._formBuilder.group({
    dateOfBirth: [''],
    email: [''],
    firstname: [''],
    name: [''],
  });

  onCloseModal() {
    this.isOpen = false;
  }

  onSubmitNewParticipant() {
    console.log('CREATE', this.createParticipantForm.value);
  }

  ngOnInit(): void {
    this._openSwitcherListener = this.openSwitcher.subscribe(() => {
      this.isOpen = true;
    });
  }

  ngOnDestroy(): void {
    this._openSwitcherListener.unsubscribe();
  }
}
