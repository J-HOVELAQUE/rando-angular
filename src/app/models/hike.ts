import { IRecordedPlace } from './place';
import { IRecordedParticipant } from './participant';

export interface IHikeToRecord {
  durationInMinutes: string;
  elevationInMeters: string;
  distanceInMeters: string;
  startingAltitude: string;
  arrivalAltitude: string;
  date: Date;
  place: IRecordedPlace;
  participants: IRecordedParticipant[];
  description?: string;
}

export interface IRecordedHike extends IHikeToRecord {
  _id: string;
}
