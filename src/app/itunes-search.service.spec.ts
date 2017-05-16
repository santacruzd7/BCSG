import { TestBed, inject } from '@angular/core/testing';

import { ItunesSearchService } from './itunes-search.service';

describe('ItunesSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItunesSearchService]
    });
  });

  it('should ...', inject([ItunesSearchService], (service: ItunesSearchService) => {
    expect(service).toBeTruthy();
  }));
});
