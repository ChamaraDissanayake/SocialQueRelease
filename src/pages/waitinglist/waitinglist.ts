import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';

@Component({
  selector: 'page-waitinglist',
  templateUrl: 'waitinglist.html',
})
export class WaitinglistPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private exchangeData: ExchangeDataProvider
  ) {}

  ionViewDidEnter() {
    console.log('waiting list');
  }

}
