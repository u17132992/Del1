import { TestBed } from '@angular/core/testing';

import { PreventionService } from './prevention.service';

describe('PreventionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreventionService = TestBed.get(PreventionService);
    expect(service).toBeTruthy();
  });
});
