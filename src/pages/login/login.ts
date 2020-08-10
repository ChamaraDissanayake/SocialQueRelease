import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OtpPage } from '../otp/otp';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  baseURL: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
    ) {
      this.baseURL = 'http://social.evokemusic.net/api/app/social-que/a-v1/putSellerDetail'
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLoginDetails(){
    this.navCtrl.push(OtpPage);
  }

  createEntry(){
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
        options 	: any		= {"MSISDN" : "+94714142387", "Categories" : "1", "Language": "1", "BusinessName" : "Evoke", 
          "City" : "Colombo", "Type":"Super center", "GPS":"331231,3123", "OTP": 567, "OccupentCount":5},
        url       : any      	= this.baseURL;

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) => {
        console.log(`Congratulations data was successfully added`, data);        
      },
      (error : any) => {
        console.log('Something went wrong!',error);
      });
      this.submitLoginDetails();
   }
}
