import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions'
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


  constructor(public navCtrl: NavController, public platform: Platform, public androidPermissions: AndroidPermissions) {
    this.percent = 45;
    this.belowNumber = 45;
    this.holdTime = false;

    this.occupentId = [
      { id: 0, pNumber: +94714444440 },
      { id: 1, pNumber: +94714444441 },
      { id: 2, pNumber: +94714444442 },
      { id: 3, pNumber: +94714444443 },
      { id: 4, pNumber: +94714444444 },
      { id: 5, pNumber: +94714444445 },
      { id: 6, pNumber: +94714444446 },
      { id: 7, pNumber: +94714444447 },
      { id: 8, pNumber: +94714444448 },
      { id: 9, pNumber: +94714444449 }
    ];
  }

  ionViewDidLoad() {
    this.skipCustomer();
  }

  clickNext() {
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
    this.platform.ready().then((readySource) => {
      let filter = {
        box: 'inbox', // 'inbox' (default), 'sent', 'draft'
        indexFrom: 0, // start from index 0
        maxCount: 20, // count of SMS to return each time
      };

      // SMS.listSMS(filter, (ListSms) => {
      if (SMS) SMS.listSMS(filter, (ListSms) => {
        this.messages = ListSms
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
          if(SMS) SMS.sendSMS("+94714142387", "Hello Chamara", function(){}, function(){});
          // SMS.sendSMS("+94714142387", "Hello Chamara", function(){}, function(){});
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
