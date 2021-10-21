import { IRecordedPlace } from './place';
import { IRecordedParticipant } from './participant';

export interface IRecordedHike {
  _id: string;
  durationInMinutes: string;
  elevationInMeters: string;
  distanceInMeters: string;
  startingAltitude: string;
  arrivalAltitude: string;
  date: Date;
  place: IRecordedPlace;
  participants: IRecordedParticipant[];
}
