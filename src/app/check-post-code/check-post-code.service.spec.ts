import { TestBed } from '@angular/core/testing';

import { CheckPostCodeService } from './check-post-code.service';

describe('CheckPostCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckPostCodeService = TestBed.get(CheckPostCodeService);
    expect(service).toBeTruthy();
  });
});
