import { TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  App,
  DomController,
  MenuController,
  NavController,
  NavParams,
  LoadingController,
  GestureController,
  AlertController,
  ModalController,
  Platform,
  Config,
  Keyboard,
  Form,
  IonicModule
} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {
  ConfigMock,
  NavControllerMock,
  PlatformMock,
  ModalMock
} from 'ionic-mocks';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Class provides some static helper functions to use in specs.
 */
export class TestUtils {

  /**
   * Helper uses Angulars` "Testbed.configureTestingModule(any)" in order to
   * configure an ionic component together with all needed ionic class mocks
   * and automatic change detection.
   *
   * Please read:
   * - https://angular.io/docs/ts/latest/guide/testing.html
   * - http://lathonez.com/2017/ionic-2-unit-testing/
   *
   * @param {Array<any>} components
   * @returns {typeof TestBed}
   */
  public static configureIonicTestingModule(moduleDef: {
    providers?: any[];
    declarations?: any[];
    imports?: any[];
    schemas?: (any[])[];
  }): typeof TestBed {
    return TestBed.configureTestingModule({
      declarations: [...(moduleDef.declarations || [])],
      providers: [
        ...(moduleDef.providers || []),
        { provide: ComponentFixtureAutoDetect, useValue: true },
        App,
        Form,
        Keyboard,
        DomController,
        MenuController,
        NavController,
        LoadingController,
        GestureController,
        AlertController,
        StatusBar,
        SplashScreen,
        { provide: ModalController, useFactory: () => ModalMock.instance() },
        { provide: NavParams, useFactory: () => NavControllerMock.instance() },
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: Config, useFactory: () => ConfigMock.instance() }
      ],
      imports: [
        ...(moduleDef.imports || []),
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ]
    });
  }
}

export namespace TestUtils {
  /**
   * Helper to compile and create a component using angulars` Testbed.
   *
   * @param component
   * @returns {Promise<any>}
   */
  export function createComponent(component: any): Promise<any> {
    return TestBed.compileComponents().then(() => {
      let fixture: any = TestBed.createComponent(component);
      return {
        fixture: fixture,
        instance: fixture.debugElement.componentInstance,
        htmlElement: fixture.debugElement.nativeElement
      };
    });
  }
}
