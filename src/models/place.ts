interface Location {
  type: 'Point';
  coordinates: number[];
}

export interface Place {
  _id: number;
  name: string;
  mountainLocation: string;
  altitudeInMeters: number;
  picture?: string;
  location: Location;
}
