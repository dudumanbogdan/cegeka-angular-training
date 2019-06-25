import { TestBed, async, inject } from '@angular/core/testing';

import { UserResolverGuard } from './user-resolver-guard.service';

describe('UserResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserResolverGuard]
    });
  });

  it('should ...', inject([UserResolverGuard], (guard: UserResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
