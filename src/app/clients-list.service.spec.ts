import { TestBed } from '@angular/core/testing';

import { ClientsListService } from './clients-list.service';

describe('ClientsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientsListService = TestBed.get(ClientsListService);
    expect(service).toBeTruthy();
  });
});
