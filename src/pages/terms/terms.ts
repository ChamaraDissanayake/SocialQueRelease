import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

  goHome() {
    this.navCtrl.setRoot(TabsPage);
  }
}
