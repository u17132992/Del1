import { TestBed } from '@angular/core/testing';

import { FrequentlyaskedquestionService } from './frequentlyaskedquestion.service';

describe('FrequentlyaskedquestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrequentlyaskedquestionService = TestBed.get(FrequentlyaskedquestionService);
    expect(service).toBeTruthy();
  });
});
