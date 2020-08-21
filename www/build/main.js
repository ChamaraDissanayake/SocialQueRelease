webpackJsonp([0],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_exchange_data_exchange_data__ = __webpack_require__(39);
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
    function OtpPage(exchangeData, navCtrl, navParams, http, formBuilder, storage) {
        this.exchangeData = exchangeData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.otpFG = this.formBuilder.group({
            otp: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    }
    OtpPage.prototype.ionViewDidLoad = function () {
    };
    OtpPage.prototype.verifyCode = function () {
        var _this = this;
        this.http.get('http://social.evokemusic.net/api/app/social-que/a-v1/otpValidate?ID=' + this.exchangeData.userDetails.ID + '&OTP=' + this.otpFG.value.otp)
            .subscribe(function (data) {
            // this.exchangeData.userDetails = {"ID" : data.data.id ,"MSISDN" : data.data.MSISDN, "Categories" : data.data.Categories, "Language": data.data.Language, "BusinessName" : data.data.BusinessName, "City" : data.data.City, "OccupantCount":data.data.OccupantCount};
            if (data.status == 'verification-succeed') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                _this.storage.set('currentUser', _this.exchangeData.userDetails);
            }
            else {
                _this.otpFG.reset();
                alert('Please try agani!');
            }
        }, function (error) {
            console.log(error);
        });
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/otp/otp.html"*/'<ion-header class="mainbody">\n  <ion-navbar color="pagedefault">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="mainbody">\n  <form [formGroup]="otpFG" (ngSubmit)="verifyCode()">\n\n    <div style="margin-top: 50px;">\n      <ion-label class="otplabels">Please Enter The Verification Code</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext changeside" type="tel" maxlength="4" minlength="4" placeholder="____" [(ngModel)]="otpFG.otp"\n          formControlName="otp"></ion-input>\n      </ion-item>\n      <!-- <ion-label class="otplabels">Resend Verification Code: <span class="otplabels clicklink" (click)="verifyCode()">\n          Resend</span></ion-label> -->\n    </div>\n\n    <div class="buttonSection">\n      <button type="submit" [disabled]="!otpFG.valid" class="submitbutton" ion-button round outline>Verify</button>\n    </div>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
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

/***/ 210:
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
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_exchange_data_exchange_data__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__otp_otp__ = __webpack_require__(144);
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
        this.baseURL = 'http://social.evokemusic.net/api/app/social-que/a-v1/putSellerDetail';
        this.editsignup = this.formBuilder.group({
            category: ['Pharmacy'],
            shopName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            language: ['English'],
            occupant: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0]{1}[7]{1}[0-9]{8}'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10)]]
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.updateUserDetails = function () {
        var _this = this;
        this.exchangeData.maxCustomers = this.editsignup.value.occupant;
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
        if (this.editsignup.value.mobile) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = {
                "ID": this.exchangeData.userDetails.ID, "MSISDN": this.editsignup.value.mobile, "Categories": this.editsignup.value.category, "Language": this.editsignup.value.language, "BusinessName": this.editsignup.value.shopName,
                "City": this.editsignup.value.city, "Type": "Free", "GPS": "6.8923865,79.8717421", "OccupantCount": this.editsignup.value.occupant, "CreatedDate": Date.now()
            }, url = this.baseURL;
            this.http.post(url, JSON.stringify(options), headers)
                .subscribe(function (data) {
                console.log("Congratulations data was successfully added", data);
                if (_this.exchangeData.userDetails.MSISDN == _this.editsignup.value.mobile) {
                    _this.exchangeData.userDetails = { "ID": data.data.id, "MSISDN": data.data.MSISDN, "Categories": data.data.Categories, "Language": data.data.Language, "BusinessName": data.data.BusinessName, "City": data.data.City, "OccupantCount": data.data.OccupantCount };
                    _this.storage.set('currentUser', _this.exchangeData.userDetails);
                    _this.goHome();
                }
                else {
                    _this.exchangeData.userDetails = { "ID": data.data.id, "MSISDN": data.data.MSISDN, "Categories": data.data.Categories, "Language": data.data.Language, "BusinessName": data.data.BusinessName, "City": data.data.City, "OccupantCount": data.data.OccupantCount };
                    _this.storage.set('currentUser', null);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__otp_otp__["a" /* OtpPage */]);
                }
            }, function (error) {
                console.log('Something went wrong!', error);
            });
        }
    };
    SettingsPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/settings/settings.html"*/'<ion-header color="navbar">\n  <ion-navbar color="navbar">\n    <button ion-button (click)=goHome()>\n      <ion-icon name="arrow-back" style="font-size: x-large;"></ion-icon>\n    </button>\n    <label class="backBtnLable">Settings</label>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="subbody">\n  <form [formGroup]="editsignup" (ngSubmit)="updateUserDetails()">\n    <div style="margin-top: 50px;">\n      <ion-list>\n        <ion-label class="signuplabels">Select your Business Category</ion-label>\n        <ion-item class="inputboxdecoration">\n          <ion-label class="signuplabels" style="color: #6A77ED">Category</ion-label>\n          <ion-select  class="inputtext" style="min-width: -webkit-fill-available;" [(ngModel)]="editsignup.category" formControlName="category" value="{{this.exchangeData.userDetails.Categories}}">\n            <ion-option value="Pharmacy">Pharmacy</ion-option>\n            <ion-option value="Stores">Stores</ion-option>\n            <ion-option value="Shop">Shop</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Shop Name</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" style="min-width: -webkit-fill-available;" placeholder="Enter your shop name here" type="text" [(ngModel)]="editsignup.shopName" formControlName="shopName" value="{{this.exchangeData.userDetails.BusinessName}}"></ion-input>\n      </ion-item>      \n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">City</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" style="min-width: -webkit-fill-available;" placeholder="Enter your nearest city" type="text" [(ngModel)]="editsignup.city" formControlName="city" value="{{this.exchangeData.userDetails.City}}"></ion-input>\n      </ion-item>\n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-list>\n        <ion-label class="signuplabels">Language</ion-label>\n        <ion-item class="inputboxdecoration">   \n          <ion-label class="signuplabels" style="color: #6A77ED">Language</ion-label>     \n          <ion-select class="inputtext" style="min-width: -webkit-fill-available;" [(ngModel)]="editsignup.language" formControlName="language" value="{{this.exchangeData.userDetails.Language}}">\n            <ion-option value="English">English</ion-option>\n            <ion-option value="Sinhala">Sinhala</ion-option>\n            <ion-option value="Tamil">Tamil</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Enter Your Mobile Number</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-input class="inputtext" style="min-width: -webkit-fill-available;" type="tel" maxlength="10" minlength="10" [(ngModel)]="editsignup.mobile" formControlName="mobile" value="{{this.exchangeData.userDetails.MSISDN}}"></ion-input>\n      </ion-item>\n    </div>\n\n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Occupant Count</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-input class="inputtext" style="min-width: -webkit-fill-available;" type="tel" maxlength = "3" [(ngModel)]="editsignup.occupant" formControlName="occupant" value="{{this.exchangeData.userDetails.OccupantCount}}" onfocus="value=\'\'"></ion-input>\n      </ion-item>\n    </div>\n  \n    <div style="margin-top: 50px; text-align: center;">\n      <button type="submit" [disabled]="!editsignup.valid" class="submitbutton" ion-button round outline >Update</button>\n    </div>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/settings/settings.html"*/,
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_exchange_data_exchange_data__ = __webpack_require__(39);
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
    function HomePage(
        // private network: Network,
        navCtrl, platform, androidPermissions, zone, exchangeData, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.zone = zone;
        this.exchangeData = exchangeData;
        this.loadingCtrl = loadingCtrl;
        this.percent = 45;
        this.belowNumber = 45;
        this.holdTime = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // this.exchangeData.requestSMSPermission();
        this.checkPermission();
        this.resetClock();
        // this.onSMSArrive(); //Uncomment this before launch in real device
        this.abandonCustomer();
        this.exchangeData.setupDB();
    };
    HomePage.prototype.pageLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    };
    HomePage.prototype.startClock = function () {
        var _this = this;
        // this.holdTime = false;
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
            }, 100);
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
    HomePage.prototype.checkSMS = function (sms) {
        var _this = this;
        this.platform.ready().then(function () {
            var key1 = sms.body.includes("covid19");
            var key2 = sms.body.includes("Covid19");
            var key3 = sms.body.includes("COVID19");
            var existingNumber = false;
            if (key1 || key2 || key3) {
                if (_this.exchangeData.customerList.length) {
                    _this.exchangeData.customerList.forEach(function (element) {
                        if (sms.address == element.pNumber) {
                            existingNumber = true;
                            if (element.status == 'skipped') {
                                _this.countPendingCustomers();
                                _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].updatedTime = Date.now();
                                if (_this.pendingCount < _this.exchangeData.maxCustomers) {
                                    _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].status = "pending";
                                    _this.exchangeData.updateStatus(_this.exchangeData.customerList[_this.exchangeData.customerList
                                        .indexOf(element)].id, "pending");
                                }
                                else {
                                    _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].status = "waiting";
                                    _this.exchangeData.updateStatus(_this.exchangeData.customerList[_this.exchangeData.customerList
                                        .indexOf(element)].id, "waiting");
                                }
                                _this.refresh();
                            }
                        }
                    });
                    // Promise.all(this.exchangeData.customerList).then(() => 
                    //   console.log('for loop ended')
                    // );
                    if (existingNumber) {
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
        // if(SMS) SMS.sendSMS(sms.address, 'Your number is ' + this.generateNumber, function(){}, function(){});
        this.countPendingCustomers();
        if (this.pendingCount < this.exchangeData.maxCustomers) {
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: sms.address, status: "pending", createdTime: Date.now() });
            this.exchangeData.insertData(this.generateNumber, sms.address, "pending");
        }
        else {
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: sms.address, status: "waiting", createdTime: Date.now() });
            this.exchangeData.insertData(this.generateNumber, sms.address, "waiting");
        }
        this.refresh();
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
                console.log('Calling to hold clock');
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
                    console.log('Inform to ', _this.exchangeData.customerList[index].pNumber);
                    // if(SMS) SMS.sendSMS(this.exchangeData.customerList[index].pNumber, 'Your have been skipped because of absent in time. Please resend previous sms before 20 minutes to re-enter with old number', function(){}, function(){});
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
    };
    HomePage.prototype.getFromWaiting = function () {
        var _this = this;
        var found = false;
        this.exchangeData.customerList.forEach(function (element) {
            if (element.status == "waiting" && found == false) {
                _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].status = "pending";
                _this.exchangeData.updateStatus(_this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].id, "pending");
                found = true;
            }
        });
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
            this.add();
        }
        else {
            this.generateNumber = this.exchangeData.lastCustomerNumber + 1;
            this.add();
        }
    };
    HomePage.prototype.add = function () {
        this.countPendingCustomers();
        if (this.pendingCount < this.exchangeData.maxCustomers) {
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: +94714142387, status: "pending", createdTime: Date.now() });
            this.exchangeData.insertData(this.generateNumber, +94714142387, "pending");
        }
        else {
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: +94714142387, status: "waiting", createdTime: Date.now() });
            this.exchangeData.insertData(this.generateNumber, +94714142387, "waiting");
        }
    };
    HomePage.prototype.countPendingCustomers = function () {
        var _this = this;
        this.pendingCount = 0;
        this.exchangeData.customerList.forEach(function (element) {
            if (element.status == "pending") {
                _this.pendingCount++;
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
                        // if(timeElapsed>=1 200 000){
                        if (timeElapsed >= 20000) {
                            console.log('íf is working');
                            var index = _this.exchangeData.customerList.indexOf(element);
                            _this.exchangeData.customerList[index].status = 'absent';
                            _this.exchangeData.updateStatus(_this.exchangeData.customerList[index].id, "absent");
                            _this.exchangeData.absentList.push(_this.exchangeData.customerList[index]);
                            // if(SMS) SMS.sendSMS(this.exchangeData.customerList[index].pNumber, 'Your have been abandoned because of absent', function(){}, function(){});
                            _this.exchangeData.customerList.splice(index, 1);
                        }
                    }
                });
            }, 5000);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <section style="font-weight: bold;">\n    <table style="min-width: -webkit-fill-available;">\n      <tr>\n        <td><label style="font-size:24px; vertical-align: text-bottom;">Current Occupents</label></td>\n        <td><label style="font-size: 36px; float: right; margin-right:50%;">{{exchangeData.insideCustomerCount}}</label></td>\n      </tr>\n      <tr>\n        <td><label style="font-size:24px; vertical-align: text-bottom;">Available Occupents</label></td>\n        <td><label style="font-size: 36px; float: right; margin-right:50%;">{{this.exchangeData.maxCustomers-exchangeData.insideCustomerCount}}</label></td>\n      </tr>\n    </table>\n  </section>\n\n\n    <table style="margin-top: 40px;">\n      <tr>\n        <td style="width: 45%;"></td>\n        <td><label class="quelabel">Current Que Numbers</label></td>\n      </tr>\n      <tr>\n        <td style="padding-top:30px;">\n          <circle-progress\n            [percent]="setPresentage"\n            [animation]="false"           \n            [clockwise]="true"\n            [showTitle]="true"\n            [title]="percent"\n            (click)="holdClock()">\n          </circle-progress>\n        </td>\n        <td style="display: flow-root;">\n          <label class="numberset">\n            <span *ngFor="let cstmrDetails of exchangeData.customerList">\n              <span ion-button class="btngetin" *ngIf="cstmrDetails.status ==\'pending\'" (click)="countGetIn(cstmrDetails)">\n                {{cstmrDetails.id}}\n              </span>\n            </span>\n          </label>\n        </td>\n      </tr>\n    </table>\n\n    <div style="margin-top: 30%;">\n      <button ion-button danger round class="redbutton" (click)="goOut()">Out</button>\n      <button ion-button danger round class="purplebutton" (click)="skipCustomer()">Next</button>\n    </div>\n\n    <div>     \n      <label *ngFor="let x of messages">\n        <h2>{{x}}</h2>\n      </label>\n    </div>\n\n    <div ion-button (click)= "getNextTestNumber()"> Add Customers</div>\n    <!--<div ion-button (click)= "exchangeData.resetTable()"> Reset Table</div>\n    <div ion-button (click)= "requestSMSPermission()"> Check Permission</div>\n    <div ion-button (click)= "exchangeData.syncData()"> Sync Data</div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitinglistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__ = __webpack_require__(39);
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
            selector: 'page-waitinglist',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/waitinglist/waitinglist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>waitinglist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <label *ngFor="let waiting of exchangeData.customerList">\n    <p *ngIf="waiting.status==\'waiting\'" class="queText">{{waiting.id}}</p>\n  </label>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/waitinglist/waitinglist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */]])
    ], WaitinglistPage);
    return WaitinglistPage;
}());

//# sourceMappingURL=waitinglist.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkippedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__ = __webpack_require__(39);
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
            selector: 'page-skipped',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/skipped/skipped.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>skipped</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <label *ngFor="let skip of exchangeData.customerList" (click)="getBack(skip)">\n    <p *ngIf="skip.status==\'skipped\'" class="queText">{{skip.id}}</p>\n  </label>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/skipped/skipped.html"*/,
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

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otp_otp__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_exchange_data_exchange_data__ = __webpack_require__(39);
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
        this.baseURL = 'http://social.evokemusic.net/api/app/social-que/a-v1/putSellerDetail';
        this.signup = this.formBuilder.group({
            category: ['Pharmacy'],
            shopName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            language: ['English'],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[0]{1}[7]{1}[0-9]{8}'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10)]]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        this.exchangeData.requestSMSPermission();
    };
    SignupPage.prototype.submitSellerDetails = function () {
        var _this = this;
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "MSISDN": this.signup.value.mobile, "Categories": this.signup.value.category, "Language": this.signup.value.language, "BusinessName": this.signup.value.shopName,
            "City": this.signup.value.city, "Type": "Free", "GPS": "6.8923865,79.8717421", "OccupantCount": 5, "CreatedDate": Date.now() }, url = this.baseURL;
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log("Congratulations data was successfully added", data);
            _this.exchangeData.userDetails = { "ID": data.data.id, "MSISDN": data.data.MSISDN, "Categories": data.data.Categories, "Language": data.data.Language, "BusinessName": data.data.BusinessName, "City": data.data.City, "OccupantCount": data.data.OccupantCount };
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
            selector: 'page-signup',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/signup/signup.html"*/'<ion-content padding class="mainbody">\n  <form [formGroup]="signup" (ngSubmit)="submitSellerDetails()">\n\n    <div style="margin-top: 50px;">\n      <ion-list>\n        <ion-label class="signuplabels">Select your Business Category</ion-label>\n        <ion-item class="inputboxdecoration">\n          <ion-label class="signuplabels" style="color: #6A77ED">Category</ion-label>\n          <ion-select  class="inputtext" style="min-width: -webkit-fill-available;" [(ngModel)]="signup.category" formControlName="category">\n            <ion-option value="Pharmacy">Pharmacy</ion-option>\n            <ion-option value="Stores">Stores</ion-option>\n            <ion-option value="Shop">Shop</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Shop Name</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" style="min-width: -webkit-fill-available;" placeholder="Enter your shop name here" type="text" [(ngModel)]="signup.shopName" formControlName="shopName"></ion-input>\n      </ion-item>      \n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">City</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" style="min-width: -webkit-fill-available;" placeholder="Enter your nearest city" type="text" [(ngModel)]="signup.city" formControlName="city"></ion-input>\n      </ion-item>\n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-list>\n        <ion-label class="signuplabels">Language</ion-label>\n        <ion-item class="inputboxdecoration">   \n          <ion-label class="signuplabels" style="color: #6A77ED">Language</ion-label>     \n          <ion-select class="inputtext" style="min-width: -webkit-fill-available;" [(ngModel)]="signup.language" formControlName="language">\n            <ion-option value="English">English</ion-option>\n            <ion-option value="Sinhala">Sinhala</ion-option>\n            <ion-option value="Tamil">Tamil</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div style="margin-top: 30px;">\n      <ion-label class="signuplabels">Enter Your Mobile Number</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-input class="inputtext" style="min-width: -webkit-fill-available;" type="tel" maxlength="10" minlength="10" placeholder="07X XX XX XXX" [(ngModel)]="signup.mobile" formControlName="mobile"></ion-input>\n      </ion-item>\n    </div>\n  \n    <div style="margin-top: 50px; text-align: center;">\n      <button type="submit" [disabled]="!signup.valid" class="submitbutton" ion-button round outline >Sign Up</button>\n    </div>\n\n  </form>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/signup/signup.html"*/,
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

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(59);
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
            selector: 'page-about',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/about/about.html"*/'<ion-header>  \n  <ion-navbar color="navbar">    \n    <button ion-button (click)=goHome()>\n      <ion-icon name="arrow-back" style="font-size: x-large;"></ion-icon>\n    </button>\n    <label class="backBtnLable">About</label>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at amet possimus eveniet recusandae? Quos consectetur earum quia ipsam hic provident quis voluptatum enim iusto, illum, eligendi perferendis, sapiente ex?/p>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


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

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_waitinglist_waitinglist__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_skipped_skipped__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_otp_otp__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_circle_progress__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_android_permissions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_exchange_data_exchange_data__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_network__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* SocialQue */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_waitinglist_waitinglist__["a" /* WaitinglistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_skipped_skipped__["a" /* SkippedPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* SocialQue */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_16_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({
                    // set defaults here
                    radius: 50,
                    outerStrokeWidth: 10,
                    // innerStrokeWidth: 0,
                    outerStrokeColor: "#0D1333",
                    showInnerStroke: false,
                    // innerStrokeColor: "#FFFFFF",
                    animationDuration: 0,
                    showUnits: false,
                    showSubtitle: false,
                    titleFontSize: "36"
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* SocialQue */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_waitinglist_waitinglist__["a" /* WaitinglistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_skipped_skipped__["a" /* SkippedPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__["a" /* SQLite */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(260);
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
        this.customerList = [];
        this.completedList = [];
        this.absentList = [];
        this.insideCustomerCount = 0;
        this.lastCustomerNumber = 100000;
        // alert('provider is running')
        // this.setupDB();
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
            // this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).
            // then(success => {
            //   console.log('Successfully granted send sms permission')
            // },
            // err => {
            //   console.log('No permission to send sms permission')
            // });
            // this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECEIVE_SMS).
            // then(success => {
            //   console.log('Successfully granted send sms permission')
            // },
            // err => {
            //   console.log('No permission to send sms permission')
            // });
            // this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).
            // then(success => {
            //   console.log('Successfully granted send sms permission')
            // },
            // err => {
            //   console.log('No permission to send sms permission')
            // }); 
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

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialQue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_exchange_data_exchange_data__ = __webpack_require__(39);
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
    function SocialQue(platform, statusBar, splashScreen, exchangeData, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.exchangeData = exchangeData;
        this.storage = storage;
        this.initializeApp();
        this.pages = [
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */] }
        ];
        this.storage.get('currentUser').then(function (val) {
            console.log(val, '111111111');
            _this.exchangeData.userDetails = val;
            if (_this.exchangeData.userDetails != null) {
                _this.exchangeData.maxCustomers = _this.exchangeData.userDetails.OccupantCount;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.exchangeData.maxCustomers = 5;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */];
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], SocialQue.prototype, "nav", void 0);
    SocialQue = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-content>\n    <ion-list>\n      <button class="custommenubutton" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SocialQue);
    return SocialQue;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__waitinglist_waitinglist__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skipped_skipped__ = __webpack_require__(263);
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
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/tabs/tabs.html"*/'<ion-header>\n  <ion-navbar color="navbar">\n    <ion-title>Social Que</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs tabsplacement="top" color="pagedefault">\n    <ion-tab tabTitle="Home" [root]="home"></ion-tab>\n    <ion-tab tabTitle="Waiting List" [root]="waitinglist"></ion-tab>\n    <ion-tab tabTitle="Skipped" [root]="skipped"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map