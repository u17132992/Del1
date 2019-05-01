import { TestBed } from '@angular/core/testing';

import { MalariaareaService } from './malariaarea.service';

describe('MalariaareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MalariaareaService = TestBed.get(MalariaareaService);
    expect(service).toBeTruthy();
  });
});
