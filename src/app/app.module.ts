import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SocialQue } from './app.component';
import { HomePage } from '../pages/home/home';
import { WaitinglistPage } from '../pages/waitinglist/waitinglist';
import { SkippedPage } from '../pages/skipped/skipped';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLite } from '@ionic-native/sqlite';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ExchangeDataProvider } from '../providers/exchange-data/exchange-data';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';


@NgModule({
  declarations: [
    SocialQue,
    HomePage,
    LoginPage,
    OtpPage,
    SettingsPage,
    WaitinglistPage,
    SkippedPage,
    TabsPage,
    AboutPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(SocialQue),
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
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SocialQue,
    HomePage,
    LoginPage,
    OtpPage,
    SettingsPage,
    WaitinglistPage,
    SkippedPage,
    TabsPage,
    AboutPage
  ],
  providers: [
    Network,
    AndroidPermissions,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExchangeDataProvider,
    SQLite    
  ],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
