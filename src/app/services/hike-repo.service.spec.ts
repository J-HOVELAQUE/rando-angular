import { TestBed } from '@angular/core/testing';

import { HikeRepoService } from './hike-repo.service';

describe('HikeRepoService', () => {
  let service: HikeRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HikeRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
