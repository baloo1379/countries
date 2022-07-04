import { TestBed } from '@angular/core/testing';

import { RegionGuard } from './region.service';

describe('RegionService', () => {
  let service: RegionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
