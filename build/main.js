webpackJsonp([7],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detaildata/detaildata.module": [
		274,
		6
	],
	"../pages/page1/page1.module": [
		275,
		5
	],
	"../pages/page2/page2.module": [
		276,
		4
	],
	"../pages/page3/page3.module": [
		277,
		3
	],
	"../pages/page4/page4.module": [
		278,
		2
	],
	"../pages/page5/page5.module": [
		279,
		1
	],
	"../pages/page6/page6.module": [
		280,
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
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(197);
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
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadData();
    }
    HomePage.prototype.loadData = function () {
        var _this = this;
        var data;
        data = this.http.get('http://jsonplaceholder.typicode.com/posts');
        data.subscribe(function (result) {
            _this.items = result;
        });
    };
    HomePage.prototype.FirstPage = function (ket) {
        this.navCtrl.push("Page1Page", { kategori: ket });
    };
    HomePage.prototype.SecondPage = function (ket) {
        this.navCtrl.push("Page2Page", { kategori: ket });
    };
    HomePage.prototype.ThirdPage = function (ket) {
        this.navCtrl.push("Page3Page", { kategori: ket });
    };
    HomePage.prototype.FourthPage = function (ket) {
        this.navCtrl.push("Page4Page", { kategori: ket });
    };
    HomePage.prototype.FifthPage = function (ket) {
        this.navCtrl.push("Page5Page", { kategori: ket });
    };
    HomePage.prototype.SixthPage = function (ket) {
        this.navCtrl.push("Page6Page", { kategori: ket });
    };
    HomePage.prototype.itemClick = function (itemid) {
        this.navCtrl.push("Page1Page", { itemid: itemid });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\myprototype\src\pages\home\home.html"*/'<ion-header>\n\n \n\n   <ion-navbar>\n\n    \n\n     <ion-title>\n\n\n\n 	Menu Utama\n\n     </ion-title>\n\n  \n\n   </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-list>\n\n<ion-item *ngFor="let item of items" (click)="itemClick(item.id)" class="card item-text-wrap item-thumbnail-left" >\n\n <img src="https://media.giphy.com/media/yU0vrGBTI6TKg/giphy.gif" width="100px" height="100px">\n\n <h2>{{item.title}}</h2>\n\n <p>{{item.body}}</p>\n\n</ion-item>\n\n</ion-list>\n\n<ion-grid>\n\n\n\n   <ion-row>\n\n	<ion-col (click)= "FirstPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 1</div>\n\n	</ion-col>\n\n	\n\n	<ion-col (click)= "SecondPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 2</div>\n\n	</ion-col>\n\n   </ion-row>\n\n\n\n   <ion-row>\n\n	<ion-col (click)= "ThirdPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 3</div>\n\n	</ion-col>\n\n\n\n	<ion-col (click)= "FourthPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 4</div>\n\n	</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n	<ion-col (click)= "FifthPage()"> \n\n	<img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 5</div>\n\n	</ion-col>\n\n\n\n	<ion-col (click)= "SixthPage()"> \n\n        <img src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941" width="70%">\n\n	<div class="col-title">Page 6</div>\n\n	</ion-col>\n\n   </ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\myprototype\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(197);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detaildata/detaildata.module#DetaildataPageModule', name: 'DetaildataPage', segment: 'detaildata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page1/page1.module#Page1PageModule', name: 'Page1Page', segment: 'page1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page2/page2.module#Page2PageModule', name: 'Page2Page', segment: 'page2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page3/page3.module#Page3PageModule', name: 'Page3Page', segment: 'page3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page4/page4.module#Page4PageModule', name: 'Page4Page', segment: 'page4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page5/page5.module#Page5PageModule', name: 'Page5Page', segment: 'page5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page6/page6.module#Page6PageModule', name: 'Page6Page', segment: 'page6', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\myprototype\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\myprototype\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map