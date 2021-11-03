import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ParticipantRepoService } from 'src/app/services/participant-repo.service';
import { StoreService } from 'src/app/services/store.service';

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

  constructor(
    private _participantRepo: ParticipantRepoService,
    private _store: StoreService
  ) {}

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

  onLoadParticipantData(
    participantId: string,
    participantName: string,
    participantFirstname: string
  ) {
    const request = this._participantRepo.getParticipantData(participantId);
    request
      .pipe(this._scavenger.collectByKey('get-participant-data'))
      .subscribe(
        (response) => {
          this._store.participantData = {
            participantId: participantId,
            participantFirstname: participantFirstname,
            participantName: participantName,
            data: response.data,
          };
          this._store.changeParticipantData();
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
