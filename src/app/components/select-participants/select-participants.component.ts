import {
  Component,
  OnInit,
  Output,
  OnDestroy,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { ParticipantRepoService } from 'src/app/services/participant-repo.service';
import { IRecordedParticipant } from 'src/app/models/participant';

import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-select-participants',
  templateUrl: './select-participants.component.html',
  styleUrls: ['./select-participants.component.css'],
})
export class SelectParticipantsComponent implements OnInit, OnDestroy {
  @Output() changeSelectedParticipants = new EventEmitter();

  participants = new FormControl();
  participantList: IRecordedParticipant[] = [];

  private _scavenger = new Scavenger(this);

  constructor(private _participantRepo: ParticipantRepoService) {}

  onChangeSelectedParticipants(value: IRecordedParticipant[]) {
    this.changeSelectedParticipants.emit(value);
  }

  ngOnInit(): void {
    const request = this._participantRepo.getAllParticipants();

    request.pipe(this._scavenger.collectByKey('get-participants')).subscribe(
      (response) => {
        this.participantList = response.places;
      },
      (error) => {
        console.error('get participants failed', error);
      }
    );
  }

  ngOnDestroy(): void {}
}
