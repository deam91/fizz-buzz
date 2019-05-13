import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login facebook', () => {
    expect(component.loginFacebook).toBeTruthy();
  })

  it('should login linkedin', () => {
    expect(component.loginLinkedin).toBeTruthy();
  })

  it('should login google', () => {
    expect(component.loginGoogle).toBeTruthy();
  })

  it('should signout', () => {
    expect(component.signOut).toBeTruthy();
  })
});