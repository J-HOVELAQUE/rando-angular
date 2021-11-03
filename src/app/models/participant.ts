export interface IParticipantToCreate {
  name: string;
  firstname: string;
  email: string;
  dateOfBirth: Date;
}

export interface IRecordedParticipant extends IParticipantToCreate {
  _id: string;
}

export interface IParticipantDataForAMonth {
  _id: {
    year: number;
    month: number;
  };
  nb_hike: number;
  total_dist: number;
  total_elev: number;
  total_time: number;
}

export interface IParticipantData {
  participantId: string | undefined;
  participantName: string | undefined;
  participantFirstname: string | undefined;
  data: IParticipantDataForAMonth[];
}
