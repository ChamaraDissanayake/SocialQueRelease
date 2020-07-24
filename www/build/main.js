webpackJsonp([2],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(55);
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
    function OtpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpPage');
    };
    OtpPage.prototype.verifyCode = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/otp/otp.html"*/'<ion-header class="mainbody">\n  <ion-navbar color="pagedefault">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="mainbody">\n  <section  style="margin-top: 50px;">\n    <ion-label class="loginlables">Please Enter The Verification Code</ion-label>\n    <ion-item class="inputboxdecoration">\n      <ion-input class="inputtext" type="password" placeholder="Please check your phone"></ion-input>\n    </ion-item>\n  </section>\n\n  <section class="buttonSection">\n    <button class="submitbutton" ion-button round outline (click)="verifyCode()">Verify</button>\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		685,
		1
	],
	"../pages/otp/otp.module": [
		684,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_exchange_data_exchange_data__ = __webpack_require__(75);
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
    function HomePage(navCtrl, platform, androidPermissions, zone, exchangeData, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.zone = zone;
        this.exchangeData = exchangeData;
        this.loadingCtrl = loadingCtrl;
        this.generateNumber = 100000;
        // activeCustomers: number = 0;
        this.maxCustomers = 5;
        this.insideCount = 0;
        this.percent = 45;
        this.belowNumber = 45;
        this.holdTime = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkPermission();
        }, 5000);
        this.resetClock();
        // this.onSMSArrive(); //Uncomment this before launch in real device
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
        if (this.holdTime == true || this.insideCount == this.maxCustomers) {
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
        this.platform.ready().then(function (readySource) {
            if (SMS)
                SMS.startWatch(function () {
                    console.log('watching started');
                }, function () {
                    console.log('failed to start watching');
                });
            document.addEventListener('onSMSArrive', function (e) {
                this.checkPermission();
                this.replyCustomer(e.data);
            }.bind(_this));
        });
    };
    HomePage.prototype.replyCustomer = function (sms) {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            var key1 = sms.body.includes("covid19");
            var key2 = sms.body.includes("Covid19");
            var key3 = sms.body.includes("COVID19");
            if (key1 || key2 || key3) {
                _this.generateNumber++;
                if (SMS)
                    SMS.sendSMS(sms.address, 'Your number is ' + _this.generateNumber, function () { }, function () { });
                _this.countPendingCustomers();
                if (_this.pendingCount < 5) {
                    _this.exchangeData.customerList.push({ id: _this.generateNumber, pNumber: sms.address, status: "pending", time: Date.now() });
                }
                else {
                    _this.exchangeData.customerList.push({ id: _this.generateNumber, pNumber: sms.address, status: "waiting", time: Date.now() });
                }
                _this.refresh();
            }
        }, function (Error) {
            alert(JSON.stringify(Error));
        });
    };
    HomePage.prototype.countGetIn = function (customer) {
        var _this = this;
        this.insideCount = 0;
        var i = 0;
        this.exchangeData.customerList.forEach(function (element) {
            if (element.status == "inside") {
                _this.insideCount++;
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
        if (this.insideCount < this.maxCustomers) {
            this.insideCount++;
            var index = this.exchangeData.customerList.indexOf(ocptId);
            this.exchangeData.customerList[index].status = "inside";
            if (this.insideCount < this.maxCustomers && this.pendingCount > 0) {
                this.startClock();
            }
            else {
                console.log('calling to hold clock');
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
    };
    HomePage.prototype.goOut = function () {
        this.pageLoader();
        this.loading.present();
        if (this.insideCount > 0) {
            this.insideCount--;
            // this.countPendingCustomers();
            // if(this.holdTime==false && this.pendingCount>0){
            //   console.log(this.pendingCount,'111111')
            this.startClock();
            // }
            this.exchangeData.customerList[0].status = "completed";
            this.exchangeData.completedList.push(this.exchangeData.customerList[0]);
            this.exchangeData.customerList.splice(0, 1);
            this.loading.dismiss();
        }
        else {
            this.loading.dismiss();
        }
    };
    HomePage.prototype.skipCustomer = function () {
        var _this = this;
        this.pageLoader();
        this.loading.present();
        if (this.insideCount < this.maxCustomers) {
            var found_1 = false;
            var i_1 = 0;
            this.exchangeData.customerList.forEach(function (element) {
                if (element.status == 'pending' && found_1 == false) {
                    var index = _this.exchangeData.customerList.indexOf(element);
                    _this.exchangeData.customerList[index].status = "skipped";
                    _this.exchangeData.customerList[index].time = Date.now();
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
    };
    HomePage.prototype.getFromWaiting = function () {
        var _this = this;
        var found = false;
        this.exchangeData.customerList.forEach(function (element) {
            if (element.status == "waiting" && found == false) {
                _this.exchangeData.customerList[_this.exchangeData.customerList.indexOf(element)].status = "pending";
                found = true;
            }
        });
    };
    HomePage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) {
            console.log('Has permission to read sms');
        }, function (err) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS).
                then(function (success) {
                console.log('Successfully granted read sms permission');
            }, function (err) {
                console.log('No permission to read sms permission');
            });
        });
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(function (success) {
            console.log('Has permission to send sms');
        }, function (err) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.SEND_SMS).
                then(function (success) {
                console.log('Successfully granted send sms permission');
            }, function (err) {
                console.log('No permission to send sms permission');
            });
        });
    };
    HomePage.prototype.refresh = function () {
        this.zone.run(function () {
            console.log('force update the screen');
        });
    };
    HomePage.prototype.add = function () {
        this.countPendingCustomers();
        if (this.pendingCount < 5) {
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: +94714142387, status: "pending", time: Date.now() });
        }
        else {
            this.exchangeData.customerList.push({ id: this.generateNumber, pNumber: +94714142387, status: "waiting", time: Date.now() });
        }
        this.generateNumber++;
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <section style="font-weight: bold;">\n    <label style="font-size:24px; vertical-align: text-bottom;">Current Occupents</label>\n    <label style="padding-left: 40px; font-size: 36px;">{{insideCount}}</label>\n  </section>\n\n\n    <table style="margin-top: 40px;">\n      <tr>\n        <td style="width: 45%;"></td>\n        <td><label class="quelabel">Current Que Numbers</label></td>\n      </tr>\n      <tr>\n        <td style="padding-top:30px;">\n          <circle-progress\n            [percent]="setPresentage"\n            [animation]="false"           \n            [clockwise]="true"\n            [showTitle]="true"\n            [title]="percent"\n            (click)="holdClock()">\n          </circle-progress>\n        </td>\n        <td>\n          <label class="numberset">\n            <span *ngFor="let cstmrDetails of exchangeData.customerList">\n              <span ion-button class="btngetin" *ngIf="cstmrDetails.status ==\'pending\'" (click)="countGetIn(cstmrDetails)">\n                {{cstmrDetails.id}}\n              </span>\n            </span>\n          </label>\n        </td>\n      </tr>\n    </table>\n\n    <div style="margin-top: 30%;">\n      <button ion-button danger round class="redbutton" (click)="goOut()">Out</button>\n      <button ion-button danger round class="purplebutton" (click)="skipCustomer()">Next</button>\n    </div>\n\n    <div>     \n      <label *ngFor="let x of messages">\n        <h2>{{x}}</h2>\n      </label>\n    </div>\n\n    <div ion-button (click)= "add()"> Add Customers</div>\n    <!-- <div ion-button (click)= "sqlcon()"> Connect</div> -->\n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitinglistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__ = __webpack_require__(75);
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
    WaitinglistPage.prototype.ionViewDidEnter = function () {
        console.log('waiting list');
    };
    WaitinglistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-waitinglist',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/waitinglist/waitinglist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>waitinglist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <label *ngFor="let waiting of exchangeData.customerList">\n    <p *ngIf="waiting.status==\'waiting\'">{{waiting.id}}</p>\n  </label>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/waitinglist/waitinglist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */]])
    ], WaitinglistPage);
    return WaitinglistPage;
}());

//# sourceMappingURL=waitinglist.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkippedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__ = __webpack_require__(75);
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
var SkippedPage = /** @class */ (function () {
    function SkippedPage(navCtrl, navParams, exchangeData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.exchangeData = exchangeData;
    }
    SkippedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            _this.exchangeData.customerList.forEach(function (element) {
                if (element.status == 'skipped') {
                    // console.log(element)
                    var timeElapsed = Date.now() - element.time;
                    // if(timeElapsed>=1200000){
                    if (timeElapsed >= 10000) {
                        var index = _this.exchangeData.customerList.indexOf(element);
                        _this.exchangeData.customerList[index].status = 'absent';
                        _this.exchangeData.absentList.push(_this.exchangeData.customerList[index]);
                        _this.exchangeData.customerList.splice(index, 1);
                        console.log(_this.exchangeData.absentList, '11111');
                        console.log(_this.exchangeData.customerList, '22222');
                    }
                }
            });
        }, 5000);
    };
    SkippedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-skipped',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/skipped/skipped.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>skipped</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <label *ngFor="let skip of exchangeData.customerList" (click)="getBack(skip)">\n    <p *ngIf="skip.status==\'skipped\'">{{skip.id}}</p>\n  </label>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/skipped/skipped.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */]])
    ], SkippedPage);
    return SkippedPage;
}());

//# sourceMappingURL=skipped.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(55);
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
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.updateLoginDetails = function () {
        this.goHome();
    };
    SettingsPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/settings/settings.html"*/'<ion-header color="navbar">\n  <ion-navbar color="navbar">\n    <button ion-button (click)=goHome()>\n      <ion-icon name="arrow-back" style="font-size: x-large;"></ion-icon>\n    </button>\n    <label class="backBtnLable">Settings</label>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="subbody">\n  <section  style="margin-top: 30px;">\n    <ion-list>\n      <ion-label class="loginlables">Select your Business Category</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-select  class="inputtext" >\n          <ion-option value="Pharmacy" selected>Pharmacy</ion-option>\n          <ion-option value="Stores">Stores</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-label class="loginlables">Shop Name</ion-label>\n    <ion-item class="inputboxdecoration">\n      <ion-input class="inputtext" placeholder="Enter your shop name here"></ion-input>\n    </ion-item>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-label class="loginlables">City</ion-label>\n    <ion-item class="inputboxdecoration">\n      <ion-input class="inputtext" placeholder="Enter your nearest city"></ion-input>\n    </ion-item>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-list>\n      <ion-label class="loginlables">Language</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-select class="inputtext">\n          <ion-option value="English" selected>English</ion-option>\n          <ion-option value="Sinhala">Sinhala</ion-option>\n          <ion-option value="Tamil">Tamil</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-label class="loginlables">Enter Your Mobile Number</ion-label>\n    <ion-item class="inputboxdecoration">        \n      <ion-input class="inputtext" type="tel" placeholder="07X XX XX XXX"></ion-input>\n    </ion-item>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-label class="loginlables">Occupant Count</ion-label>\n    <ion-item class="inputboxdecoration">        \n      <ion-input type="number" class="inputtext" value="5"></ion-input>\n    </ion-item>\n  </section>\n\n  <section  style="margin-top: 50px; text-align: center;">\n    <button class="submitbutton" ion-button round outline (click)="updateLoginDetails()">Update</button>\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(55);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_otp__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.submitLoginDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__otp_otp__["a" /* OtpPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/login/login.html"*/'<ion-content padding class="mainbody">\n    <section  style="margin-top: 50px;">\n      <ion-list>\n        <ion-label class="loginlables">Select your Business Category</ion-label>\n        <ion-item class="inputboxdecoration">        \n          <ion-select  class="inputtext" >\n            <ion-option value="Pharmacy" selected>Pharmacy</ion-option>\n            <ion-option value="Stores">Stores</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <section  style="margin-top: 30px;">\n      <ion-label class="loginlables">Shop Name</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" placeholder="Enter your shop name here"></ion-input>\n      </ion-item>\n    </section>\n\n    <section  style="margin-top: 30px;">\n      <ion-label class="loginlables">City</ion-label>\n      <ion-item class="inputboxdecoration">\n        <ion-input class="inputtext" placeholder="Enter your nearest city"></ion-input>\n      </ion-item>\n    </section>\n\n    <section  style="margin-top: 30px;">\n      <ion-list>\n        <ion-label class="loginlables">Language</ion-label>\n        <ion-item class="inputboxdecoration">        \n          <ion-select class="inputtext">\n            <ion-option value="English" selected>English</ion-option>\n            <ion-option value="Sinhala">Sinhala</ion-option>\n            <ion-option value="Tamil">Tamil</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <section  style="margin-top: 30px;">\n      <ion-label class="loginlables">Enter Your Mobile Number</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-input class="inputtext" type="tel" placeholder="07X XX XX XXX"></ion-input>\n      </ion-item>\n    </section>\n\n    <section  style="margin-top: 50px; text-align: center;">\n      <button class="submitbutton" ion-button round outline (click)="submitLoginDetails()">Sign Up</button>\n    </section>\n    \n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


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

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_waitinglist_waitinglist__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_skipped_skipped__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_otp_otp__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_circle_progress__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_exchange_data_exchange_data__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(683);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { SQLite } from '@ionic-native/sqlite';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* SocialQue */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_waitinglist_waitinglist__["a" /* WaitinglistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_skipped_skipped__["a" /* SkippedPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* SocialQue */], {}, {
                    links: [
                        { loadChildren: '../pages/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({
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
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* SocialQue */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_waitinglist_waitinglist__["a" /* WaitinglistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_skipped_skipped__["a" /* SkippedPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_exchange_data_exchange_data__["a" /* ExchangeDataProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__["a" /* SQLite */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialQue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { LoginPage } from '../pages/login/login';

var SocialQue = /** @class */ (function () {
    function SocialQue(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] }
        ];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], SocialQue.prototype, "nav", void 0);
    SocialQue = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-content>\n    <ion-list>\n      <button class="custommenubutton" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SocialQue);
    return SocialQue;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__waitinglist_waitinglist__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skipped_skipped__ = __webpack_require__(218);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExchangeDataProvider = /** @class */ (function () {
    function ExchangeDataProvider(http, sqlite) {
        var _this = this;
        this.http = http;
        this.sqlite = sqlite;
        this.customerList = [];
        this.completedList = [];
        this.absentList = [];
        setTimeout(function () {
            _this.setupDB();
        }, 5000);
    }
    ExchangeDataProvider.prototype.setupDB = function () {
        console.log(this.sqlite, 'testing db');
        this.sqlite.create({
            name: 'social_que.db',
            location: 'default'
        })
            .then(function (db) {
            console.log('11111');
            db.executeSql('create table customerDetails(name VARCHAR(32))', [])
                .then(function () { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    ExchangeDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], ExchangeDataProvider);
    return ExchangeDataProvider;
}());

//# sourceMappingURL=exchange-data.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map