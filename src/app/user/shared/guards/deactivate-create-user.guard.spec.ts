import { TestBed, async, inject } from '@angular/core/testing';

import { DeactivateCreateUserGuard } from './deactivate-create-user.guard';

describe('DeactivateCreateUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateCreateUserGuard]
    });
  });

  it('should ...', inject([DeactivateCreateUserGuard], (guard: DeactivateCreateUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
