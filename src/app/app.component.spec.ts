import { TestBed, async } from '@angular/core/testing';
import { Platform } from 'ionic-angular';
// import { TranslateModule, TranslateService } from 'ng2-translate/ng2-translate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyAppComponent } from './app.component';

describe('MyApp Component', () => {
  let component;

  let statusBar;
  let splashScreen;

  let i18nServiceFake;

  beforeEach(
    async(() => {
      i18nServiceFake = { setDefaultLang: jasmine.createSpy('i18n spy') };

      TestBed.configureTestingModule({
        providers: [
          // {provide: TranslateService, useValue: i18nServiceFake},
          StatusBar,
          SplashScreen,
          Platform
        ],
        imports: [
          // TranslateModule.forRoot()
        ]
      });

      let platform = TestBed.get(Platform);
      statusBar = TestBed.get(StatusBar);
      splashScreen = TestBed.get(SplashScreen);
      // let translateService = TestBed.get(TranslateService);

      spyOn(platform, 'ready').and.returnValue(Promise.resolve());
      spyOn(statusBar, 'styleDefault');
      spyOn(splashScreen, 'hide');

      component = new MyAppComponent(
        platform,
        statusBar,
        splashScreen /*, translateService*/
      );
    })
  );

  it('should be created', () => {
    expect(component instanceof MyAppComponent).toBe(true);
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
