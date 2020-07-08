import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  timer: any;
  percent: number;
  // upperNumber:number;
  belowNumber:number;
  setPresentage: number;
  occupentId: Array<{id: number, pNumber: number}>;
  holdTime:boolean;
  test:boolean;

  constructor(public navCtrl: NavController, private sms: SMS) {
    this.percent = 45;
    this.belowNumber = 45;
    this.holdTime = false;
    this.test = false;
    
    this.occupentId= [
      {id:0, pNumber:+94714444440},
      {id:1, pNumber:+94714444441},
      {id:2, pNumber:+94714444442},
      {id:3, pNumber:+94714444443},
      {id:4, pNumber:+94714444444},
      {id:5, pNumber:+94714444445},
      {id:6, pNumber:+94714444446},
      {id:7, pNumber:+94714444447},
      {id:8, pNumber:+94714444448},
      {id:9, pNumber:+94714444449}      
    ];
  }
  
  ionViewDidLoad() {
    this.skipCustomer();
  }

  clickNext(){
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

  skipCustomer(){
    clearInterval(this.timer);
    if(this.occupentId[0]!=undefined){
      this.timer = setInterval(() => {
        this.percent--;
        if(this.percent == 0){
          clearInterval(this.timer);        
          this.clickNext();
        }
        this.setPresentage = ((this.percent/this.belowNumber)*100);
      }, 1000);    
    }
  }

  holdClock(){
    if(this.holdTime==false){
      clearInterval(this.timer);
      this.holdTime = true;
    } else {
      this.skipCustomer();
      this.holdTime = false;
    }    
  }

  testSms(){    
    if(this.test==false){
      clearInterval(this.timer);
      this.test = true;
    } else {
      this.skipCustomer();
      this.test = false;
    }   
    console.log('sms working', this.test);
    this.sms.send('+94714142387', 'Hello world!'); 
  }
}
