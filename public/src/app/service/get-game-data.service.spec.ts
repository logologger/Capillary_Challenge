/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetGameDataService } from './get-game-data.service';

describe('GetGameDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGameDataService]
    });
  });

  it('should ...', inject([GetGameDataService], (service: GetGameDataService) => {
    expect(service).toBeTruthy();
  }));
});
