import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Network } from '@ionic-native/network';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { SocialQue } from './app.component';
import { HomePage } from '../pages/home/home';
import { WaitinglistPage } from '../pages/waitinglist/waitinglist';
import { SkippedPage } from '../pages/skipped/skipped';
import { SignupPage } from '../pages/signup/signup';
import { OtpPage } from '../pages/otp/otp';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';
import { ExchangeDataProvider } from '../providers/exchange-data/exchange-data';




@NgModule({
  declarations: [
    SocialQue,
    HomePage,
    SignupPage,
    OtpPage,
    SettingsPage,
    WaitinglistPage,
    SkippedPage,
    TabsPage,
    AboutPage,
    TermsPage
  ],
  imports: [
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(SocialQue),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 55,
      outerStrokeWidth: 2,
      innerStrokeWidth: 3,
      outerStrokeColor: "#5e6ae0",
      showInnerStroke: false,
      backgroundColor: "rgb(244, 244, 244)",
      animationDuration: 0,
      showUnits: false,
      showSubtitle: false,
      titleFontSize: "14px",
      animation: false,           
      clockwise: true,
      showTitle: true,
      titleColor: "black"
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SocialQue,
    HomePage,
    SignupPage,
    OtpPage,
    SettingsPage,
    WaitinglistPage,
    SkippedPage,
    TabsPage,
    AboutPage,
    TermsPage
  ],
  providers: [
    Network,
    AndroidPermissions,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExchangeDataProvider,
    SQLite,
    // FileTransfer,
    // FileUploadOptions,
    // FileTransferObject,
    File,
    Camera
  ],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
