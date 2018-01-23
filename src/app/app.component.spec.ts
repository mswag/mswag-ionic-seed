import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Platform } from 'ionic-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { TestUtils } from '../utils/test-utils';

describe('MyApp Component', () => {
  let component;
  let fixture;
  let statusBar;
  let splashScreen;

  beforeEach(
    async(() => {
      TestUtils.configureIonicTestingModule({
        providers: [TranslateService],
        imports: [TranslateModule.forRoot()],
        declarations: [MyApp]
      });

      let platform = TestBed.get(Platform);
      statusBar = TestBed.get(StatusBar);
      splashScreen = TestBed.get(SplashScreen);
      let translateService = TestBed.get(TranslateService);

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

  it('should style the status bar', () => {
    expect(statusBar.styleDefault).toHaveBeenCalled();
  });

  it('should hide the splash screen', () => {
    expect(splashScreen.hide).toHaveBeenCalled();
  });
});
