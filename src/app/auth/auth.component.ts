import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: SocialUser;
  private loggedIn: boolean;

  constructor(private service: AuthService, private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
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
    this.service.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  // pending app id
  loginLinkedin() {
    // this.service.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }

  signOut() {
    this.service.signOut();
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    // this.translate.reloadLang(lang);
  }
}
