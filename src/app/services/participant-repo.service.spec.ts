import { TestBed } from '@angular/core/testing';

import { ParticipantRepoService } from './participant-repo.service';

describe('ParticipantRepoService', () => {
  let service: ParticipantRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
