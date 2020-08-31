import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

import { SettingsPage } from '../pages/settings/settings'
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';
import { ExchangeDataProvider } from '../providers/exchange-data/exchange-data';

@Component({
  templateUrl: 'app.html'
})
export class SocialQue {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  imageURI:any;
  imageFileName:any;

  pages: Array<{title: string, component: any}>;

  constructor(
    // private camera: Camera,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private exchangeData: ExchangeDataProvider,
    public storage:Storage
    ) {
    this.initializeApp();
    this.pages = [
      { title: 'Settings', component: SettingsPage },
      { title: 'About', component: AboutPage },
      { title: 'Terms & Conditions', component: TermsPage }
    ];
    
    this.storage.get('currentUser').then((val) => {
      console.log(val,'111111111')
      this.exchangeData.userDetails = val;
      if(this.exchangeData.userDetails != null){
        this.exchangeData.maxCustomers = this.exchangeData.userDetails.OccupantCount;
        this.exchangeData.shopName = this.exchangeData.userDetails.BusinessName;
        this.rootPage = TabsPage;
      } else {
        this.exchangeData.maxCustomers = 5;
        this.rootPage = SignupPage;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  // getImage() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  //   }
  
  //   this.camera.getPicture(options).then((imageData) => {
  //     this.imageURI = imageData;
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
}
