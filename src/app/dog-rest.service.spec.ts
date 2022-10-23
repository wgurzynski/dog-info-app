import { TestBed } from '@angular/core/testing';

import { DogRestService } from './dog-rest.service';

describe('DogRestService', () => {
  let service: DogRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
