import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParticipantRepoService } from 'src/app/services/participant-repo.service';

import { Scavenger } from '@wishtack/rx-scavenger';
import { IRecordedParticipant } from 'src/app/models/participant';

@Component({
  selector: 'app-participants-menu',
  templateUrl: './participants-menu.component.html',
  styleUrls: ['./participants-menu.component.css'],
})
export class ParticipantsMenuComponent implements OnInit, OnDestroy {
  participants: IRecordedParticipant[];
  private _scavenger = new Scavenger(this);

  constructor(private _participantRepo: ParticipantRepoService) {}

  ngOnInit(): void {
    const request = this._participantRepo.getAllParticipants();
    request.pipe(this._scavenger.collectByKey('get-participants')).subscribe(
      (response) => {
        console.log(response);
        this.participants = response.places;
      },
      (error) => console.error(error)
    );
  }

  ngOnDestroy(): void {}
}
