import { Component, NgZone } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';

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
  maxCustomers: number = 5;
  insideCount : number = 0;
  pendingCount : number;
  loading : any;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public androidPermissions: AndroidPermissions,
    private zone: NgZone,
    private exchangeData: ExchangeDataProvider,
    public loadingCtrl: LoadingController) {    
    this.percent = 45;
    this.belowNumber = 45;
    this.holdTime = false;
  }

  ionViewDidLoad() {
    this.checkPermission();
    this.resetClock();
    // this.onSMSArrive(); //Uncomment this before launch in real device
    // this.test();
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
    if (this.holdTime == true || this.insideCount == this.maxCustomers) {
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
    this.platform.ready().then((readySource) => {
      if(SMS) SMS.startWatch(function(){
            console.log('watching started');
           }, function(){
          console.log('failed to start watching');
      });
      document.addEventListener('onSMSArrive', function(e){
        console.log('sms arrived')
        // this.checkPermission();  
        this.checkSMS(e.data);
        }.bind(this)
      );
    })
  }

  checkSMS(sms){
    this.platform.ready().then((readySource) => {
      let key1 = sms.body.includes("covid19");
      let key2 = sms.body.includes("Covid19");
      let key3 = sms.body.includes("COVID19");
      let existingNumber = false;

      if(key1 || key2 || key3){
        if(this.exchangeData.customerList.length){
          this.exchangeData.customerList.forEach(element => {
            console.log(sms.address,'111111',element.pNumber)
            if(sms.address==element.pNumber){
              existingNumber = true;
              if(element.status=='skipped'){                
                this.countPendingCustomers();
                this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].time = this.dateFix();
                if(this.pendingCount<5){
                  this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "pending";
                  this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList
                    .indexOf(element)].id, "pending", this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].time);
                } else {
                  this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "waiting";
                  this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList
                    .indexOf(element)].id, "waiting", this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].time);
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
    if(SMS) SMS.sendSMS(sms.address, 'Your number is ' + this.generateNumber, function(){}, function(){});
    this.countPendingCustomers();
    if(this.pendingCount<5){
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:sms.address, status:"pending", time: this.dateFix()});
      this.exchangeData.insertData(this.generateNumber, sms.address, "pending", this.dateFix());
    } else {
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:sms.address, status:"waiting", time: this.dateFix()});
      this.exchangeData.insertData(this.generateNumber, sms.address, "waiting", this.dateFix());
    }
    this.refresh();
    console.log(this.exchangeData.customerList,'00000')
  }

  countGetIn(customer){
    this.insideCount = 0;
    let i = 0;
    this.exchangeData.customerList.forEach(element => {
      if(element.status=="inside"){
        this.insideCount++
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
    if(this.insideCount<this.maxCustomers){
      this.insideCount++      
      // let index = this.exchangeData.customerList.indexOf(ocptId);
      // this.exchangeData.customerList[index].status = "inside"
      this.exchangeData.customerList[this.exchangeData.customerList.indexOf(ocptId)].status = "inside"
      this.exchangeData.updateCheckIn(this.exchangeData.customerList[this.exchangeData.customerList
        .indexOf(ocptId)].id, "inside", this.dateFix());
      if(this.insideCount < this.maxCustomers && this.pendingCount>0){
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
  }

  goOut(){
    this.pageLoader();
    this.loading.present();

    if(this.insideCount>0){
      this.insideCount--
      // this.countPendingCustomers();
      
      // if(this.holdTime==false && this.pendingCount>0){
      //   console.log(this.pendingCount,'111111')
      this.startClock();
      // }

      this.exchangeData.customerList[0].status = "completed"
      this.exchangeData.updateStatus(this.exchangeData.customerList[0].id, "completed", this.dateFix());

      this.exchangeData.completedList.push(this.exchangeData.customerList[0])
      this.exchangeData.customerList.splice(0,1);
      this.loading.dismiss();
    } else {
      this.loading.dismiss();
    }


  }

  skipCustomer(){
    this.pageLoader();
    this.loading.present();
    if (this.insideCount < this.maxCustomers) {
      let found = false;
      let i = 0;
      this.exchangeData.customerList.forEach(element => {
        if(element.status == 'pending' && found == false){
          let index = this.exchangeData.customerList.indexOf(element);
          this.exchangeData.customerList[index].status = "skipped";
          this.exchangeData.customerList[index].time = this.dateFix();
          this.exchangeData.updateStatus(this.exchangeData.customerList[index].id, "skipped", this.exchangeData.customerList[index].time);
          console.log('Inform to ',this.exchangeData.customerList[index].pNumber)
          if(SMS) SMS.sendSMS(this.exchangeData.customerList[index].pNumber, 'Your have been skipped because of absent in time. Please resend previous sms before 20 minutes to re-enter with old number', function(){}, function(){});
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
  }

  getFromWaiting(){
    let found = false;
    this.exchangeData.customerList.forEach(element => {
      if(element.status=="waiting" && found == false){
        this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "pending";
        this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].id, "pending", this.dateFix());
        found = true;
      }
    });
  }

  checkPermission() {

    this.platform.ready().then((readySource) => {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
        success => {
          console.log('Has permission to read sms')
        },
        err => {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).
          then(success => {
            console.log('Successfully granted read sms permission')
          },
          err => {
            console.log('No permission to read sms permission')
          });
        }
      );
  
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
        success => {
          console.log('Has permission to send sms')
        },
          err => {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).
          then(success => {
            console.log('Successfully granted send sms permission')
          },
          err => {
            console.log('No permission to send sms permission')
          });
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
    if(this.pendingCount<5){
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:+94782992725, status:"pending", time: this.dateFix()});  
      this.exchangeData.insertData(this.generateNumber, +94782992725, "pending", this.dateFix());
    } else {
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:+94782992725, status:"waiting", time: this.dateFix()});          
      this.exchangeData.insertData(this.generateNumber, +94782992725, "waiting", this.dateFix());
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

  dateFix(){
    var dateNow = new Date();
    return dateNow;
  }

  // test(){
  //   this.insideCount = this.exchangeData.insideCustomerCount;
  //   this.generateNumber = this.exchangeData.lastCustomerNumber;
  // }
}
