import { TestBed } from '@angular/core/testing';
import { LogoService } from './logo.service';

describe('LogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogoService = TestBed.inject(LogoService);
    expect(service).toBeTruthy();
  });
});
