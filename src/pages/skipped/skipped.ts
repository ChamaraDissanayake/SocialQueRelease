import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';
// import { populateNodeData } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';

@Component({
  selector: 'page-skipped',
  templateUrl: 'skipped.html',
})
export class SkippedPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private exchangeData: ExchangeDataProvider
    ) {}

  ionViewDidLoad() {
    setInterval(() => {
      this.exchangeData.customerList.forEach(element => {
        if(element.status == 'skipped'){
          // console.log(element)
          let timeElapsed = Date.now()-element.time;
          // if(timeElapsed>=1200000){
          if(timeElapsed>=10000){
            let index = this.exchangeData.customerList.indexOf(element)
            this.exchangeData.customerList[index].status = 'absent';
            this.exchangeData.absentList.push(this.exchangeData.customerList[index])
            this.exchangeData.customerList.splice(index,1)
            console.log(this.exchangeData.absentList, '11111')
            console.log(this.exchangeData.customerList,'22222')
          }    
        }          
      });
    }, 5000);
  }
}
