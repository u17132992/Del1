import { TestBed } from '@angular/core/testing';

import { GeneralinformationService } from './generalinformation.service';

describe('GeneralinformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralinformationService = TestBed.get(GeneralinformationService);
    expect(service).toBeTruthy();
  });
});
