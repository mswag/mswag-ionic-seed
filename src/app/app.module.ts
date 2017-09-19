import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyAppComponent } from './app.component';

import { AboutPageComponent } from '../pages/about/about';
import { ContactPageComponent } from '../pages/contact/contact';
import { HomePageComponent } from '../pages/home/home';
import { TabsPageComponent } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyAppComponent,
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    TabsPageComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyAppComponent)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    TabsPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
