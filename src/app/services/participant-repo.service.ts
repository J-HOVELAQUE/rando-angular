import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ParticipantRepoService {
  private _endpoint = `${environment.api_url}/user`;

  constructor(private _http: HttpClient) {}

  getAllParticipants() {
    return this._http.get(this._endpoint);
  }
}
