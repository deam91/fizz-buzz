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

  private user: SocialUser;
  private loggedIn: boolean;
  private button: { loginFacebook: string, loginGoogle: string };

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

    // asynchronous - gets translations then completes.
    this.translate.get(['button.loginFacebook', 'button.loginGoogle'])
      .subscribe(translations => {
        this.button.loginFacebook = translations['button.loginFacebook'];
        this.button.loginGoogle = translations['button.loginGoogle'];
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
