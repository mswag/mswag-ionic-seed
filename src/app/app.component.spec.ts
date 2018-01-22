import { TestBed, async } from '@angular/core/testing';
import { Platform } from 'ionic-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { TestUtils } from '../utils/test-utils';

describe('MyApp Component', () => {
  let component;

  let statusBar;
  let splashScreen;

  beforeEach(
    async(() => {
      TestUtils.configureIonicTestingModule({
        providers: [TranslateService, StatusBar, SplashScreen],
        imports: [TranslateModule.forRoot()]
      });

      let platform = TestBed.get(Platform);
      statusBar = TestBed.get(StatusBar);
      splashScreen = TestBed.get(SplashScreen);
      let translateService = TestBed.get(TranslateService);

      spyOn(statusBar, 'styleDefault');
      spyOn(splashScreen, 'hide');

      component = new MyApp(
        platform,
        statusBar,
        splashScreen,
        translateService
      );
    })
  );

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
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
