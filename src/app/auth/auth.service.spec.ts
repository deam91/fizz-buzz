import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should login-logout facebook', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.loginFacebook).toBeTruthy();
    expect(service.logoutFacebook).toBeTruthy();
  })

});
