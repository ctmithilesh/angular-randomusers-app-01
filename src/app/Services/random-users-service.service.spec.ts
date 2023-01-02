import { TestBed } from '@angular/core/testing';

import { RandomUsersServiceService } from './random-users-service.service';

describe('RandomUsersServiceService', () => {
  let service: RandomUsersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUsersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
