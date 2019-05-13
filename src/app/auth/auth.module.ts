import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login'
import { FacebookLoginProvider, LinkedInLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { AuthComponent } from './auth/auth.component'

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
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
  declarations: [AuthComponent],
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
