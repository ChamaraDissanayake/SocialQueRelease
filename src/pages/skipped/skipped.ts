import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data'

/**
 * Generated class for the SkippedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-skipped',
  templateUrl: 'skipped.html',
})
export class SkippedPage {
  skipped: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private exchangeData: ExchangeDataProvider) {
    this.skipped = [];
  }

  ionViewDidEnter() {
    this.skiplist();
  }

  skiplist(){
    this.skipped = this.exchangeData.skippedList;
  }
}
