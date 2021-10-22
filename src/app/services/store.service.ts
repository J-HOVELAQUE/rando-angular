import { Injectable } from '@angular/core';
import { IRecordedHike } from '../models/hike';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  activeHike: IRecordedHike;

  constructor() {}
}
