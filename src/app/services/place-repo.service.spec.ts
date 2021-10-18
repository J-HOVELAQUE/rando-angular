import { TestBed } from '@angular/core/testing';

import { PlaceRepoService } from './place-repo.service';

describe('PlaceRepoService', () => {
  let service: PlaceRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
