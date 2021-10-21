import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRecordedHike } from '../models/hike';

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
}
