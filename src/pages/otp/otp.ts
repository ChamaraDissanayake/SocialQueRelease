import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';

declare var SMS: any;

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  @ViewChild('otpField') otpField: ElementRef;
  private otpFG : FormGroup;
  userDetails : any;

  constructor(
    private exchangeData: ExchangeDataProvider,
    public navCtrl: NavController,
    public platform: Platform,
    public navParams: NavParams,
    public http: HttpClient,
    private formBuilder: FormBuilder,
    public storage:Storage
    ) {
      this.otpFG = this.formBuilder.group({
        otp: ['', Validators.required],                
      });
  }

  ionViewDidLoad() {
    this.onSMSArrive();
  }

  verifyCode(){
    this.http.get('http://social.evokemusic.net/api/app/social-que/a-v1/otpValidate?ID='+this.exchangeData.userDetails.ID+'&OTP='+this.otpFG.value.otp)
    .subscribe((data : any) => 
    {
      if (data.status == 'verification-succeed') {
        this.navCtrl.setRoot(TabsPage);
        this.storage.set('currentUser', this.exchangeData.userDetails);        
      } else {
        this.otpFG.reset();
        alert('Please try again!')
      }
    },
    (error : any) =>
    {
       console.log(error);
    });
  }

  onKeyUp(event){
    console.log(event)
    if(event==4){
      this.losefocus();
      this.verifyCode();
    }
  }

  losefocus() {
    this.otpField['_native'].nativeElement.blur()
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
    console.log(sms.body,'33333')
    this.platform.ready().then(() => {
      let isTrue = sms.body.includes("Your confirmation code is ");
      if(isTrue){
        console.log("working")
        this.otpFG.value.otp = sms.body.substring(26,31);
        this.verifyCode();
      }      
    })
  }
}
