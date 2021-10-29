export interface IParticipantToCreate {
  name: string;
  firstname: string;
  email: string;
  dateOfBirth: Date;
}

export interface IRecordedParticipant extends IParticipantToCreate {
  _id: string;
}
