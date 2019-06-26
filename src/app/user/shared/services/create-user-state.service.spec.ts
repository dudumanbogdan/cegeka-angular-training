import { TestBed } from '@angular/core/testing';

import { CreateUserStateService } from './create-user-state.service';

describe('CreateUserStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateUserStateService = TestBed.get(CreateUserStateService);
    expect(service).toBeTruthy();
  });
});
