import { TestBed } from '@angular/core/testing';

import { TvListingsService } from './tv-listings.service';

describe('TvListingsService', () => {
  let service: TvListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
