import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';

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

  }

  verifyCode(){
    this.http.get('http://social.evokemusic.net/api/app/social-que/a-v1/otpValidate?ID='+this.exchangeData.userDetails.ID+'&OTP='+this.otpFG.value.otp)
    .subscribe((data : any) => 
    {
      // this.exchangeData.userDetails = {"ID" : data.data.id ,"MSISDN" : data.data.MSISDN, "Categories" : data.data.Categories, "Language": data.data.Language, "BusinessName" : data.data.BusinessName, "City" : data.data.City, "OccupantCount":data.data.OccupantCount};
      if (data.status == 'verification-succeed') {
        this.navCtrl.setRoot(TabsPage);
        this.storage.set('currentUser', this.exchangeData.userDetails)
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
}
