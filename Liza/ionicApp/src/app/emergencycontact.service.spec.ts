import { TestBed } from '@angular/core/testing';

import { EmergencycontactService } from './emergencycontact.service';

describe('EmergencycontactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmergencycontactService = TestBed.get(EmergencycontactService);
    expect(service).toBeTruthy();
  });
});
