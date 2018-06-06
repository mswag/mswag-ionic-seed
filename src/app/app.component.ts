import { Component, HostBinding } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { EnvironmentProvider } from '../providers/environment/environment';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage: any = HomePage;

  @HostBinding('class.dev') public dev: boolean;
  @HostBinding('attr.version') public version: string;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    translate: TranslateService,
    environment: EnvironmentProvider,
  ) {
    this.dev = environment.PROJECT_ENV === 'dev';
    this.version = `
      ${environment.VERSION.revision}-
      ${environment.VERSION.branch}-
      ${environment.VERSION.tag}-`;

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('de');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
