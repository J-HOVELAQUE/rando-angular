import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRecordedPlace, IPlaceToRecord } from '../models/place';

interface IGetAllPlacesAnswer {
  message: string;
  places: IRecordedPlace[];
}

@Injectable({
  providedIn: 'root',
})
export class PlaceRepoService {
  private _urlApi = 'http://localhost:3000/place';

  constructor(private http: HttpClient) {}

  public getAllPlaces() {
    return this.http.get<IGetAllPlacesAnswer>(this._urlApi);
  }

  public createPlace(place: IPlaceToRecord) {
    return this.http.post(this._urlApi, place);
  }
}
