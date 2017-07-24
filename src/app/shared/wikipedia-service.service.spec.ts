import { TestBed, inject } from '@angular/core/testing';

import { WikipediaServiceService } from './wikipedia-service.service';

describe('WikipediaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikipediaServiceService]
    });
  });

  it('should be created', inject([WikipediaServiceService], (service: WikipediaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
