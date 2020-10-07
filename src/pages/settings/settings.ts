import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
import { OtpPage } from '../otp/otp';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  private editsignup: FormGroup;
  baseURL: any;

  constructor(
    private exchangeData: ExchangeDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private formBuilder: FormBuilder,
    public storage: Storage
  ) {
    this.baseURL = 'http://social.evokemusic.net/api/app/social-que/a-v1/putSellerDetail'
    // this.editsignup = this.formBuilder.group({
    //   category: ['Pharmacy'],
    //   shopName: ['', Validators.required],
    //   city: ['', Validators.required],
    //   language: ['English'],
    //   occupant: ['', Validators.required],
    //   mobile: ['', [Validators.required, Validators.pattern('[0]{1}[7]{1}[0-9]{8}'), Validators.minLength(10)]]
    // });
  }

  ionViewWillLoad() {
    this.editsignup = this.formBuilder.group({
      category:['Pharmacy'],
      shopName:['', Validators.required],
      city: ['', Validators.required],        
      language: ['English'],
      occupant: ['', [Validators.required, Validators.pattern('[0-9]{1,5}')]],
      mobile:['', [Validators.required, Validators.pattern('[0]{1}[7]{1}[0-9]{8}'), Validators.minLength(10)]]
    });
  }

  validation_messages = {
    'shopName': [
      { type: 'required', message: '*Shop name is required!' }
    ],
    'city': [
      { type: 'required', message: '*Located city is required!' }
    ],
    'mobile': [
      { type: 'required', message: '*Mobile number is required!' },
      { type: 'pattern', message: '*Not a valid mobile number!' }
    ],
    'occupant': [
      { type: 'required', message: '*Occupant capacity is required!' }
    ],
  };

  updateUserDetails() {
    let arrangedMobile = this.editsignup.value.mobile.substring(1, 11);

    if(this.exchangeData.maxCustomers != this.editsignup.value.occupant){
      this.exchangeData.occupentCountChanged=true;
    }
    
    this.exchangeData.maxCustomers = this.editsignup.value.occupant;
    this.exchangeData.shopName = this.editsignup.value.shopName;

    if (this.editsignup.value.category) {
      console.log(this.editsignup.value.category, '22222')
    } else {
      this.editsignup.value.category = "Pharmacy";
    }
    if (this.editsignup.value.language) {
      console.log(this.editsignup.value.language, '33333')
    } else {
      this.editsignup.value.language = "English";
    }

    // if (this.editsignup.value.mobile) {
      let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options: any = {
          "ID": this.exchangeData.userDetails.ID, "MSISDN": arrangedMobile, "Categories": this.editsignup.value.category, "Language": this.editsignup.value.language, "BusinessName": this.editsignup.value.shopName,
          "City": this.editsignup.value.city, "Type": "Free", "GPS": "6.8923865,79.8717421", "OccupantCount": this.editsignup.value.occupant, "CreatedDate": Date.now()
        },
        url: any = this.baseURL;

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(`Congratulations data was successfully added`, data);
        if(this.exchangeData.userDetails.MSISDN == this.editsignup.value.mobile){
          this.exchangeData.userDetails = { "ID": data.data.id, "MSISDN": '0' + data.data.MSISDN, "Categories": data.data.Categories, "Language": data.data.Language, "BusinessName": data.data.BusinessName, "City": data.data.City, "OccupantCount": data.data.OccupantCount };
          this.storage.set('currentUser', this.exchangeData.userDetails);
          this.goHome();
        } else {
          this.exchangeData.userDetails = { "ID": data.data.id, "MSISDN": '0' + data.data.MSISDN, "Categories": data.data.Categories, "Language": data.data.Language, "BusinessName": data.data.BusinessName, "City": data.data.City, "OccupantCount": data.data.OccupantCount };
          this.storage.set('currentUser', null);
          this.navCtrl.push(OtpPage);
        }
      },
      (error: any) => {
        console.log('Something went wrong!', error);
      });      
    // }
  }
  goHome() {
    this.navCtrl.setRoot(TabsPage);
  }
}