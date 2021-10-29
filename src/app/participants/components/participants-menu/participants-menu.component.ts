import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ParticipantRepoService } from 'src/app/services/participant-repo.service';

import { Scavenger } from '@wishtack/rx-scavenger';
import { IRecordedParticipant } from 'src/app/models/participant';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-participants-menu',
  templateUrl: './participants-menu.component.html',
  styleUrls: ['./participants-menu.component.css'],
})
export class ParticipantsMenuComponent implements OnInit, OnDestroy {
  @Input() refreshParticipantSwitch: Observable<void>;

  participants: IRecordedParticipant[];
  private _scavenger = new Scavenger(this);
  private _refreshParticipantSwitchListener: Subscription;

  constructor(private _participantRepo: ParticipantRepoService) {}

  onRefreshParticipantList() {
    const request = this._participantRepo.getAllParticipants();
    request.pipe(this._scavenger.collectByKey('get-participants')).subscribe(
      (response) => {
        console.log(response);
        this.participants = response.places;
      },
      (error) => console.error(error)
    );
  }

  ngOnInit(): void {
    this.onRefreshParticipantList();
    this._refreshParticipantSwitchListener =
      this.refreshParticipantSwitch.subscribe(() => {
        this.onRefreshParticipantList();
      });
  }

  ngOnDestroy(): void {
    this._refreshParticipantSwitchListener.unsubscribe();
  }
}
