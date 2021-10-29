import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRecordedHike, IHikeToRecord } from '../models/hike';

import { environment } from 'src/environments/environment';

interface IGetByPlaceAnswer {
  message: string;
  hikes: IRecordedHike[];
}

@Injectable({
  providedIn: 'root',
})
export class HikeRepoService {
  private _urlApi = `${environment.api_url}/hike`;

  constructor(private http: HttpClient) {}

  public getHikeByPlace(placeId: string) {
    return this.http.get<IGetByPlaceAnswer>(
      `${this._urlApi}/byPlace/${placeId}`
    );
  }

  public createHike(newHike: IHikeToRecord) {
    return this.http.post(this._urlApi, newHike);
  }

  public updateHike(hikeData: IHikeToRecord, hikeId: string) {
    return this.http.put(`${this._urlApi}/${hikeId}`, hikeData);
  }
}
