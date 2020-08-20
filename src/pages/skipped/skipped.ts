import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';
// import { populateNodeData } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';
// import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-skipped',
  templateUrl: 'skipped.html',
})
export class SkippedPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    private exchangeData: ExchangeDataProvider,
    ) {}

  ionViewDidLoad() {}
}
