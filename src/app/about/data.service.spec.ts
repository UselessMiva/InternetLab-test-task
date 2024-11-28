import { TestBed } from '@angular/core/testing';

import { DataAboutService } from './dataAbout.service';

describe('DataService', () => {
  let service: DataAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
