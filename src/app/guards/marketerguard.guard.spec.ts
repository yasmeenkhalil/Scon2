import { TestBed } from '@angular/core/testing';

import { MarketerguardGuard } from './marketerguard.guard';

describe('MarketerguardGuard', () => {
  let guard: MarketerguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MarketerguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
