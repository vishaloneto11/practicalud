import { TestBed } from '@angular/core/testing';

import { SeoservicesService } from './seoservices.service';

describe('SeoservicesService', () => {
  let service: SeoservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
