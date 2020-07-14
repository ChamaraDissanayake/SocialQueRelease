import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions'
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data'

declare var SMS: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  timer: any;
  percent: number;
  // upperNumber:number;
  belowNumber: number;
  setPresentage: number;
  occupentId: Array<{ id: number, pNumber: number }>;
  holdTime: boolean;
  messages: any[];
  tempList: any[];
  generateNumber: number= 100000;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public androidPermissions: AndroidPermissions,
    private exchangeData: ExchangeDataProvider) {
    
    this.percent = 45;
    this.belowNumber = 45;
    this.holdTime = false;
    this.occupentId = [];
  }

  ionViewDidLoad() {
    this.checkPermission();
  }

  clickNext() {
    // console.log(this.occupentId[0],'11111')
    this.exchangeData.createSkippedList(this.occupentId[0])
    this.occupentId.splice(0, 1);
    this.setPresentage = 100;
    this.percent = 45;
    this.skipCustomer();
  }

  // nextOccupent(ocptId){
  //   let index = this.occupentId.indexOf(ocptId);
  //   console.log(index,'1111');

  //   if(index > -1){
  //     this.occupentId.splice(index, 1);
  //   }
  // }

  skipCustomer() {
    clearInterval(this.timer);
    if (this.occupentId[0] != undefined) {
      this.timer = setInterval(() => {
        this.percent--;
        if (this.percent == 0) {
          clearInterval(this.timer);
          this.clickNext();
        }
        this.setPresentage = ((this.percent / this.belowNumber) * 100);
      }, 1000);
    }
  }

  holdClock() {
    if (this.holdTime == false) {
      clearInterval(this.timer);
      this.holdTime = true;
    } else {
      this.skipCustomer();
      this.holdTime = false;
    }
  }

  checkPermission() {
    this.androidPermissions.checkPermission
      (this.androidPermissions.PERMISSION.READ_SMS).then(
        success => {
          if (success.hasPermission == false) {
          } else {
            this.readSMSList();
          }
        },
        err => {
          this.androidPermissions.requestPermission
            (this.androidPermissions.PERMISSION.READ_SMS).
            then(success => {
              this.readSMSList();
            },
            err => {
              alert("cancelled")
            });
        });

    this.androidPermissions.requestPermissions
      ([this.androidPermissions.PERMISSION.READ_SMS]);

  }

  readSMSList() {    
    this.tempList = [];
    this.platform.ready().then((readySource) => {
      let filter = {
        // box: 'inbox', // 'inbox' (default), 'sent', 'draft'
        box:'draft',
        indexFrom: 0, // start from index 0
        maxCount: 500, // count of SMS to return each time
      };

      if (SMS) SMS.listSMS(filter, (ListSms) => {
        ListSms.forEach(element => {
          let check1 = element.body.includes("covid19");
          let check2 = element.body.includes("Covid19");
          let check3 = element.body.includes("COVID19");
          if(check1==true || check2==true || check3==true){
            this.tempList.push([element.address]);
          }
        });
        this.messages = this.tempList;
        this.sendSMStoCustomer();
        this.skipCustomer();
      },

      Error => {
        alert(JSON.stringify(Error))
      });

    });
  }

  sendSMStoCustomer(){
    this.androidPermissions.requestPermission
    (this.androidPermissions.PERMISSION.SEND_SMS).
    then(success => {
      if(success.hasPermission==true){
        this.platform.ready().then((readySource) => {
          this.messages.forEach(element => {
            this.generateNumber++
            if(SMS) SMS.sendSMS(element, 'Your number is ' + this.generateNumber, function(){}, function(){});
            this.occupentId.push({id:this.generateNumber, pNumber:element})
          });

        });
      } else {
        console.log(success)        
      }
    },
    err => {
      alert("cancelled")
    });
  }
}
