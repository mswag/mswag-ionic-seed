import { TestBed, async } from '@angular/core/testing';
import { Platform } from 'ionic-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { App } from './app.component';

describe('MyApp Component', () => {
  let component;

  let statusBar;
  let splashScreen;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [
          TranslateService,
          StatusBar,
          SplashScreen,
          Platform
        ],
        imports: [TranslateModule.forRoot()]
      });

      let platform = TestBed.get(Platform);
      statusBar = TestBed.get(StatusBar);
      splashScreen = TestBed.get(SplashScreen);
      let translateService = TestBed.get(TranslateService);

      spyOn(platform, 'ready').and.returnValue(Promise.resolve());
      spyOn(statusBar, 'styleDefault');
      spyOn(splashScreen, 'hide');

      component = new App(
        platform,
        statusBar,
        splashScreen,
        translateService
      );
    })
  );

  it('should be created', () => {
    expect(component instanceof App).toBe(true);
  });

  // it('should init i18n', () => {
  //   expect(i18nServiceFake.setDefaultLang).toHaveBeenCalledWith('de');
  // });

  it('should style the status bar', () => {
    expect(statusBar.styleDefault).toHaveBeenCalled();
  });

  it('should hide the splash screen', () => {
    expect(splashScreen.hide).toHaveBeenCalled();
  });
});
