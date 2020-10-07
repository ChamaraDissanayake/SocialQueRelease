webpackJsonp([0],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_exchange_data_exchange_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OtpPage = /** @class */ (function () {
    function OtpPage(exchangeData, navCtrl, platform, navParams, http, formBuilder, storage) {
        this.exchangeData = exchangeData;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.otpFG = this.formBuilder.group({
            otp: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        this.onSMSArrive();
    };
    OtpPage.prototype.verifyCode = function () {
        var _this = this;
        this.http.get('http://social.evokemusic.net/api/app/social-que/a-v1/otpValidate?ID=' + this.exchangeData.userDetails.ID + '&OTP=' + this.otpFG.value.otp)
            .subscribe(function (data) {
            if (data.status == 'verification-succeed') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                _this.storage.set('currentUser', _this.exchangeData.userDetails);
            }
            else {
                _this.otpFG.reset();
                alert('Please try again!');
            }
        }, function (error) {
            console.log(error);
        });
    };
    OtpPage.prototype.onKeyUp = function (event) {
        console.log(event);
        if (event == 4) {
            this.losefocus();
            this.verifyCode();
        }
    };
    OtpPage.prototype.losefocus = function () {
        this.otpField['_native'].nativeElement.blur();
    };
    OtpPage.prototype.onSMSArrive = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (SMS)
                SMS.startWatch(function () {
                    console.log('watching started');
                }, function () {
                    console.log('failed to start watching');
                });
            document.addEventListener('onSMSArrive', function (e) {
                console.log('sms arrived');
                this.checkSMS(e.data);
            }.bind(_this));
        });
    };
    OtpPage.prototype.checkSMS = function (sms) {
        var _this = this;
        console.log(sms.body, '33333');
        this.platform.ready().then(function () {
            var isTrue = sms.body.includes("Your confirmation code is ");
            if (isTrue) {
                console.log("working");
                _this.otpFG.value.otp = sms.body.substring(26, 31);
                _this.verifyCode();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('otpField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], OtpPage.prototype, "otpField", void 0);
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/pages/otp/otp.html"*/'<ion-header class="mainbody">\n  <ion-navbar color="pagedefault">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="mainbody">\n  <form [formGroup]="otpFG" (ngSubmit)="verifyCode()">\n\n    <div>\n      <ion-label class="otplabels">Please Enter The Verification Code</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input #otpField class="inputtext changeside" type="tel" maxlength="4" minlength="4" placeholder="____" [(ngModel)]="otpFG.otp"\n          formControlName="otp" (keyup)=\'onKeyUp($event.target.value.length)\'></ion-input>\n      </ion-item>\n      <!-- <ion-label class="otplabels">Resend Verification Code: <span class="otplabels clicklink" (click)="verifyCode()">\n          Resend</span></ion-label> -->\n    </div>\n\n    <div class="buttonSection">\n      <button type="submit" [disabled]="!otpFG.valid" class="submitbutton" ion-button round outline>Verify</button>\n    </div>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 313;

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_exchange_data_exchange_data__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__otp_otp__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsPage = /** @class */ (function () {
    function SettingsPage(exchangeData, navCtrl, navParams, http, formBuilder, storage) {
        this.exchangeData = exchangeData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.validation_messages = {
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
        this.baseURL = 'http://social.evokemusic.net/api/app/social-que/a-v1/putSellerDetail';
        // this.editsignup = this.formBuilder.group({
        //   category: ['Pharmacy'],
        //   shopName: ['', Validators.required],
        //   city: ['', Validators.required],
        //   language: ['English'],
        //   occupant: ['', Validators.required],
        //   mobile: ['', [Validators.required, Validators.pattern('[0]{1}[7]{1}[0-9]{8}'), Validators.minLength(10)]]
        // });
    }
    SettingsPage.prototype.ionViewWillLoad = function () {
        this.editsignup = this.formBuilder.group({
            category: ['Pharmacy'],
            shopName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            language: ['English'],
            occupant: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]{1,5}')]],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0]{1}[7]{1}[0-9]{8}'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10)]]
        });
    };
    SettingsPage.prototype.updateUserDetails = function () {
        var _this = this;
        var arrangedMobile = this.editsignup.value.mobile.substring(1, 11);
        if (this.exchangeData.maxCustomers != this.editsignup.value.occupant) {
            this.exchangeData.occupentCountChanged = true;
        }
        this.exchangeData.maxCustomers = this.editsignup.value.occupant;
        this.exchangeData.shopName = this.editsignup.value.shopName;
        if (this.editsignup.value.category) {
            console.log(this.editsignup.value.category, '22222');
        }
        else {
            this.editsignup.value.category = "Pharmacy";
        }
        if (this.editsignup.value.language) {
            console.log(this.editsignup.value.language, '33333');
        }
        else {
            this.editsignup.value.language = "English";
        }
        // if (this.editsignup.value.mobile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = {
            "ID": this.exchangeData.userDetails.ID, "MSISDN": arrangedMobile, "Categories": this.editsignup.value.category, "Language": this.editsignup.value.language, "BusinessName": this.editsignup.value.shopName,
            "City": this.editsignup.value.city, "Type": "Free", "GPS": "6.8923865,79.8717421", "OccupantCount": this.editsignup.value.occupant, "CreatedDate": Date.now()
        }, url = this.baseURL;
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log("Congratulations data was successfully added", data);
            if (_this.exchangeData.userDetails.MSISDN == _this.editsignup.value.mobile) {
                _this.exchangeData.userDetails = { "ID": data.data.id, "MSISDN": '0' + data.data.MSISDN, "Categories": data.data.Categories, "Language": data.data.Language, "BusinessName": data.data.BusinessName, "City": data.data.City, "OccupantCount": data.data.OccupantCount };
                _this.storage.set('currentUser', _this.exchangeData.userDetails);
                _this.goHome();
            }
            else {
                _this.exchangeData.userDetails = { "ID": data.data.id, "MSISDN": '0' + data.data.MSISDN, "Categories": data.data.Categories, "Language": data.data.Language, "BusinessName": data.data.BusinessName, "City": data.data.City, "OccupantCount": data.data.OccupantCount };
                _this.storage.set('currentUser', null);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__otp_otp__["a" /* OtpPage */]);
            }
        }, function (error) {
            console.log('Something went wrong!', error);
        });
        // }
    };
    SettingsPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/pages/settings/settings.html"*/'<ion-header color="navbar">\n  <ion-navbar color="navbar">\n    <button ion-button (click)=goHome()>\n      <ion-icon name="arrow-back" style="font-size: x-large;"></ion-icon>\n    </button>\n    <label class="backBtnLable">Settings</label>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="subbody">\n  <form [formGroup]="editsignup" (ngSubmit)="updateUserDetails()">\n    <div style="margin-top: 50px;">\n      <ion-list>\n        <ion-label class="signuplabels">Select your Business Category</ion-label>\n        <ion-item class="inputboxdecoration">\n          <ion-label class="signuplabels" style="color: #6A77ED">Category</ion-label>\n          <ion-select class="inputtext" style="min-width: -webkit-fill-available;" [(ngModel)]="editsignup.category" formControlName="category" value="{{this.exchangeData.userDetails.Categories}}">\n            <ion-option value="Pharmacy">Pharmacy</ion-option>\n            <ion-option value="Stores">Stores</ion-option>\n            <ion-option value="Shop">Shop</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Shop Name</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" placeholder="Enter your shop name here" type="text" [(ngModel)]="editsignup.shopName" formControlName="shopName" value="{{this.exchangeData.userDetails.BusinessName}}"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.shopName">\n          <div class="error-message" *ngIf="editsignup.get(\'shopName\').hasError(validation.type) && (editsignup.get(\'shopName\').dirty || editsignup.get(\'shopName\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>  \n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">City</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" placeholder="Enter your nearest city" type="text" [(ngModel)]="editsignup.city" formControlName="city" value="{{this.exchangeData.userDetails.City}}"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.city">\n          <div class="error-message" *ngIf="editsignup.get(\'city\').hasError(validation.type) && (editsignup.get(\'city\').dirty || editsignup.get(\'city\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div> \n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-list>\n        <ion-label class="signuplabels">Language</ion-label>\n        <ion-item class="inputboxdecoration">   \n          <ion-label class="signuplabels" style="color: #6A77ED">Language</ion-label>     \n          <ion-select class="inputtext" style="min-width: -webkit-fill-available;" [(ngModel)]="editsignup.language" formControlName="language" value="{{this.exchangeData.userDetails.Language}}">\n            <ion-option value="English">English</ion-option>\n            <ion-option value="Sinhala">Sinhala</ion-option>\n            <ion-option value="Tamil">Tamil</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Enter Your Mobile Number</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-input class="inputtext" type="tel" maxlength="10" minlength="10" [(ngModel)]="editsignup.mobile" formControlName="mobile" value="{{this.exchangeData.userDetails.MSISDN}}"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.mobile">\n          <div class="error-message" *ngIf="editsignup.get(\'mobile\').hasError(validation.type) && (editsignup.get(\'mobile\').dirty || editsignup.get(\'mobile\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Occupant Count</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-input class="inputtext" type="tel" maxlength = "5" [(ngModel)]="editsignup.occupant" formControlName="occupant" value="{{this.exchangeData.userDetails.OccupantCount}}" onfocus="value=\'\'"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.occupant">\n          <div class="error-message" *ngIf="editsignup.get(\'occupant\').hasError(validation.type) && (editsignup.get(\'occupant\').dirty || editsignup.get(\'occupant\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>  \n    </div>\n  \n    <div style="margin-top: 50px; text-align: center;">\n      <button type="submit" [disabled]="!editsignup.valid" class="submitbutton" ion-button round outline >Update</button>\n    </div>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_minimize__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_exchange_data_exchange_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, appMinimize, androidPermissions, zone, exchangeData, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.appMinimize = appMinimize;
        this.androidPermissions = androidPermissions;
        this.zone = zone;
        this.exchangeData = exchangeData;
        this.loadingCtrl = loadingCtrl;
        this.nextPendingId = 100000;
        this.percent = 45;
        this.belowNumber = 45;
        this.holdTime = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.checkPermission();
        this.resetClock();
        this.onSMSArrive(); //Uncomment this before launch in real device
        this.abandonCustomer();
        this.exchangeData.setupDB();
        if (this.exchangeData.occupentCountChanged) {
            this.sendBackToWaiting();
            this.exchangeData.occupentCountChanged = false;
        }
        setTimeout(function () {
            _this.blankOccupent();
        }, 1500);
        this.platform.registerBackButtonAction(function () {
            _this.appMinimize.minimize();
        });
    };
    HomePage.prototype.pageLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    };
    HomePage.prototype.startClock = function () {
        var _this = this;
        clearInterval(this.timer);
        this.countPendingCustomers();
        if (this.exchangeData.customerList[0] != undefined && this.pendingCount > 0) {
            this.timer = setInterval(function () {
                _this.percent--;
                if (_this.percent <= 0) {
                    clearInterval(_this.timer);
                    _this.skipCustomer();
                }
                _this.setPresentage = ((_this.percent / _this.belowNumber) * 100);
            }, 1000);
        }
    };
    HomePage.prototype.holdClock = function () {
        if (this.holdTime == true || this.exchangeData.insideCustomerCount == this.exchangeData.maxCustomers) {
            clearInterval(this.timer);
            this.holdTime = false;
        }
        else {
            this.startClock();
            this.holdTime = true;
        }
    };
    HomePage.prototype.resetClock = function () {
        this.setPresentage = 100;
        this.percent = 45;
    };
    HomePage.prototype.onSMSArrive = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (SMS)
                SMS.startWatch(function () {
                    console.log('watching started');
                }, function () {
                    console.log('failed to start watching');
                });
            document.addEventListener('onSMSArrive', function (e) {
                console.log('sms arrived');
                this.checkSMS(e.data);
            }.bind(_this));
        });
    };
    // checkSMS(sms){
    //   this.platform.ready().then(() => {
    //     // let existingNumber = false;
    //     let key = sms.body.toLowerCase().includes('pass');
    //     if(key){
    //       if(this.exchangeData.customerList.length){
    //         this.exchangeData.customerList.forEach(element => {
    //           if(sms.address==element.pNumber){
    //             // existingNumber = true;
    //             if(element.status=='skipped'){
    //               this.countPendingCustomers();
    //               this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].updatedTime = Date.now();
    //               if(this.pendingCount<this.exchangeData.maxCustomers){
    //                 this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "pending";
    //                 this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList
    //                   .indexOf(element)].id, "pending");
    //                 if(SMS) SMS.sendSMS(sms.address, 'Please come and rejoin now. Your number is '+ element.id, function(){}, function(){});
    //               } else {
    //                 this.exchangeData.customerList[this.exchangeData.customerList.indexOf(element)].status = "waiting";
    //                 this.exchangeData.updateStatus(this.exchangeData.customerList[this.exchangeData.customerList
    //                   .indexOf(element)].id, "waiting");
    //                 if(SMS) SMS.sendSMS('Please come after 10 minutes. Your number is ' + element.id + '. Present number is ' + this.nextPendingId);
    //               }
    //               this.refresh();
    //             } else {
    //               console.log('customer already in queue')
    //               if(SMS) SMS.sendSMS(sms.address, 'You are already in the queue. Your number is '+ element.id + '. Present number is ' + this.nextPendingId, function(){}, function(){});
    //             }
    //           } else {
    //             this.getNextNumber(sms);
    //             console.log('New number added to list')
    //           }
    //         });
    //         // Promise.all(this.exchangeData.customerList).then(() => 
    //         //   console.log('for loop ended')
    //         // );
    //         // if(existingNumber){
    //         //   console.log(existingNumber,'customer already in queue')
    //         // } else {
    //         //   this.getNextNumber(sms);
    //         //   console.log(existingNumber,'New number added to list')
    //         // }
    //       } else {
    //         this.getNextNumber(sms);
    //         console.log('New list is started')
    //       }
    //       this.blankOccupent();
    //     } else{
    //       console.log('Not a valid sms')
    //     }
    //   })
    // }
    HomePage.prototype.checkSMS = function (sms) {
        var _this = this;
        this.platform.ready().then(function () {
            var existingNumber = null;
            var key = sms.body.toLowerCase().includes('pass');
            if (key) {
                if (_this.exchangeData.customerList.length) {
                    _this.exchangeData.customerList.forEach(function (element) {
                        if (sms.address == element.pNumber) {
                            existingNumber = element.id;
                            if (element.status == 'skipped') {
                                _this.countPendingCustomers();
                                _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].updatedTime = Date.now();
                                if (_this.pendingCount < _this.exchangeData.maxCustomers) {
                                    _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].status = "pending";
                                    _this.exchangeData.updateStatus(_this.exchangeData.customerList[_this.exchangeData.customerList
                                        .indexOf(element)].id, "pending");
                                    if (SMS)
                                        SMS.sendSMS(sms.address, 'Please come and rejoin now. Your number is ' + element.id, function () { }, function () { });
                                }
                                else {
                                    _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].status = "waiting";
                                    _this.exchangeData.updateStatus(_this.exchangeData.customerList[_this.exchangeData.customerList
                                        .indexOf(element)].id, "waiting");
                                    if (SMS)
                                        SMS.sendSMS('Please come after 10 minutes. Your number is ' + element.id + '. Present number is ' + _this.nextPendingId);
                                }
                                _this.refresh();
                            }
                        }
                    });
                    // Promise.all(this.exchangeData.customerList).then(() => 
                    //   console.log('for loop ended')
                    // );
                    if (existingNumber) {
                        if (SMS)
                            SMS.sendSMS(sms.address, 'You are already in the queue. Your number is ' + existingNumber + '. Present number is ' + _this.nextPendingId, function () { }, function () { });
                        console.log(existingNumber, 'customer already in queue');
                    }
                    else {
                        _this.getNextNumber(sms);
                        console.log(existingNumber, 'New number added to list');
                    }
                }
                else {
                    _this.getNextNumber(sms);
                    console.log('New list is started');
                }
                _this.blankOccupent();
            }
            else {
                console.log('Not a valid sms');
            }
        });
    };
    HomePage.prototype.getNextNumber = function (sms) {
        if (this.generateNumber > this.exchangeData.lastCustomerNumber) {
            this.generateNumber++;
            this.replyCustomer(sms);
        }
        else {
            this.generateNumber = this.exchangeData.lastCustomerNumber + 1;
            this.replyCustomer(sms);
        }
    };
    HomePage.prototype.replyCustomer = function (sms) {
        this.countPendingCustomers();
        if (this.pendingCount < this.exchangeData.maxCustomers) {
            if (SMS)
                SMS.sendSMS(sms.address, 'Please come and present now. Your number is ' + this.generateNumber, function () { }, function () { });
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: sms.address, status: "pending", createdTime: Date.now() });
            this.exchangeData.insertData(this.generateNumber, sms.address, "pending");
        }
        else {
            if (SMS)
                SMS.sendSMS('Please come after 10 minutes. Your number is ' + this.generateNumber + '. Present number is ' + this.nextPendingId);
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: sms.address, status: "waiting", createdTime: Date.now() });
            this.exchangeData.insertData(this.generateNumber, sms.address, "waiting");
        }
        this.refresh();
        this.blankOccupent();
    };
    HomePage.prototype.countGetIn = function (customer) {
        var _this = this;
        this.exchangeData.insideCustomerCount = 0;
        var i = 0;
        this.exchangeData.customerList.forEach(function (element) {
            if (element.status == "inside") {
                _this.exchangeData.insideCustomerCount++;
            }
            i++;
            if (i == _this.exchangeData.customerList.length) {
                _this.getInside(customer);
            }
        });
    };
    HomePage.prototype.getInside = function (ocptId) {
        this.pageLoader();
        this.loading.present();
        if (this.exchangeData.insideCustomerCount < this.exchangeData.maxCustomers) {
            this.exchangeData.insideCustomerCount++;
            this.exchangeData.customerList[this.exchangeData.customerList.indexOf(ocptId)].status = "inside";
            this.exchangeData.updateCheckIn(this.exchangeData.customerList[this.exchangeData.customerList
                .indexOf(ocptId)].id, "inside");
            if (this.exchangeData.insideCustomerCount < this.exchangeData.maxCustomers && this.pendingCount > 0) {
                this.startClock();
            }
            else {
                this.holdClock();
            }
            this.getFromWaiting();
            this.loading.dismiss();
        }
        else {
            alert("Max customer limit reached!");
            this.loading.dismiss();
        }
        this.resetClock();
        this.holdTime = true;
        this.blankOccupent();
    };
    HomePage.prototype.goOut = function () {
        this.pageLoader();
        this.loading.present();
        if (this.exchangeData.insideCustomerCount > 0) {
            this.exchangeData.insideCustomerCount--;
            this.startClock();
            this.exchangeData.customerList[0].status = "completed";
            this.exchangeData.updateStatus(this.exchangeData.customerList[0].id, "completed");
            this.exchangeData.completedList.push(this.exchangeData.customerList[0]);
            this.exchangeData.customerList.splice(0, 1);
            this.loading.dismiss();
        }
        else {
            this.loading.dismiss();
        }
        this.holdTime = true;
    };
    HomePage.prototype.skipCustomer = function () {
        var _this = this;
        this.pageLoader();
        this.loading.present();
        if (this.exchangeData.insideCustomerCount < this.exchangeData.maxCustomers) {
            var found_1 = false;
            var i_1 = 0;
            this.exchangeData.customerList.forEach(function (element) {
                if (element.status == 'pending' && found_1 == false) {
                    var index = _this.exchangeData.customerList.indexOf(element);
                    _this.exchangeData.customerList[index].status = "skipped";
                    _this.exchangeData.customerList[index].updatedTime = Date.now();
                    _this.exchangeData.updateStatus(_this.exchangeData.customerList[index].id, "skipped");
                    console.log(_this.exchangeData.customerList[index].pNumber, 'Your have been skipped because of absent in time. Please resend previous sms before 20 minutes to re-enter with old number');
                    if (SMS)
                        SMS.sendSMS(_this.exchangeData.customerList[index].pNumber, 'Your have been skipped because of absent in time. Please resend previous sms before 20 minutes to re-enter with old number', function () { }, function () { });
                    found_1 = true;
                }
                if (element.status == 'pending') {
                    i_1++;
                }
            });
            this.resetClock();
            this.getFromWaiting();
            if (i_1 > 0) {
                this.startClock();
            }
            this.loading.dismiss();
        }
        else {
            this.loading.dismiss();
        }
        this.holdTime = true;
        this.blankOccupent();
    };
    HomePage.prototype.getFromWaiting = function () {
        var _this = this;
        var found = false;
        this.exchangeData.customerList.forEach(function (element) {
            if (element.status == "waiting" && found == false) {
                _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].status = "pending";
                _this.exchangeData.updateStatus(_this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].id, "pending");
                found = true;
                var index = _this.exchangeData.customerList.indexOf(element);
                if (SMS)
                    SMS.sendSMS(_this.exchangeData.customerList[index].pNumber, 'Please come and present now. Your number is ' + _this.exchangeData.customerList[index].id, function () { }, function () { });
                console.log(_this.exchangeData.customerList[index].pNumber, 'Please come and present now. Your number is ' + _this.exchangeData.customerList[index].id);
            }
        });
        this.blankOccupent();
    };
    HomePage.prototype.checkPermission = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.RECEIVE_SMS).then(function (success) {
                console.log('Has permission to receive sms', success);
            }, function (err) {
                _this.exchangeData.requestSMSPermission();
            });
            _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.READ_SMS).then(function (success) {
                console.log('Has permission to read sms');
            }, function (err) {
                _this.exchangeData.requestSMSPermission();
            });
            _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.SEND_SMS).then(function (success) {
                console.log('Has permission to send sms');
            }, function (err) {
                _this.exchangeData.requestSMSPermission();
            });
        }, function (Error) {
            alert(JSON.stringify(Error));
        });
    };
    HomePage.prototype.refresh = function () {
        this.zone.run(function () {
            console.log('force update the screen');
        });
    };
    HomePage.prototype.getNextTestNumber = function () {
        if (this.generateNumber > this.exchangeData.lastCustomerNumber) {
            this.generateNumber++;
            this.addTest();
        }
        else {
            this.generateNumber = this.exchangeData.lastCustomerNumber + 1;
            this.addTest();
        }
    };
    HomePage.prototype.addTest = function () {
        this.countPendingCustomers();
        if (this.pendingCount < this.exchangeData.maxCustomers) {
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: +94714142387, status: "pending", createdTime: Date.now() });
            this.exchangeData.insertData(this.generateNumber, +94714142387, "pending");
            console.log('Please come and present now. Your number is ' + this.generateNumber);
        }
        else {
            console.log('Please come after 10 minutes. Your number is ' + this.generateNumber + '. Present number is ' + this.nextPendingId);
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: +94714142387, status: "waiting", createdTime: Date.now() });
            this.exchangeData.insertData(this.generateNumber, +94714142387, "waiting");
        }
        this.blankOccupent();
    };
    HomePage.prototype.countPendingCustomers = function () {
        var _this = this;
        var bool;
        bool = true;
        this.pendingCount = 0;
        this.exchangeData.customerList.forEach(function (element) {
            if (element.status == "pending") {
                _this.pendingCount++;
                if (bool) {
                    _this.nextPendingId = element.id;
                    bool = false;
                }
            }
        });
    };
    HomePage.prototype.abandonCustomer = function () {
        var _this = this;
        this.platform.ready().then(function () {
            setInterval(function () {
                _this.exchangeData.customerList.forEach(function (element) {
                    if (element.status == 'skipped') {
                        var timeElapsed = Date.now() - element.updatedTime;
                        if (timeElapsed >= 1200000) {
                            var index = _this.exchangeData.customerList.indexOf(element);
                            _this.exchangeData.customerList[index].status = 'absent';
                            _this.exchangeData.updateStatus(_this.exchangeData.customerList[index].id, "absent");
                            _this.exchangeData.absentList.push(_this.exchangeData.customerList[index]);
                            if (SMS)
                                SMS.sendSMS(_this.exchangeData.customerList[index].pNumber, 'Your have been abandoned because of absent', function () { }, function () { });
                            _this.exchangeData.customerList.splice(index, 1);
                        }
                    }
                });
            }, 5000);
        });
    };
    HomePage.prototype.blankOccupent = function () {
        this.dummyOccupents = [];
        this.countPendingCustomers();
        for (var i = 1; i <= this.exchangeData.maxCustomers - this.pendingCount; i++) {
            this.dummyOccupents.push(i);
        }
    };
    HomePage.prototype.sendBackToWaiting = function () {
        var _this = this;
        this.exchangeData.customerList.forEach(function (element) {
            if (element.status == "pending") {
                _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].status = "waiting";
                _this.exchangeData.updateStatus(_this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].id, "waiting");
            }
        });
        for (var i = 0; i < this.exchangeData.maxCustomers; i++) {
            this.getFromWaiting();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <section style="font-weight:500; padding-top: 16px;">\n    <table style="width: -webkit-fill-available; text-align: center;">\n      <tr>        \n        <td><input class="roundlabel" readonly value="{{exchangeData.insideCustomerCount}}"></td>\n        <td><input class="roundlabel" readonly value="{{this.exchangeData.maxCustomers-exchangeData.insideCustomerCount}}"></td>\n      </tr>\n      <tr>\n        <td style=" padding-top: 3%;"><label style="font-size:16px;">Current Occupants</label></td>\n        <td style=" padding-top: 3%;"><label style="font-size:16px;">Available Occupants</label></td>\n      </tr>\n    </table>\n  </section>\n\n  <section>\n    <table style="margin-top: 5%; width: -webkit-fill-available; text-align: center;">\n      <tr>\n        <td><label class="quelabel">Current Que Numbers</label></td>\n      </tr>\n      <tr>\n        <td>\n          <ion-scroll scrollY="true" style="height: 170px;">\n            <label class="numberset">\n              <span *ngFor="let cstmrDetails of exchangeData.customerList">\n                <span ion-button class="btngetin" *ngIf="cstmrDetails.status ==\'pending\'" (click)="countGetIn(cstmrDetails)">\n                  {{cstmrDetails.id}}\n                </span>\n              </span>\n              <span *ngFor="let dmy of this.dummyOccupents">\n                <span #empty ion-button class="btngetin"></span>\n              </span>              \n            </label>\n          </ion-scroll>\n        </td>\n      </tr>\n      <tr>\n        <td style="text-align: -webkit-center;">\n          <div class = "clockouter">\n            <circle-progress\n              [percent]="setPresentage"\n              [title]="percent+\' Sec\'"\n              (click)="holdClock()">\n            </circle-progress>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </section>\n\n    <ion-fab left bottom>\n      <button ion-fab class="custom-actionbutton" style="left: 20px;" (click)="goOut()">Out</button>      \n    </ion-fab>\n    <ion-fab right bottom>\n      <button ion-fab class="custom-actionbutton" style="right: 20px;" (click)="skipCustomer()">Next</button>  \n    </ion-fab>\n    \n\n    <div>     \n      <label *ngFor="let x of messages">\n        <h2>{{x}}</h2>\n      </label>\n    </div>\n\n    <div style="margin-top: 100px;" ion-button (click)= "getNextTestNumber()"> Add Customers</div>\n    <!--<div ion-button (click)= "exchangeData.resetTable()"> Reset Table</div>-->\n    <!-- <div ion-button (click)= "test()">test</div> -->\n</ion-content>'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_minimize__["a" /* AppMinimize */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitinglistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WaitinglistPage = /** @class */ (function () {
    function WaitinglistPage(navCtrl, navParams, exchangeData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.exchangeData = exchangeData;
    }
    WaitinglistPage.prototype.ionViewDidEnter = function () { };
    WaitinglistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-waitinglist',template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/pages/waitinglist/waitinglist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>waitinglist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="text-align: -webkit-center;">\n  <label class="numberset">\n    <span *ngFor="let waiting of exchangeData.customerList">\n      <span ion-button class="btngetin" *ngIf="waiting.status==\'waiting\'">\n        {{waiting.id}}\n      </span>\n    </span>\n  </label>\n</ion-content>'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/pages/waitinglist/waitinglist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */]])
    ], WaitinglistPage);
    return WaitinglistPage;
}());

//# sourceMappingURL=waitinglist.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkippedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { populateNodeData } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';
// import { LoadingController } from 'ionic-angular';
var SkippedPage = /** @class */ (function () {
    function SkippedPage(navCtrl, navParams, platform, exchangeData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.exchangeData = exchangeData;
    }
    SkippedPage.prototype.ionViewDidLoad = function () { };
    SkippedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-skipped',template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/pages/skipped/skipped.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>skipped</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="text-align: -webkit-center;">\n  <label class="numberset">\n    <span *ngFor="let skip of exchangeData.customerList">\n      <span ion-button class="btngetin" *ngIf="skip.status==\'skipped\'">\n        {{skip.id}}\n      </span>\n    </span>\n  </label>\n</ion-content>\n'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/pages/skipped/skipped.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */]])
    ], SkippedPage);
    return SkippedPage;
}());

//# sourceMappingURL=skipped.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otp_otp__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_exchange_data_exchange_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(exchangeData, navCtrl, navParams, http, formBuilder) {
        this.exchangeData = exchangeData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.validation_messages = {
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
        this.baseURL = 'http://social.evokemusic.net/api/app/social-que/a-v1/putSellerDetail';
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        this.exchangeData.requestSMSPermission();
    };
    SignupPage.prototype.ionViewWillLoad = function () {
        this.signup = this.formBuilder.group({
            category: ['Pharmacy'],
            shopName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            language: ['English'],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[0]{1}[7]{1}[0-9]{8}'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10)]]
        });
    };
    SignupPage.prototype.submitSellerDetails = function () {
        var _this = this;
        var arrangedMobile = this.signup.value.mobile.substring(1, 11);
        if (this.signup.value.category) {
            console.log(this.signup.value.category, '22222');
        }
        else {
            this.signup.value.category = "Pharmacy";
        }
        if (this.signup.value.language) {
            console.log(this.signup.value.language, '33333');
        }
        else {
            this.signup.value.language = "English";
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "MSISDN": arrangedMobile, "Categories": this.signup.value.category, "Language": this.signup.value.language, "BusinessName": this.signup.value.shopName,
            "City": this.signup.value.city, "Type": "Free", "GPS": "6.8923865,79.8717421", "OccupantCount": 5, "CreatedDate": Date.now() }, url = this.baseURL;
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log("Congratulations data was successfully added", data);
            _this.exchangeData.userDetails = { "ID": data.data.id, "MSISDN": '0' + data.data.MSISDN, "Categories": data.data.Categories, "Language": data.data.Language, "BusinessName": data.data.BusinessName, "City": data.data.City, "OccupantCount": data.data.OccupantCount };
        }, function (error) {
            console.log('Something went wrong!', error);
        });
        this.submitLoginDetails();
    };
    SignupPage.prototype.submitLoginDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__otp_otp__["a" /* OtpPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/pages/signup/signup.html"*/'<ion-content padding class="mainbody">\n  <form [formGroup]="signup" (ngSubmit)="submitSellerDetails()">\n\n    <div style="margin-top: 50px;">\n      <ion-list>\n        <ion-label class="signuplabels">Select your Business Category</ion-label>\n        <ion-item class="inputboxdecoration">\n          <ion-label class="signuplabels" style="color: #6A77ED">Category</ion-label>\n          <ion-select  class="inputtext" style="min-width: -webkit-fill-available;" [(ngModel)]="signup.category" formControlName="category">\n            <ion-option value="Pharmacy">Pharmacy</ion-option>\n            <ion-option value="Stores">Stores</ion-option>\n            <ion-option value="Shop">Shop</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Shop Name</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" placeholder="Enter your shop name here" type="text" [(ngModel)]="signup.shopName" formControlName="shopName"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.shopName">\n          <div class="error-message" *ngIf="signup.get(\'shopName\').hasError(validation.type) && (signup.get(\'shopName\').dirty || signup.get(\'shopName\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>  \n    </div>\n\n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">City</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" placeholder="Enter your nearest city" type="text" [(ngModel)]="signup.city" formControlName="city"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.city">\n          <div class="error-message" *ngIf="signup.get(\'city\').hasError(validation.type) && (signup.get(\'city\').dirty || signup.get(\'city\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>  \n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-list>\n        <ion-label class="signuplabels">Language</ion-label>\n        <ion-item class="inputboxdecoration">   \n          <ion-label class="signuplabels" style="color: #6A77ED">Language</ion-label>     \n          <ion-select class="inputtext" style="min-width: -webkit-fill-available;" [(ngModel)]="signup.language" formControlName="language">\n            <ion-option value="English">English</ion-option>\n            <ion-option value="Sinhala">Sinhala</ion-option>\n            <ion-option value="Tamil">Tamil</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Enter Your Mobile Number</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-input class="inputtext" type="tel" maxlength="10" minlength="10" placeholder="07X XX XX XXX" [(ngModel)]="signup.mobile" formControlName="mobile"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.mobile">\n          <div class="error-message" *ngIf="signup.get(\'mobile\').hasError(validation.type) && (signup.get(\'mobile\').dirty || signup.get(\'mobile\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>  \n    </div>\n  \n    <div style="margin-top: 50px; text-align: center;">\n      <button type="submit" [disabled]="!signup.valid" class="submitbutton" ion-button round outline >Sign Up</button>\n    </div>\n\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/pages/about/about.html"*/'<ion-header>  \n  <ion-navbar color="navbar">    \n    <button ion-button (click)=goHome()>\n      <ion-icon name="arrow-back" style="font-size: x-large;"></ion-icon>\n    </button>\n    <label class="backBtnLable">About</label>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at amet possimus eveniet recusandae? Quos consectetur earum quia ipsam hic provident quis voluptatum enim iusto, illum, eligendi perferendis, sapiente ex?/p>\n</ion-content>\n'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/pages/terms/terms.html"*/'<ion-header>  \n  <ion-navbar color="navbar">    \n    <button ion-button (click)=goHome()>\n      <ion-icon name="arrow-back" style="font-size: x-large;"></ion-icon>\n    </button>\n    <label class="backBtnLable">Terms</label>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at amet possimus eveniet recusandae? Quos consectetur earum quia ipsam hic provident quis voluptatum enim iusto, illum, eligendi perferendis, sapiente ex?/p>\n</ion-content>'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


//platformBrowserDynamic().bootstrapModule(AppModule);
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_minimize__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_circle_progress__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_waitinglist_waitinglist__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_skipped_skipped__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_otp_otp__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_about_about__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_terms_terms__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_exchange_data_exchange_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* SocialQue */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_waitinglist_waitinglist__["a" /* WaitinglistPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_skipped_skipped__["a" /* SkippedPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_terms_terms__["a" /* TermsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* SocialQue */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({
                    // set defaults here
                    radius: 55,
                    outerStrokeWidth: 2,
                    innerStrokeWidth: 3,
                    outerStrokeColor: "#5e6ae0",
                    showInnerStroke: false,
                    backgroundColor: "rgb(244, 244, 244)",
                    animationDuration: 0,
                    showUnits: false,
                    showSubtitle: false,
                    titleFontSize: "14px",
                    animation: false,
                    clockwise: true,
                    showTitle: true,
                    titleColor: "black"
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* SocialQue */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_waitinglist_waitinglist__["a" /* WaitinglistPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_skipped_skipped__["a" /* SkippedPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_terms_terms__["a" /* TermsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_minimize__["a" /* AppMinimize */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
                // FileTransfer,
                // FileUploadOptions,
                // FileTransferObject,
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Storage } from '@ionic/storage';

var ExchangeDataProvider = /** @class */ (function () {
    function ExchangeDataProvider(network, androidPermissions, http, sqlite, platform) {
        this.network = network;
        this.androidPermissions = androidPermissions;
        this.http = http;
        this.sqlite = sqlite;
        this.platform = platform;
        this.occupentCountChanged = false;
        this.customerList = [];
        this.completedList = [];
        this.absentList = [];
        this.insideCustomerCount = 0;
        this.lastCustomerNumber = 100000;
        this.shopName = "";
        this.onConnected();
        this.baseURL = 'http://social.evokemusic.net/api/app/social-que/a-v1/putCustomerDetail';
    }
    ExchangeDataProvider.prototype.setupDB = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'social_que.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("CREATE TABLE IF NOT EXISTS customer_details" +
                    "(CustomerId INTEGER PRIMARY KEY AUTOINCREMENT," +
                    "SellerId INTEGER," +
                    "MSISDN TEXT," +
                    "QueNo INTEGER," +
                    "CreatedTime INTEGER," +
                    "UpdatedTime INTEGER," +
                    "CheckInTime INTEGER," +
                    "Status TEXT)", [])
                    .then(function () { return console.log('Executed SQL 2'); })
                    .catch(function (e) { return console.log(e, 'Fail to execute 2'); });
            })
                .catch(function (e) { return console.log(e); });
            _this.getData();
        });
    };
    ExchangeDataProvider.prototype.insertData = function (generateNumber, pNumber, status) {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'social_que.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("INSERT INTO customer_details (SellerId, MSISDN, QueNo, CreatedTime, Status) VALUES ('" + _this.userDetails.ID + "', '" + pNumber + "', '" + generateNumber + "', strftime('%s','now'), '" + status + "')", [])
                    .then(function (data) { return console.log("INSERTED SUCCESSFULLY", data); })
                    .catch(function (e) { return console.log("FAIL TO INSERT", e); });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ExchangeDataProvider.prototype.getData = function () {
        var _this = this;
        this.customerList = [];
        this.insideCustomerCount = 0;
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'social_que.db',
                location: 'default'
            })
                .then(function (db) {
                // db.executeSql("SELECT * FROM customer_details WHERE Status = 'pending' OR Status = 'waiting' OR Status = 'inside'", [])
                db.executeSql("SELECT * FROM customer_details WHERE Status like '%pending%' OR Status like '%waiting%' OR Status like '%inside%' OR Status like '%skipped%'", [])
                    .then(function (result) {
                    console.log("RETRIEVED SUCCESSFULLY", result.rows);
                    _this.insideCustomerCount = 0;
                    if (result.rows.length > 0) {
                        for (var i = 0; i < result.rows.length; i++) {
                            if (result.rows.item(i).Status == 'inside') {
                                _this.insideCustomerCount++;
                                console.log(_this.insideCustomerCount, '22222', _this.maxCustomers);
                            }
                            _this.lastCustomerNumber = result.rows.item(i).QueNo;
                            _this.customerList.push({ id: result.rows.item(i).QueNo, pNumber: result.rows.item(i).MSISDN, status: result.rows.item(i).Status, updatedTime: result.rows.item(i).UpdatedTime });
                        }
                    }
                })
                    .catch(function (e) { return console.log("FAIL TO RETRIEVE", e); });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ExchangeDataProvider.prototype.syncData = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'social_que.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("SELECT * FROM customer_details", [])
                    .then(function (result) {
                    console.log("SUCCESS", result.rows);
                    if (result.rows.length > 0) {
                        for (var i = 0; i < result.rows.length; i++) {
                            _this.createEntry(result.rows.item(i));
                        }
                    }
                })
                    .catch(function (e) { return console.log("FAIL", e); });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ExchangeDataProvider.prototype.createEntry = function (syncData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "SellerId": syncData.SellerId, "MSISDN": syncData.MSISDN, "QueNo": syncData.QueNo, "Status": syncData.Status,
            "CreatedTime": syncData.CreatedTime, "UpdatedTime": syncData.UpdatedTime, "CheckInTime": syncData.CheckInTime }, url = this.baseURL;
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log("Congratulations data was successfully added", data);
        }, function (error) {
            console.log('Something went wrong!', error);
        });
    };
    ExchangeDataProvider.prototype.resetTable = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'social_que.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("DROP TABLE IF EXISTS customer_details", [])
                    .then(function () { return console.log('Executed Delete 1'); })
                    .catch(function (e) { return console.log(e, 'Fail to Delete 1'); });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ExchangeDataProvider.prototype.updateStatus = function (queNo, status) {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'social_que.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("UPDATE customer_details SET Status = '" + status + "', UpdatedTime = strftime('%s', 'now') WHERE QueNo = '" + queNo + "' ", [])
                    .then(function (data) { return console.log("UPDATED SUCCESSFULLY", data); })
                    .catch(function (e) { return console.log("FAIL TO UPDATED", e); });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ExchangeDataProvider.prototype.updateCheckIn = function (queNo, status) {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'social_que.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("UPDATE customer_details SET Status = '" + status + "', UpdatedTime = strftime('%s', 'now'), CheckInTime = strftime('%s', 'now') WHERE QueNo = '" + queNo + "' ", [])
                    .then(function (data) { return console.log("UPDATED SUCCESSFULLY", data); })
                    .catch(function (e) { return console.log("FAIL TO UPDATED", e); });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ExchangeDataProvider.prototype.requestSMSPermission = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.READ_SMS, _this.androidPermissions.PERMISSION.RECEIVE_SMS, _this.androidPermissions.PERMISSION.SEND_SMS]).
                then(function (success) {
                console.log('Successfully granted sms permissions', success);
            }, function (err) {
                console.log('No permission to handle sms', err);
            });
        }, function (Error) {
            alert(JSON.stringify(Error));
        });
    };
    ExchangeDataProvider.prototype.onConnected = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.network.onConnect().subscribe(function () {
                console.log('network connected!');
                setTimeout(function () {
                    if (_this.network.type === 'wifi') {
                        console.log('we got a wifi connection, woohoo!');
                    }
                    console.log('we got a ', _this.network.type, ' connection!');
                    _this.syncData();
                }, 3000);
            });
        });
    };
    ExchangeDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], ExchangeDataProvider);
    return ExchangeDataProvider;
}());

//# sourceMappingURL=exchange-data.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__waitinglist_waitinglist__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skipped_skipped__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.home = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.waitinglist = __WEBPACK_IMPORTED_MODULE_3__waitinglist_waitinglist__["a" /* WaitinglistPage */];
        this.skipped = __WEBPACK_IMPORTED_MODULE_4__skipped_skipped__["a" /* SkippedPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/pages/tabs/tabs.html"*/'<ion-header>\n  <ion-navbar color="navbar">\n    <ion-title>Social Que</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs tabsplacement="top" color="pagedefault">\n    <ion-tab tabTitle="Home" [root]="home"></ion-tab>\n    <ion-tab tabTitle="Waiting List" [root]="waitinglist"></ion-tab>\n    <ion-tab tabTitle="Skipped" [root]="skipped"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialQue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_terms_terms__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_exchange_data_exchange_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SocialQue = /** @class */ (function () {
    function SocialQue(camera, platform, statusBar, splashScreen, exchangeData, storage) {
        var _this = this;
        this.camera = camera;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.exchangeData = exchangeData;
        this.storage = storage;
        this.date = new Date().getDate();
        this.initializeApp();
        this.checkDate();
        this.pages = [
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */] },
            { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_10__pages_terms_terms__["a" /* TermsPage */] }
        ];
        this.storage.get('currentUser').then(function (val) {
            console.log(val, '111111111');
            _this.exchangeData.userDetails = val;
            if (_this.exchangeData.userDetails != null) {
                _this.exchangeData.maxCustomers = _this.exchangeData.userDetails.OccupantCount;
                _this.exchangeData.shopName = _this.exchangeData.userDetails.BusinessName;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.exchangeData.maxCustomers = 5;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */];
            }
        });
        this.storage.get('currentUserImage').then(function (val) {
            if (val == null) {
                _this.imageURI = "assets/imgs/Test.jpg";
            }
            else {
                _this.imageURI = val;
            }
        });
    }
    SocialQue.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    SocialQue.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    SocialQue.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: true,
            allowEdit: true,
            targetWidth: 200,
            targetHeight: 200
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = "data:image/jpeg;base64," + imageData;
            _this.storage.set('currentUserImage', _this.imageURI);
        }, function (err) {
            console.log(err);
        });
    };
    SocialQue.prototype.checkDate = function () {
        var _this = this;
        this.storage.get('currentDate').then(function (val) {
            if (val == null) {
                console.log('Add new date');
                _this.storage.set('currentDate', _this.date);
            }
            else if (_this.date != val) {
                console.log('Updated to new date');
                _this.exchangeData.resetTable();
                _this.storage.set('currentDate', _this.date);
            }
            else {
                console.log("Same date", _this.date, val);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], SocialQue.prototype, "nav", void 0);
    SocialQue = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chamara/Desktop/project/SocialQue/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-content style= "background: rgb(35, 39, 83);">\n    <ion-list style="text-align-last: center; margin: 50px 0 50px 0;">\n      <ion-icon name="cloud-upload" style="font-size: xx-large; color: white;" (click)="getImage()">\n        <img src="{{imageURI}}" style="border-radius: 50%; width: 50%;" alt="Add Image">\n      </ion-icon>\n      \n      <br><br>\n      <label style="font-size: x-large; margin:20px; color: #ffffff;">{{this.exchangeData.shopName}}</label>\n    </ion-list>\n    <ion-list> \n      <button class="custommenubutton" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}<ion-icon name="arrow-dropright" style="font-size: x-large; float:right"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <label style="color: #ffffff; margin:20px; vertical-align: super;">Version 0.0.1</label>\n  </ion-footer>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/chamara/Desktop/project/SocialQue/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], SocialQue);
    return SocialQue;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[360]);
//# sourceMappingURL=main.js.map