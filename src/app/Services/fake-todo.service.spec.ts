import { TestBed } from '@angular/core/testing';

import { FakeTodoService } from './fake-todo.service';

describe('FakeTodoService', () => {
  let service: FakeTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
