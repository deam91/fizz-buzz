import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from 'angularx-social-login'
import { FacebookLoginProvider, LinkedInLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { AuthComponent } from './auth/auth.component';
import { AuthLocalComponent } from './auth-local/auth-local.component'

const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
}; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11
 
const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id", googleLoginOptions)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("655181964641276", fbLoginOptions)
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [AuthComponent, AuthLocalComponent],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [{
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }]
})
export class AuthModule { }