/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndicesService } from './indices.service';

describe('Service: Indices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicesService]
    });
  });

  it('should ...', inject([IndicesService], (service: IndicesService) => {
    expect(service).toBeTruthy();
  }));
});
