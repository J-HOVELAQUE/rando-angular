import { Injectable } from '@angular/core';
import { IRecordedHike } from '../models/hike';
import { IParticipantData } from '../models/participant';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  activeHike: IRecordedHike;
  participantData: IParticipantData;

  constructor() {}
}
