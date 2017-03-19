webpackJsonp([1,4],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetGameDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetGameDataService = (function () {
    function GetGameDataService(http) {
        this.http = http;
        console.log("post service initialized");
    }
    GetGameDataService.prototype.getGameData = function () {
        return this.http.get('/api/getData')
            .map(function (res) { return res.json(); });
    };
    GetGameDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GetGameDataService);
    return GetGameDataService;
    var _a;
}());
//# sourceMappingURL=/home/rajat/Study/March 2017/Capillary Full Stack/public/src/get-game-data.service.js.map

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 386;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(506);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/rajat/Study/March 2017/Capillary Full Stack/public/src/main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(670),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/rajat/Study/March 2017/Capillary Full Stack/public/src/app.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_get_game_data_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__service_get_game_data_service__["a" /* GetGameDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/rajat/Study/March 2017/Capillary Full Stack/public/src/app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_get_game_data_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(flashMessage, getGameDataSer) {
        var _this = this;
        this.flashMessage = flashMessage;
        this.getGameDataSer = getGameDataSer;
        this.getGameDataSer.getGameData().subscribe(function (gameData) {
            // this.posts=posts;
            /*
                    {
                    "_id":"58cd2224c33b17f60ed96fe7",
                    "updatedAt":"2017-03-18T12:03:48.425Z",
                    "createdAt":"2017-03-18T12:03:48.425Z",
                    "title":"LittleBigPlanet PS Vita",
                    "platform":"PlayStation Vita",
                    "score":"9",
                    "genre":"Platformer",
                    "editors_choice":"Y",
                    "__v":0
                    }


            */
            _this.gamesData = gameData;
            _this.assignCopy();
            // console.log(JSON.stringify(gameData));
        });
    }
    HomeComponent.prototype.assignCopy = function () {
        this.filteredItems = Object.assign([], this.gamesData);
    };
    // getAutoCompleteArray(){
    // 	this.sourceTextAutoComplete=this.filteredItems.map(data=>{
    // 		return data.title;
    // 	});
    // }
    HomeComponent.prototype.filterGameData = function (searchedText) {
        if (!searchedText)
            this.assignCopy(); //when nothing has typed
        this.filteredItems = Object.assign([], this.gamesData).filter(function (item) { return (item.title.toLowerCase().indexOf(searchedText.toLowerCase()) > -1); });
        console.log(JSON.stringify(this.filteredItems));
    };
    HomeComponent.prototype.sortGameData = function () {
        //Sort the Game Data based on the score here ..
        //If it is ascending order sort it in descending else vice versa logic wil be applied here
        if (this.Asc_OR_Dsc == true) {
            this.filteredItems.sort(function (score1, score2) {
                if (score1.score < score2.score) {
                    return -1;
                }
                else if (score1.score > score2.score) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            this.Asc_OR_Dsc = false;
        }
        else {
            this.filteredItems.sort(function (score1, score2) {
                if (score1.score > score2.score) {
                    return -1;
                }
                else if (score1.score < score2.score) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            this.Asc_OR_Dsc = true;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(671),
            styles: [__webpack_require__(668)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_get_game_data_service__["a" /* GetGameDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_get_game_data_service__["a" /* GetGameDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_get_game_data_service__["a" /* GetGameDataService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/rajat/Study/March 2017/Capillary Full Stack/public/src/home.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(flashMessage) {
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.login = function () {
        //call the login service here
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(672),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
//# sourceMappingURL=/home/rajat/Study/March 2017/Capillary Full Stack/public/src/navbar.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/rajat/Study/March 2017/Capillary Full Stack/public/src/environment.js.map

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ".heading{\n\tmargin-left:25%;\n\tfont-weight:900;\n}\n\n.score{\n\n\tmargin-left:60%;\n}\n\n.platform{\n\tmargin-left:25%;\n}\n\n.Asc{\n\n-webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n.Dsc{\n\n\n\t\n}\n\n.rotate {\n\t\n    -webkit-transition-duration: 2s;\n    transition-duration: 2s;\n    -webkit-transition-property: -webkit-transform;\n    transition-property:-webkit-transform;\n    transition-property:transform;\n    transition-property: transform, -webkit-transform;\n    outline: 0;\n}"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ".capheader {\n    float: left;\n    font-weight: 900;\n    font-size:20px;\n    color:#62f442;\n    /*margin-top: 1%;*/\n    margin-left: 1%;\n}\n\n.imgcap {\n   margin-top:-1%;\n    float: left;\n}\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 col-sm-8 col-xs-8 col-lg-10\">\n                <!-- Search by Title Functionality is currently provided right now-->\n                <input type=\"text\" #searchText placeholder=\"Search(by Name)\" name=\"search\" class=\"form-control\" (input)=\"filterGameData(searchText.value)\" />\n\n\n            </div>\n            <div class=\"col-md-2 col-sm-4 col-xs-4 col-lg-2\">\n            <img src=\"assets/image/acssort.png\" [ngClass]=\"{Asc: Asc_OR_Dsc, Dsc: !Asc_OR_Dsc}\" (click)=\"sortGameData()\" alt=\"Sort Data\" height=\"40px\" width=\"50px\"/>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"\">\n    <div class=\"container\">\n        <div class=\"row\" *ngFor=\"let gameData of filteredItems;let i=index\">\n            <div class=\"col-md-4 col-sm-4 col-xs-12\" *ngIf=\"i%3==0\">\n                <!-- *ngIf=\"i%3==0\"-->\n                <div class=\"panel-group\">\n                    <div class=\"panel panel-primary\">\n                       \n                        <div class=\"panel-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 col-xs-4\">\n                                    <img src=\"assets/image/LBPVista.jpg\" class=\"img-responsive\" alt=\"Product Image\" height=\"150px\" width=\"120px\" />\n                                </div>\n                                <div class=\"col-md-8 col-sm-8 col-xs-8\">\n\n                                    <p class=\"heading text-info\">{{filteredItems[i].title}}\n\n                                    \t<img src=\"assets/image/star.png\" height=\"30px\" width=\"25px\" [hidden]=\" filteredItems[i].editors_choice==='N' ? true : false \" title=\"Editor's Choice\" alt=\"Editor's Choice\"/>\n\n                                    </p>\n                                    \n                                    <p><span class=\"text-muted platform\">{{filteredItems[i].platform}} </span></p>\n                                    \n                                   \n\n                                </div>\n                            </div>\n                            <hr/>\n                            <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                             <p><b>Genre:  </b><span class=\"text-warning\">{{filteredItems[i].genre}}</span></p>\n                              </div>\n                              <div class=\"col-md-6 col-sm-6 col-xs-6\" >\n                              <p class=\"text-muted score\">{{filteredItems[i].score}}</p>\n                              </div>\n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div> \n\n\n            <div class=\"col-md-4 col-sm-4 col-xs-12\" *ngIf=\"(i+1 <  filteredItems.length) && (i%3==0)\">\n                \n                <div class=\"panel-group\">\n                    <div class=\"panel panel-primary\">\n                       \n                        <div class=\"panel-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 col-xs-4\">\n                                    <img src=\"assets/image/DDneon.jpg\"  class=\"img-responsive\" alt=\"Product Image\" height=\"150px\" width=\"120px\" />\n                                </div>\n                                <div class=\"col-md-8 col-sm-8 col-xs-8\">\n\n                                    <p class=\"heading text-info\">{{filteredItems[i+1].title}}</p>\n                                    \n                                    <p><span class=\"text-muted platform\">{{filteredItems[i+1].platform}} </span></p>\n                                    \n                                   \n\n                                </div>\n                            </div>\n                            <hr/>\n                            <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                             <p><b>Genre:  </b><span class=\"text-warning\">{{filteredItems[i+1].genre}}</span></p>\n                              </div>\n                              <div class=\"col-md-6 col-sm-6 col-xs-6 \" >\n                              <p class=\"text-muted score\">{{filteredItems[i+1].score}}</p>\n                              </div>\n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n           \n            <div class=\"col-md-4 col-sm-4 col-xs-12\"  *ngIf=\"(i+2 < filteredItems.length && (i%3==0))\">\n               \n                <div class=\"panel-group\">\n                    <div class=\"panel panel-primary\">\n                       \n                        <div class=\"panel-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 col-xs-4\">\n                                    <img src=\"assets/image/NHL13.jpeg\" class=\"img-responsive\" alt=\"Product Image\" height=\"150px\" width=\"120px\" />\n                                </div>\n                                <div class=\"col-md-8 col-sm-8 col-xs-8\">\n\n                                    <p class=\"heading text-info\">{{filteredItems[i+2].title}}</p>\n                                    \n                                    <p><span class=\"text-muted platform\">{{filteredItems[i+2].platform}} </span></p>\n                                    \n                                   \n\n                                </div>\n                            </div>\n                            <hr/>\n                            <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                             <p><b>Genre:  </b><span class=\"text-warning\">{{filteredItems[i+2].genre}}</span></p>\n                              </div>\n                              <div class=\"col-md-6 col-sm-6 col-xs-6\" >\n                              <p class=\"text-muted score\">{{filteredItems[i+2].score}}</p>\n                              </div>\n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n           \n            \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"assets/image/capimg.png\" class=\"img-responsive imgcap\" height=\"20%\" width=\"20%\"/>\n            <span class=\"capheader\">Games Arena</span>\n          </a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n          \n           <!--  <li><a [routerLink]=\"['/']\">Home</a></li> -->\n           \n           \n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <!-- <li *ngIf=\"!(af.auth | async)\"> -->\n            <!-- <li><a  (click)=\"login()\">Login</a></li> -->\n            <!-- <li *ngIf=\"(af.auth | async)\"><a (click)=\"logout()\">Logout</a></li> -->\n            \n           \n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>"

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ })

},[691]);
//# sourceMappingURL=main.bundle.map