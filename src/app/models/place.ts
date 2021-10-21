interface Location {
  type: 'Point';
  coordinates: number[];
}

export interface IRecordedPlace {
  _id: string;
  name: string;
  mountainLocation: string;
  altitudeInMeters: number;
  picture?: string;
  location: Location;
}

export interface IPlaceToRecord {
  name: string;
  mountainLocation: string;
  altitudeInMeters: number;
  picture?: string;
}

export interface IPlaceToUpdate {
  name?: string;
  mountainLocation?: string;
  altitudeInMeters?: number;
  picture?: string;
}
