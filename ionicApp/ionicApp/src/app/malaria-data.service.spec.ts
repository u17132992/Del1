import { TestBed } from '@angular/core/testing';

import { MalariaDataService } from './malaria-data.service';

describe('MalariaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MalariaDataService = TestBed.get(MalariaDataService);
    expect(service).toBeTruthy();
  });
});
