import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import {
  IRecordedParticipant,
  IParticipantToCreate,
} from '../models/participant';

interface IGetParticipantsResponse {
  message: string;
  places: IRecordedParticipant[];
}

@Injectable({
  providedIn: 'root',
})
export class ParticipantRepoService {
  private _endpoint = `${environment.api_url}/user`;

  constructor(private _http: HttpClient) {}

  getAllParticipants() {
    return this._http.get<IGetParticipantsResponse>(this._endpoint);
  }

  createParticipant(newParticipant: IParticipantToCreate) {
    return this._http.post(this._endpoint, newParticipant);
  }

  getParticipantData(participantId: string) {
    return this._http.get(`${this._endpoint}/${participantId}/data`);
  }
}
