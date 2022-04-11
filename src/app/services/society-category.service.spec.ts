import { TestBed } from '@angular/core/testing';

import { SocietyCategoryService } from './society-category.service';

describe('SocietyCategoryService', () => {
  let service: SocietyCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocietyCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
