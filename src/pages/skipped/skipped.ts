import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';
// import { populateNodeData } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';
// import { LoadingController } from 'ionic-angular';
declare var SMS: any;

@Component({
  selector: 'page-skipped',
  templateUrl: 'skipped.html',
})
export class SkippedPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    private exchangeData: ExchangeDataProvider
    ) {}

  ionViewDidLoad() {
    setInterval(() => {
      this.exchangeData.customerList.forEach(element => {
        if(element.status == 'skipped'){
          let timeElapsed = Date.now()-element.time;
          // if(timeElapsed>=1200000){
          if(timeElapsed>=10000){
            let index = this.exchangeData.customerList.indexOf(element)
            this.exchangeData.customerList[index].status = 'absent';
            this.exchangeData.absentList.push(this.exchangeData.customerList[index]);
            if(SMS) SMS.sendSMS(this.exchangeData.customerList[index].pNumber, 'Your have been abandoned because of absent', function(){}, function(){});
            this.exchangeData.customerList.splice(index,1)         
          }    
        }          
      });
    }, 5000);
  }
}
