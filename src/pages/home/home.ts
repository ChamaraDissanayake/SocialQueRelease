import { Component, NgZone } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { AppMinimize } from '@ionic-native/app-minimize';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';

declare var SMS: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: string[];
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
  dummyOccupents: any[];
  nextPendingId: number = 100000;
  nextPendingPnumber: any = null;
  
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    private appMinimize: AppMinimize,
    public androidPermissions: AndroidPermissions,
    private zone: NgZone,
    private exchangeData: ExchangeDataProvider,
    public loadingCtrl: LoadingController,
    ) {    
    this.percent = 45;
    this.belowNumber = 45;
    this.holdTime = false;    
    // this.initializeItems(); 
  }

  ionViewDidLoad() {
    this.checkPermission();
    this.resetClock();
    this.onSMSArrive(); //Uncomment this before launch in real device
    this.abandonCustomer();
    this.exchangeData.setupDB();
    if(this.exchangeData.occupentCountChanged){
      this.sendBackToWaiting();
      this.exchangeData.occupentCountChanged = false;
    }
    setTimeout(() => {
      this.blankOccupent();
    }, 1500);

    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
    });
  }

  // initializeItems() {
  //   console.log('test')
  //   // this.items = [
  //   //   'Amsterdam',
  //   //   'Bogota',
  //   //   'Warakapola',
  //   //   'Nittambuwa',
  //   //   'Colombo'
  //   // ];

  //   this.exchangeData.customerList.forEach(element => {
  //     // console.log(element)
  //     if(element.id == 'pending'){
  //       this.items.push(element.id);
  //       console.log(this.items);
  //     }
  //   });
    
  // }

  // getItems(ev: any) {
  //   // Reset items back to all of the items
  //   this.initializeItems();

  //   // set val to the value of the searchbar
  //   const val = ev.target.value;
  //   // console.log(ev.target.value)
  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     console.log(this.items)
  //     // this.items = this.items.filter((item) => {
  //     //   // return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     //   console.log(item)
  //     // })
  //     // this.exchangeData.customerList = this.exchangeData.customerList.filter((item) => {
  //     //   return (item.id.indexOf(val) > -1)
  //     //   // console.log(item.id)
  //     // })
  //   }
  // }


  pageLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }

  startClock() {
    clearInterval(this.timer);
    this.countPendingCustomers();
    if (this.exchangeData.customerList[0] != undefined && this.pendingCount>0) {
      if(SMS) SMS.sendSMS(this.nextPendingPnumber, 'Your turn, please come inside. Your number is '+ this.nextPendingId+'.', function(){}, function(){
        alert('Message sending failed. Please check your balance');
      });
      console.log(this.nextPendingPnumber, 'Your turn, please come inside. Your number is '+ this.nextPendingId+'.')
      this.timer = setInterval(() => {
        this.percent--;
        if (this.percent <= 0) {
          clearInterval(this.timer);
          this.skipCustomer();
        }
        this.setPresentage = ((this.percent / this.belowNumber) * 100);
      }, 1000);
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
      let existingNumber = null;
      let isNotSkipped = true;

      let key = sms.body.toLowerCase().includes('pass');
      if(key){
        if(this.exchangeData.customerList.length){
          this.exchangeData.customerList.forEach(element => {
            if(sms.address==element.pNumber){
              existingNumber = element.id;
              if(element.status=='skipped'){
                isNotSkipped = false;
                this.countPendingCustomers();
                this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].updatedTime = Date.now();
                if(this.pendingCount<this.exchangeData.queLength){
                  this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "pending";
                  this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList
                    .indexOf(element)].id, "pending");
                  if(SMS) SMS.sendSMS(sms.address, 'Please come and rejoin now. Your number is '+ element.id, function(){}, function(){
                    alert('Message sending failed. Please check your balance');
                  });
                } else {
                  this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "waiting";
                  this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList
                    .indexOf(element)].id, "waiting");
                  if(SMS) SMS.sendSMS('Please come after 10 minutes to rejoin. Your number is ' + element.id + '. Present number is ' + this.nextPendingId + '.', function(){}, function(){
                    alert('Message sending failed. Please check your balance');
                  });
                }
                this.refresh();
              }
            }
          });
          // Promise.all(this.exchangeData.customerList).then(() => 
          //   console.log('for loop ended')
          // );

          if(existingNumber){
            if(isNotSkipped){
              if(SMS) SMS.sendSMS(sms.address, 'You are already in the queue. Your number is '+ existingNumber + '. Present number is ' + this.nextPendingId, function(){}, function(){
                alert('Message sending failed. Please check your balance');
              });
              console.log(existingNumber,'customer already in queue');
            }            
          } else {
            this.getNextNumber(sms);
            console.log(existingNumber,'New number added to list');
          }
        } else {
          this.getNextNumber(sms);
          console.log('New list is started');
        }
        this.blankOccupent();
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
    this.countPendingCustomers();
    if(this.pendingCount<this.exchangeData.queLength){
      if(SMS) SMS.sendSMS(sms.address, 'Please come and present now. Your number is '+ this.generateNumber, function(){}, function(){
        alert('Message sending failed. Please check your balance');
      });
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:sms.address, status:"pending", createdTime: Date.now()});
      this.exchangeData.insertData(this.generateNumber, sms.address, "pending");
    } else {
      if(SMS) SMS.sendSMS('Please come after 10 minutes. Your number is ' + this.generateNumber + '. Present number is ' + this.nextPendingId + '.', function(){}, function(){
        alert('Message sending failed. Please check your balance');
      });
      this.exchangeData.customerList.push({id:this.generateNumber, pNumber:sms.address, status:"waiting", createdTime: Date.now()});
      this.exchangeData.insertData(this.generateNumber, sms.address, "waiting");
    }
    this.refresh();
    this.blankOccupent();
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
    this.blankOccupent();
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
          console.log(this.exchangeData.customerList[index].pNumber, 'Your have been skipped because of absent in time. Please resend previous sms before 20 minutes to re-enter with old number');
          if(SMS) SMS.sendSMS(this.exchangeData.customerList[index].pNumber, 'Your have been skipped because of absent in time. Please resend previous sms before 20 minutes to re-enter with old number', function(){}, function(){
            alert('Message sending failed. Please check your balance');
          });
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
    this.blankOccupent();
  }

  getFromWaiting(){
    let found = false;
    this.exchangeData.customerList.forEach(element => {
      if(element.status=="waiting" && found == false){
        this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "pending";
        this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].id, "pending");
        found = true;
        let index = this.exchangeData.customerList.indexOf(element);
        if(SMS) SMS.sendSMS(this.exchangeData.customerList[index].pNumber, 'Please come and present now. Your number is ' + this.exchangeData.customerList[index].id, function(){}, function(){
          alert('Message sending failed. Please check your balance');
        });
        console.log(this.exchangeData.customerList[index].pNumber, 'Please come and present now. Your number is ' + this.exchangeData.customerList[index].id)
      }
    });
    this.blankOccupent();
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

  // getNextTestNumber(){    
  //   if(this.generateNumber>this.exchangeData.lastCustomerNumber){
  //     this.generateNumber++
  //     this.addTest()
  //   } else{
  //     this.generateNumber = this.exchangeData.lastCustomerNumber+1;
  //     this.addTest()
  //   }
  // }

  // addTest(){
  //   this.countPendingCustomers();
  //   if(this.pendingCount<this.exchangeData.queLength){
  //     this.exchangeData.customerList.push({id:this.generateNumber, pNumber:+94714142387, status:"pending", createdTime: Date.now()});  
  //     this.exchangeData.insertData(this.generateNumber, +94714142387, "pending");
  //     console.log('Please come and present now. Your number is '+ this.generateNumber)
  //   } else {
  //     console.log('Please come after 10 minutes. Your number is ' + this.generateNumber + '. Present number is ' + this.nextPendingId)
  //     this.exchangeData.customerList.push({id:this.generateNumber, pNumber:+94714142387, status:"waiting", createdTime: Date.now()});          
  //     this.exchangeData.insertData(this.generateNumber, +94714142387, "waiting");
  //   }
  //   this.blankOccupent();
  // }

  countPendingCustomers(){
    let bool: boolean;
    bool = true;
    this.pendingCount = 0;
    this.exchangeData.customerList.forEach(element => {
      if(element.status=="pending"){
        this.pendingCount++;
        if(bool){
          this.nextPendingId = element.id;
          this.nextPendingPnumber = element.pNumber;
          bool = false;
        }
      }
    });
  }

  abandonCustomer(){
    this.platform.ready().then(() => {
      setInterval(() => {
        this.exchangeData.customerList.forEach(element => {
          if(element.status == 'skipped'){
            let timeElapsed = Date.now()-element.updatedTime;
            if(timeElapsed >= 1200000){
              let index = this.exchangeData.customerList.indexOf(element)
              this.exchangeData.customerList[index].status = 'absent';
              this.exchangeData.updateStatus(this.exchangeData.customerList[index].id, "absent");
              this.exchangeData.absentList.push(this.exchangeData.customerList[index]);
              if(SMS) SMS.sendSMS(this.exchangeData.customerList[index].pNumber, 'Your have been abandoned because of absent', function(){}, function(){
                alert('Message sending failed. Please check your balance');
              });
              this.exchangeData.customerList.splice(index,1)         
            }    
          }          
        });
      }, 5000);
    })
  }

  blankOccupent(){
    this.dummyOccupents = [];
    this.countPendingCustomers();

    for(let i=1; i<=this.exchangeData.queLength-this.pendingCount; i++){      
      this.dummyOccupents.push(i)
    }
    if(this.dummyOccupents.length==this.exchangeData.queLength){
      this.holdTime = true;
      this.holdClock();
    }
  }

  sendBackToWaiting(){
    this.exchangeData.customerList.forEach(element => {
      if(element.status=="pending"){
        this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "waiting";
        this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].id, "waiting");        
      }
    });
    for(let i = 0; i<this.exchangeData.queLength; i++) {
      this.getFromWaiting();
    }
  }

  // test(){
  //   console.log(this.exchangeData.userDetails);
  // }
}