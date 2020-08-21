import { Component, NgZone } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';
// import { Network } from '@ionic-native/network';

declare var SMS: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  timer: any;
  percent: number;
  belowNumber: number;
  setPresentage: number;
  holdTime: boolean;
  messages: any[];
  tempList: any[];
  generateNumber: number;
  pendingCount : number;
  loading : any;

  constructor(
    // private network: Network,
    public navCtrl: NavController,
    public platform: Platform,
    public androidPermissions: AndroidPermissions,
    private zone: NgZone,
    private exchangeData: ExchangeDataProvider,
    public loadingCtrl: LoadingController,
    ) {    
    this.percent = 45;
    this.belowNumber = 45;
    this.holdTime = false;    
  }

  ionViewDidLoad() {
    // this.exchangeData.requestSMSPermission();
    this.checkPermission();
    this.resetClock();
    // this.onSMSArrive(); //Uncomment this before launch in real device
    this.abandonCustomer();
    this.exchangeData.setupDB();
  }

  pageLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }

  startClock() {
    // this.holdTime = false;
    clearInterval(this.timer);
    this.countPendingCustomers();
    if (this.exchangeData.customerList[0] != undefined && this.pendingCount>0) {
      this.timer = setInterval(() => {
        this.percent--;
        if (this.percent <= 0) {
          clearInterval(this.timer);
          this.skipCustomer();
        }
        this.setPresentage = ((this.percent / this.belowNumber) * 100);
      }, 100);
    }
  }

  holdClock() {
    if (this.holdTime == true || this.exchangeData.insideCustomerCount == this.exchangeData.maxCustomers) {
      clearInterval(this.timer);
      this.holdTime = false;
    } else {
      this.startClock();
      this.holdTime = true;
    }
  }

  resetClock(){
    this.setPresentage = 100;
    this.percent = 45;
  }

  onSMSArrive(){
    this.platform.ready().then(() => {
      if(SMS) SMS.startWatch(function(){
            console.log('watching started');
           }, function(){
          console.log('failed to start watching');
      });
      document.addEventListener('onSMSArrive', function(e){
        console.log('sms arrived')
        this.checkSMS(e.data);
        }.bind(this)
      );
    })
  }

  checkSMS(sms){
    this.platform.ready().then(() => {
      let key1 = sms.body.includes("covid19");
      let key2 = sms.body.includes("Covid19");
      let key3 = sms.body.includes("COVID19");
      let existingNumber = false;

      if(key1 || key2 || key3){
        if(this.exchangeData.customerList.length){
          this.exchangeData.customerList.forEach(element => {
            if(sms.address==element.pNumber){
              existingNumber = true;
              if(element.status=='skipped'){                
                this.countPendingCustomers();
                this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].updatedTime = Date.now();
                if(this.pendingCount<this.exchangeData.maxCustomers){
                  this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "pending";
                  this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList
                    .indexOf(element)].id, "pending");
                } else {
                  this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "waiting";
                  this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList
                    .indexOf(element)].id, "waiting");
                }
                this.refresh();
              }
            }
          });
          // Promise.all(this.exchangeData.customerList).then(() => 
          //   console.log('for loop ended')
          // );

          if(existingNumber){
            console.log(existingNumber,'customer already in queue')
          } else {
            this.getNextNumber(sms);
            console.log(existingNumber,'New number added to list')
          }
        } else {
          this.getNextNumber(sms);
          console.log('New list is started')
        }
      } else{
        console.log('Not a valid sms')
      }
    })
  }

  getNextNumber(sms){
    if(this.generateNumber>this.exchangeData.lastCustomerNumber){
      this.generateNumber++
      this.replyCustomer(sms)
    } else{
      this.generateNumber = this.exchangeData.lastCustomerNumber+1;
      this.replyCustomer(sms)
    }
  }

  replyCustomer(sms){    
    // if(SMS) SMS.sendSMS(sms.address, 'Your number is ' + this.generateNumber, function(){}, function(){});
    this.countPendingCustomers();
    if(this.pendingCount<this.exchangeData.maxCustomers){
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:sms.address, status:"pending", createdTime: Date.now()});
      this.exchangeData.insertData(this.generateNumber, sms.address, "pending");
    } else {
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:sms.address, status:"waiting", createdTime: Date.now()});
      this.exchangeData.insertData(this.generateNumber, sms.address, "waiting");
    }
    this.refresh();
  }

  countGetIn(customer){
    this.exchangeData.insideCustomerCount = 0;
    let i = 0;
    this.exchangeData.customerList.forEach(element => {
      if(element.status=="inside"){
        this.exchangeData.insideCustomerCount++
      }
      i++
      if(i==this.exchangeData.customerList.length){
        this.getInside(customer);
      }
    });        
  }
  
  getInside(ocptId){
    this.pageLoader();
    this.loading.present();
    if(this.exchangeData.insideCustomerCount<this.exchangeData.maxCustomers){
      this.exchangeData.insideCustomerCount++      
      this.exchangeData.customerList[this.exchangeData.customerList.indexOf(ocptId)].status = "inside"
      this.exchangeData.updateCheckIn(this.exchangeData.customerList[this.exchangeData.customerList
        .indexOf(ocptId)].id, "inside");
      if(this.exchangeData.insideCustomerCount < this.exchangeData.maxCustomers && this.pendingCount>0){
        this.startClock();
      } else {
        console.log('Calling to hold clock')
        this.holdClock();
      }
      this.getFromWaiting();
      this.loading.dismiss();
    } else {
      alert("Max customer limit reached!")
      this.loading.dismiss();
    }
    this.resetClock();
    this.holdTime = true;
  }

  goOut(){
    this.pageLoader();
    this.loading.present();

    if(this.exchangeData.insideCustomerCount>0){
      this.exchangeData.insideCustomerCount--
      this.startClock();
      this.exchangeData.customerList[0].status = "completed"
      this.exchangeData.updateStatus(this.exchangeData.customerList[0].id, "completed");

      this.exchangeData.completedList.push(this.exchangeData.customerList[0])
      this.exchangeData.customerList.splice(0,1);
      this.loading.dismiss();
    } else {
      this.loading.dismiss();
    }
    this.holdTime = true;
  }

  skipCustomer(){
    this.pageLoader();
    this.loading.present();
    if (this.exchangeData.insideCustomerCount < this.exchangeData.maxCustomers) {
      let found = false;
      let i = 0;
      this.exchangeData.customerList.forEach(element => {
        if(element.status == 'pending' && found == false){
          let index = this.exchangeData.customerList.indexOf(element);
          this.exchangeData.customerList[index].status = "skipped";
          this.exchangeData.customerList[index].updatedTime = Date.now();
          this.exchangeData.updateStatus(this.exchangeData.customerList[index].id, "skipped");
          console.log('Inform to ',this.exchangeData.customerList[index].pNumber)
          // if(SMS) SMS.sendSMS(this.exchangeData.customerList[index].pNumber, 'Your have been skipped because of absent in time. Please resend previous sms before 20 minutes to re-enter with old number', function(){}, function(){});
          found = true;
        }
        if(element.status == 'pending'){
          i++
        }

      });
      this.resetClock();      
      this.getFromWaiting();
      if(i>0){
        this.startClock();
      }
      this.loading.dismiss();
    } else {
      this.loading.dismiss();
    }
    this.holdTime = true;
  }

  getFromWaiting(){
    let found = false;
    this.exchangeData.customerList.forEach(element => {
      if(element.status=="waiting" && found == false){
        this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "pending";
        this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].id, "pending");
        found = true;
      }
    });
  }

  checkPermission() {
    this.platform.ready().then(() => {

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECEIVE_SMS).then(
        success => {
          console.log('Has permission to receive sms',success)
        },
        err => {
          this.exchangeData.requestSMSPermission();
        }
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
        success => {
          console.log('Has permission to read sms')
        },
        err => {
          this.exchangeData.requestSMSPermission();
        }
      );
  
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
        success => {
          console.log('Has permission to send sms')
        },
        err => {
          this.exchangeData.requestSMSPermission();
        }
      );
    },
    Error => {
      alert(JSON.stringify(Error))
    });
  }

  refresh() {
    this.zone.run(() => {
      console.log('force update the screen');
    });    
  }

  getNextTestNumber(){
    if(this.generateNumber>this.exchangeData.lastCustomerNumber){
      this.generateNumber++
      this.add()
    } else{
      this.generateNumber = this.exchangeData.lastCustomerNumber+1;
      this.add()
    }
  }

  add(){
    this.countPendingCustomers();
    if(this.pendingCount<this.exchangeData.maxCustomers){
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:+94714142387, status:"pending", createdTime: Date.now()});  
      this.exchangeData.insertData(this.generateNumber, +94714142387, "pending");
    } else {
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:+94714142387, status:"waiting", createdTime: Date.now()});          
      this.exchangeData.insertData(this.generateNumber, +94714142387, "waiting");
    }
  }

  countPendingCustomers(){
    this.pendingCount = 0;
    this.exchangeData.customerList.forEach(element => {
      if(element.status=="pending"){
        this.pendingCount++
      }
    });
  }

  abandonCustomer(){
    this.platform.ready().then(() => {
      setInterval(() => {
        this.exchangeData.customerList.forEach(element => {
          if(element.status == 'skipped'){
            let timeElapsed = Date.now()-element.updatedTime;
            // if(timeElapsed>=1 200 000){
            if(timeElapsed>=20000){
              console.log('íf is working')
              let index = this.exchangeData.customerList.indexOf(element)
              this.exchangeData.customerList[index].status = 'absent';
              this.exchangeData.updateStatus(this.exchangeData.customerList[index].id, "absent");
              this.exchangeData.absentList.push(this.exchangeData.customerList[index]);
              // if(SMS) SMS.sendSMS(this.exchangeData.customerList[index].pNumber, 'Your have been abandoned because of absent', function(){}, function(){});
              this.exchangeData.customerList.splice(index,1)         
            }    
          }          
        });
      }, 5000);
    })
  }
}