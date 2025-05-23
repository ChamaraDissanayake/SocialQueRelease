import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, NavParams } from 'ionic-angular';
import { OtpPage } from '../otp/otp';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ExchangeDataProvider } from '../../providers/exchange-data/exchange-data';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  private signup : FormGroup;
  baseURL: any;

  constructor(
    private exchangeData: ExchangeDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      this.baseURL = 'http://social.evokemusic.net/api/app/social-que/a-v1/putSellerDetail'
    }

  ionViewDidLoad() {
    this.exchangeData.requestSMSPermission();
  }

  ionViewWillLoad() {
    this.signup = this.formBuilder.group({
      category:['Pharmacy'],
      shopName:['', Validators.required],
      city: ['', Validators.required],        
      language: ['English'],
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
    ]
  };

  submitSellerDetails(){
    let arrangedMobile = this.signup.value.mobile.substring(1, 11);

    if(this.signup.value.category){
    } else {
      this.signup.value.category = "Pharmacy";
    }
    if(this.signup.value.language){
    } else {
      this.signup.value.language = "English";
    }
    let headers   : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options   : any   = {"MSISDN" : arrangedMobile, "Categories" : this.signup.value.category, "Language": this.signup.value.language, "BusinessName" : this.signup.value.shopName, 
          "City" : this.signup.value.city, "Type":"Free", "GPS":"6.8923865,79.8717421", "OccupantCount":5, "CreatedDate": Date.now()},
        url       : any       = this.baseURL;

      console.log(options,'22222')
      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) => {
        console.log(`Congratulations data added successfully`, data);
        this.exchangeData.userDetails = {"ID" : data.data.id ,"MSISDN" : '0' + data.data.MSISDN, "Categories" : data.data.Categories, "Language": data.data.Language, "BusinessName" : data.data.BusinessName, "City" : data.data.City, "OccupantCount":data.data.OccupantCount, "QueueLength":5};
        console.log(this.exchangeData.userDetails, '333333')
      },
      (error : any) => {
        console.log('Something went wrong!',error);
      });
    this.submitLoginDetails();
  }

  submitLoginDetails(){
    this.navCtrl.push(OtpPage);
  }
}

