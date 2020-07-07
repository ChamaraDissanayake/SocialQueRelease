import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WaitinglistPage } from '../pages/waitinglist/waitinglist';
import { SkippedPage } from '../pages/skipped/skipped';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    OtpPage,
    SettingsPage,
    WaitinglistPage,
    SkippedPage,
    TabsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      outerStrokeWidth: 10,
      // innerStrokeWidth: 0,
      outerStrokeColor: "#0D1333",
      showInnerStroke: false,
      // innerStrokeColor: "#FFFFFF",
      animationDuration: 0,
      showUnits: false,
      showSubtitle: false,
      titleFontSize: "36"      
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    OtpPage,
    SettingsPage,
    WaitinglistPage,
    SkippedPage,
    TabsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
