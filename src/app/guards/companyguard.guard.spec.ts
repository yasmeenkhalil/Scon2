import { TestBed } from '@angular/core/testing';

import { CompanyguardGuard } from './companyguard.guard';

describe('CompanyguardGuard', () => {
  let guard: CompanyguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompanyguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
