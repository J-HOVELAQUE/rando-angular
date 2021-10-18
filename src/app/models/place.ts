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
