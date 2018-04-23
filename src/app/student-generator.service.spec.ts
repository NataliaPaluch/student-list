import { TestBed, inject } from '@angular/core/testing';

import { StudentGeneratorService } from './student-generator.service';

describe('StudentGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentGeneratorService]
    });
  });

  it('should be created', inject([StudentGeneratorService], (service: StudentGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
