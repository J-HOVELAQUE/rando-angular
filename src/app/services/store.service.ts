import { Injectable } from '@angular/core';
import { IRecordedHike } from '../models/hike';
import { IParticipantData } from '../models/participant';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  activeHike: IRecordedHike;
  participantData: IParticipantData = {
    participantId: undefined,
    participantName: undefined,
    participantFirstname: undefined,
    data: [],
  };

  private _changeParticipant = new BehaviorSubject(this.participantData);
  participantAsChanged = this._changeParticipant.asObservable();
  constructor() {}

  changeParticipantData() {
    this._changeParticipant.next(this.participantData);
  }
}
