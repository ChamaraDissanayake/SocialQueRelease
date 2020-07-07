import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  occupentId:any[];
  holdTime:boolean;

  constructor(public navCtrl: NavController) {
    this.percent = 45;
    this.belowNumber = 45;
    this.holdTime = false;
    this.occupentId= [1,2,3,4,5,6,7,8,9,0,1,50, 20, 30, 50, 
      10,1,2,3,6,4,765,84,14,1,50, 20, 30, 50, 10,1,2,3,6,4,765,84,14,1];
  }
  
  ionViewDidLoad() {
    this.skipCustomer();
  }

  clickNext(){
    this.occupentId.splice(0, 1);
    this.setPresentage = 45;
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
    this.timer = setInterval(() => {
      this.percent--;
      if(this.percent == 0){
        clearInterval(this.timer);        
        this.clickNext();
      }
      this.setPresentage = ((this.percent/this.belowNumber)*100);
    }, 1000);
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
}
