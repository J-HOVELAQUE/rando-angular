import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  IRecordedPlace,
  IPlaceToRecord,
  IPlaceToUpdate,
} from '../models/place';
import { environment } from '../../environments/environment';

interface IGetAllPlacesAnswer {
  message: string;
  places: IRecordedPlace[];
}

interface ICoordinates {
  lat: string;
  long: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlaceRepoService {
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

  public editPlace(placeData: IPlaceToUpdate, placeId: string) {
    return this.http.put(`${this._urlApi}/${placeId}`, placeData);
  }

  public deletePlace(placeId: string) {
    return this.http.delete(`${this._urlApi}/${placeId}`);
  }

  public setPlaceLocation(coords: ICoordinates, placeId: string) {
    return this.http.put(`${this._urlApi}/${placeId}/location`, coords);
  }
}
