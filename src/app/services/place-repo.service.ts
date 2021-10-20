import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRecordedPlace, IPlaceToRecord } from '../models/place';
import { environment } from '../../environments/environment.prod';

interface IGetAllPlacesAnswer {
  message: string;
  places: IRecordedPlace[];
}

@Injectable({
  providedIn: 'root',
})
export class PlaceRepoService {
  // private _urlApi = 'http://localhost:3000/place';
  private _urlApi = `${environment.api_url}/place`;

  constructor(private http: HttpClient) {}

  public getAllPlaces() {
    console.log('API_URL', this._urlApi);

    return this.http.get<IGetAllPlacesAnswer>(this._urlApi);
  }

  public createPlace(place: IPlaceToRecord) {
    return this.http.post(this._urlApi, place);
  }

  public changePicture(picture: File, placeId: string) {
    const formData = new FormData();
    formData.append('placePicture', picture);

    return this.http.put(`${this._urlApi}/${placeId}/picture`, formData);
  }
}
