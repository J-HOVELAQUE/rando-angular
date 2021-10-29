import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { ParticipantRepoService } from 'src/app/services/participant-repo.service';
import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-create-participant-modal',
  templateUrl: './create-participant-modal.component.html',
  styleUrls: ['./create-participant-modal.component.css'],
})
export class CreateParticipantModalComponent implements OnInit, OnDestroy {
  @Input() openSwitcher: Observable<void>;

  @Output() refreshParticipants = new EventEmitter<void>();

  private _openSwitcherListener: Subscription;
  private _scavenger = new Scavenger(this);
  isOpen = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _participantRepo: ParticipantRepoService
  ) {}

  createParticipantForm = this._formBuilder.group({
    dateOfBirth: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    firstname: ['', Validators.required],
    name: ['', Validators.required],
  });

  onCloseModal() {
    this.isOpen = false;
    this.refreshParticipants.emit();
  }

  onSubmitNewParticipant() {
    const request = this._participantRepo.createParticipant(
      this.createParticipantForm.value
    );

    request.pipe(this._scavenger.collectByKey('record-participant')).subscribe(
      () => this.onCloseModal(),
      (error) => console.error(error)
    );
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
