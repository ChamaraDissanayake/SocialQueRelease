import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Searchbar } from 'ionic-angular';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';

@Component({
  selector: 'page-waitinglist',
  templateUrl: 'waitinglist.html',
})
export class WaitinglistPage {
  items: string[];
  // searchQuery: string = '';

  @ViewChild('searchbarid') searchbar: Searchbar

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private exchangeData: ExchangeDataProvider
  ) {
    this.items = [];
    // this.initializeItems();
  }

  ionViewDidEnter() {
    this.exchangeData.customerList;
    this.initializeItems();
  }

  initializeItems() {
    this.items = [];
    if(this.exchangeData.customerList){
      this.exchangeData.customerList.forEach(element => {
        if(element.status == 'waiting'){
          this.items.push(element.id.toString());          
        }
      });
    }
  }

  getItems(ev: any) {
    this.initializeItems();
    if(ev){
      const val = ev.target.value;
      if (val && val.trim != '') {
        this.items = this.items.filter((item) => {
          return (item.indexOf(val) > -1);
        })
      }
    }
  }

  forceGetIn(id){
    let index = 0;
    this.exchangeData.customerList.forEach(element => {
      if(element.id == id){
        index = this.exchangeData.customerList.indexOf(element);
      }
    });
    this.exchangeData.customerList[index].status = "inside";
    this.exchangeData.updateStatus(this.exchangeData.customerList[index].id, "inside");
    this.exchangeData.insideCustomerCount++;
    this.searchbar.clearInput(null);
    this.initializeItems();
  }
}
