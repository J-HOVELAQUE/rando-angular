import {
  Component,
  OnInit,
  Output,
  OnDestroy,
  EventEmitter,
  Input,
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
  @Input() initialParticipants: IRecordedParticipant[] | undefined;
  @Output() changeSelectedParticipants = new EventEmitter();

  participants: FormControl;
  participantList: IRecordedParticipant[] = [];

  private _scavenger = new Scavenger(this);

  constructor(private _participantRepo: ParticipantRepoService) {}

  compareCategoryObjects(object1: any, object2: any) {
    return object1 && object2 && object1._id == object2._id;
  }

  onChangeSelectedParticipants(value: IRecordedParticipant[]) {
    this.changeSelectedParticipants.emit(value);
  }

  ngOnInit(): void {
    if (this.initialParticipants) {
      this.participants = new FormControl(this.initialParticipants);
    } else {
      this.participants = new FormControl([]);
    }

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

  ngOnChangeParticipant(): void {}

  ngOnDestroy(): void {}
}
