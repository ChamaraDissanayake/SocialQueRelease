webpackJsonp([2],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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



/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            selector: 'page-otp',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/otp/otp.html"*/'<!--\n  Generated template for the OtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="mainbody">\n  <ion-navbar color="pagedefault">\n    <!-- <ion-title></ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="mainbody">\n  <section  style="margin-top: 50px;">\n    <ion-label class="loginlables">Please Enter The Verification Code</ion-label>\n    <ion-item class="inputboxdecoration">\n      <ion-input class="inputtext" type="password" placeholder="Please check your phone"></ion-input>\n    </ion-item>\n  </section>\n\n  <section class="buttonSection">\n    <button class="submitbutton" ion-button round outline (click)="verifyCode()">Verify</button>\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		681,
		1
	],
	"../pages/otp/otp.module": [
		682,
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
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(207);
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
    function HomePage(navCtrl, platform, androidPermissions) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.percent = 45;
        this.belowNumber = 45;
        this.holdTime = false;
        this.occupentId = [
            { id: 0, pNumber: +94714444440 },
            { id: 1, pNumber: +94714444441 },
            { id: 2, pNumber: +94714444442 },
            { id: 3, pNumber: +94714444443 },
            { id: 4, pNumber: +94714444444 },
            { id: 5, pNumber: +94714444445 },
            { id: 6, pNumber: +94714444446 },
            { id: 7, pNumber: +94714444447 },
            { id: 8, pNumber: +94714444448 },
            { id: 9, pNumber: +94714444449 }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.skipCustomer();
    };
    HomePage.prototype.clickNext = function () {
        this.occupentId.splice(0, 1);
        this.setPresentage = 100;
        this.percent = 45;
        this.skipCustomer();
    };
    // nextOccupent(ocptId){
    //   let index = this.occupentId.indexOf(ocptId);
    //   console.log(index,'1111');
    //   if(index > -1){
    //     this.occupentId.splice(index, 1);
    //   }
    // }
    HomePage.prototype.skipCustomer = function () {
        var _this = this;
        clearInterval(this.timer);
        if (this.occupentId[0] != undefined) {
            this.timer = setInterval(function () {
                _this.percent--;
                if (_this.percent == 0) {
                    clearInterval(_this.timer);
                    _this.clickNext();
                }
                _this.setPresentage = ((_this.percent / _this.belowNumber) * 100);
            }, 1000);
        }
    };
    HomePage.prototype.holdClock = function () {
        if (this.holdTime == false) {
            clearInterval(this.timer);
            this.holdTime = true;
        }
        else {
            this.skipCustomer();
            this.holdTime = false;
        }
    };
    HomePage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) {
            if (success.hasPermission == false) {
            }
            else {
                _this.readSMSList();
            }
        }, function (err) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS).
                then(function (success) {
                _this.readSMSList();
            }, function (err) {
                alert("cancelled");
            });
        });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
    };
    HomePage.prototype.readSMSList = function () {
        var _this = this;
        this.tempList = [];
        this.platform.ready().then(function (readySource) {
            var filter = {
                box: 'inbox',
                indexFrom: 0,
                maxCount: 500,
            };
            if (SMS)
                SMS.listSMS(filter, function (ListSms) {
                    ListSms.forEach(function (element) {
                        var check1 = element.body.includes("covid19");
                        var check2 = element.body.includes("Covid19");
                        var check3 = element.body.includes("COVID19");
                        if (check1 == true || check2 == true || check3 == true) {
                            _this.tempList.push([element.address]);
                        }
                    });
                    _this.messages = _this.tempList;
                    _this.sendSMStoCustomer();
                }, function (Error) {
                    alert(JSON.stringify(Error));
                });
        });
    };
    HomePage.prototype.sendSMStoCustomer = function () {
        var _this = this;
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).
            then(function (success) {
            if (success.hasPermission == true) {
                _this.platform.ready().then(function (readySource) {
                    _this.messages.forEach(function (element) {
                        console.log(element, '1111111');
                        if (SMS)
                            SMS.sendSMS(element, "Test SMS send from SocialQue app", function () { }, function () { });
                    });
                });
            }
            else {
                console.log(success);
            }
        }, function (err) {
            alert("cancelled");
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <section style="font-weight: bold;">\n    <label style="font-size:24px; vertical-align: text-bottom;">Current Occupents</label>\n    <label style="padding-left: 40px; font-size: 36px;">85</label>\n  </section>\n\n\n    <table style="margin-top: 40px;">\n      <tr>\n        <td style="width: 45%;"></td>\n        <td><label class="quelabel">Current Que Numbers</label></td>\n      </tr>\n      <tr>\n        <td style="padding-top:30px;">\n          <circle-progress\n            [percent]="setPresentage"\n            [animation]="false"           \n            [clockwise]="true"\n            [showTitle]="true"\n            [title]="percent"\n            (click)="holdClock()">\n          </circle-progress>\n        </td>\n        <td><label class="numberset" (click)="clickNext()"><span style="padding: 4px;" *ngFor="let ocptId of occupentId"> {{ocptId.id}} </span></label></td>\n      </tr>\n    </table>\n\n    <div style="margin-top: 30%;">\n      <button ion-button danger round class="redbutton">Out</button>\n      <button ion-button danger round class="purplebutton" (click)="clickNext()">Next</button>\n    </div>\n\n    <div style="margin-top: 20px;">\n      <button ion-button round (click)="sendSMStoCustomer()">Send Message</button>\n      <button ion-button round (click)="checkPermission()">Read Messages</button>\n    </div>\n\n    <div>     \n      <label *ngFor="let x of messages">\n        <h2>{{x}}</h2>\n      </label>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitinglistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the WaitinglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WaitinglistPage = /** @class */ (function () {
    function WaitinglistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WaitinglistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WaitinglistPage');
    };
    WaitinglistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-waitinglist',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/waitinglist/waitinglist.html"*/'<!--\n  Generated template for the WaitinglistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>waitinglist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt libero accusamus vitae magnam amet repellat, qui molestias possimus officiis fugit et nostrum, iusto, expedita maiores praesentium. Itaque praesentium accusantium dolor.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/waitinglist/waitinglist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WaitinglistPage);
    return WaitinglistPage;
}());

//# sourceMappingURL=waitinglist.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkippedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the SkippedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SkippedPage = /** @class */ (function () {
    function SkippedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SkippedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SkippedPage');
    };
    SkippedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-skipped',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/skipped/skipped.html"*/'<!--\n  Generated template for the SkippedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>skipped</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, unde maxime fuga repellendus sint illo culpa nemo et hic, esse facilis quae? Quod corrupti distinctio a consequatur fugiat molestiae provident.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/skipped/skipped.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SkippedPage);
    return SkippedPage;
}());

//# sourceMappingURL=skipped.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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



/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            selector: 'page-settings',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="navbar">\n  <ion-navbar color="navbar">\n    <button ion-button (click)=goHome()>\n      <ion-icon name="arrow-back" style="font-size: x-large;"></ion-icon>\n    </button>\n    <label class="backBtnLable">Settings</label>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="subbody">\n  <section  style="margin-top: 30px;">\n    <ion-list>\n      <ion-label class="loginlables">Select your Business Category</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-select  class="inputtext" >\n          <ion-option value="Pharmacy" selected>Pharmacy</ion-option>\n          <ion-option value="Stores">Stores</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-label class="loginlables">Shop Name</ion-label>\n    <ion-item class="inputboxdecoration">\n      <ion-input class="inputtext" placeholder="Enter your shop name here"></ion-input>\n    </ion-item>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-label class="loginlables">City</ion-label>\n    <ion-item class="inputboxdecoration">\n      <ion-input class="inputtext" placeholder="Enter your nearest city"></ion-input>\n    </ion-item>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-list>\n      <ion-label class="loginlables">Language</ion-label>\n      <ion-item class="inputboxdecoration">        \n        <ion-select class="inputtext">\n          <ion-option value="English" selected>English</ion-option>\n          <ion-option value="Sinhala">Sinhala</ion-option>\n          <ion-option value="Tamil">Tamil</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-label class="loginlables">Enter Your Mobile Number</ion-label>\n    <ion-item class="inputboxdecoration">        \n      <ion-input class="inputtext" type="tel" placeholder="07X XX XX XXX"></ion-input>\n    </ion-item>\n  </section>\n\n  <section  style="margin-top: 30px;">\n    <ion-label class="loginlables">Occupant Count</ion-label>\n    <ion-item class="inputboxdecoration">        \n      <ion-input type="number" class="inputtext"></ion-input>\n    </ion-item>\n  </section>\n\n  <section  style="margin-top: 50px; text-align: center;">\n    <button class="submitbutton" ion-button round outline (click)="updateLoginDetails()">Update</button>\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_otp__ = __webpack_require__(149);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_waitinglist_waitinglist__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_skipped_skipped__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_otp_otp__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_circle_progress__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__ = __webpack_require__(207);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_waitinglist_waitinglist__["a" /* WaitinglistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_skipped_skipped__["a" /* SkippedPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* SocialQue */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_waitinglist_waitinglist__["a" /* WaitinglistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_skipped_skipped__["a" /* SkippedPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialQue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ListPage } from '../pages/list/list';
// import { LoginPage } from '../pages/login/login';

// import { LoginPage } from '../pages/login/login';
// import { HomePage } from '../pages/home/home';
// import { HomePage } from '../pages/home/home';
var SocialQue = /** @class */ (function () {
    function SocialQue(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] }
        ];
    }
    SocialQue.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    SocialQue.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], SocialQue.prototype, "nav", void 0);
    SocialQue = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content>\n    <ion-list>\n      <button class="custommenubutton" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SocialQue);
    return SocialQue;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__waitinglist_waitinglist__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skipped_skipped__ = __webpack_require__(212);
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
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar">\n    <ion-title>Social Que</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs tabsplacement="top" color="pagedefault">\n    <ion-tab tabTitle="Home" [root]="home"></ion-tab>\n    <ion-tab tabTitle="Waiting List" [root]="waitinglist"></ion-tab>\n    <ion-tab tabTitle="Skipped" [root]="skipped"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/dhanushka/Desktop/project/SocialQue/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map