import { TestBed } from '@angular/core/testing';

import { MsfdptosService } from './msfdptos.service';

describe('MsfdptosService', () => {
  let service: MsfdptosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsfdptosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
