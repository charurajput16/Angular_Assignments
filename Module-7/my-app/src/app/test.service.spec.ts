import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    service = new TestService();
  });

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });

  it('No Message', () => {
    expect(service.messages.length).toBe(0);
  });

  it('Add Message', () => {
    service.add('Add Message Working');
    expect(service.messages.length).toBe(1);
  });

  it('Clear Message', () => {
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
