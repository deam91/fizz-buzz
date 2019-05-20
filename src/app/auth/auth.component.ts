import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  LinkedInLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private service: AuthService) {
  }

  ngOnInit() {
    this.service.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  loginFacebook() {
    this.service.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  // pending app id
  loginGoogle() {
    // this.service.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }

  // pending app id
  loginLinkedin() {
    // this.service.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut() {
    this.service.signOut();
  }
}
