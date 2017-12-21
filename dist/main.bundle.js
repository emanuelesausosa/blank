webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/+home/home.module": [
		"../../../../../src/app/+home/home.module.ts",
		"home.module"
	],
	"app/ss-setup/ss-setup.module": [
		"../../../../../src/app/ss-setup/ss-setup.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_resolver__ = __webpack_require__("../../../../../src/app/app.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_layout_layout_module__ = __webpack_require__("../../../../../src/app/shared/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_ss_setup_ss_setup_module__ = __webpack_require__("../../../../../src/app/ss-setup/ss-setup.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component



// Core providers



/*
 Serv-Suite Modules
 */

/**
 * Angular-Firebae module imports
 */


/**
 *  Environments
 */

// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_6__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_layout_layout_module__["a" /* SmartadminLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_11_app_ss_setup_ss_setup_module__["SsSetupModule"],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].firebase, 'servsuite-db')
            ],
            exports: [],
            providers: [
                // ENV_PROVIDERS,
                APP_PROVIDERS
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* AppState */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of({ res: 'I am data' });
    };
    DataResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataResolver);
    return DataResolver;
}());

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_layout_app_layouts_main_layout_component__ = __webpack_require__("../../../../../src/app/shared/layout/app-layouts/main-layout.component.ts");
/**
 * Created by griga on 7/11/16.
 */


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__shared_layout_app_layouts_main_layout_component__["a" /* MainLayoutComponent */],
        data: { pageTitle: 'Home' },
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full',
            },
            {
                path: 'home', loadChildren: 'app/+home/home.module#HomeModule',
                data: {
                    pageTitle: 'Home'
                }
            },
            {
                path: 'setup',
                loadChildren: 'app/ss-setup/ss-setup.module#SsSetupModule',
                data: {
                    pageTitle: 'Setup'
                }
            }
        ]
    },
    // { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},
    { path: '**', redirectTo: 'home' }
    //
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true });


/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppState);
    return AppState;
}());



/***/ }),

/***/ "../../../../../src/app/core/api/json-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_smartadmin_config__ = __webpack_require__("../../../../../src/app/shared/smartadmin.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JsonApiService = (function () {
    function JsonApiService(http) {
        this.http = http;
    }
    JsonApiService.prototype.fetch = function (url) {
        return this.http.get(this.getBaseUrl() + __WEBPACK_IMPORTED_MODULE_2__shared_smartadmin_config__["a" /* config */].API_URL + url)
            .delay(100)
            .map(function (data) { return (data.data || data); })
            .catch(this.handleError);
    };
    JsonApiService.prototype.getBaseUrl = function () {
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
    };
    JsonApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    JsonApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JsonApiService);
    return JsonApiService;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_json_api_service__ = __webpack_require__("../../../../../src/app/core/api/json-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_layout_layout_service__ = __webpack_require__("../../../../../src/app/shared/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_voice_control_voice_control_service__ = __webpack_require__("../../../../../src/app/shared/voice-control/voice-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_sound_sound_service__ = __webpack_require__("../../../../../src/app/shared/sound/sound.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_module_import_guard__ = __webpack_require__("../../../../../src/app/core/guards/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_voice_control_voice_recognition_service__ = __webpack_require__("../../../../../src/app/shared/voice-control/voice-recognition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var CoreModule = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_8__guards_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["g" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["e" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["f" /* TabsModule */].forRoot(),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__api_json_api_service__["a" /* JsonApiService */],
                __WEBPACK_IMPORTED_MODULE_4__shared_layout_layout_service__["a" /* LayoutService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_6__shared_voice_control_voice_control_service__["a" /* VoiceControlService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */],
                __WEBPACK_IMPORTED_MODULE_7__shared_sound_sound_service__["a" /* SoundService */],
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/guards/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/shared/animations/fade-zoom-in-top.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FadeZoomInTop;
/**
 * Created by griga on 12/26/16.
 */
function FadeZoomInTop() {
    var __ref__ = window['Reflect'];
    function parseMeta(metaInformation) {
        for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
            var metadata = metaInformation_1[_i]; //metadata is @Component metadata
            // decorator logic goes here
            // metadata.animations = [fadeZoomInTop()];
            // metadata.host = {"[@fadeZoomInTop]": ''};
        }
    }
    //value represents the annotation parameter(s)
    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    };
}


/***/ }),

/***/ "../../../../../src/app/shared/i18n/i18n.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__ = __webpack_require__("../../../../../src/app/shared/i18n/language-selector/language-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__ = __webpack_require__("../../../../../src/app/shared/i18n/i18n.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_service__ = __webpack_require__("../../../../../src/app/shared/i18n/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var I18nModule = (function () {
    function I18nModule() {
    }
    I18nModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* BsDropdownModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__["a" /* LanguageSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__["a" /* I18nPipe */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__["a" /* LanguageSelectorComponent */], __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__["a" /* I18nPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__i18n_service__["a" /* I18nService */]]
        })
    ], I18nModule);
    return I18nModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/i18n/i18n.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_service__ = __webpack_require__("../../../../../src/app/shared/i18n/i18n.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18nPipe = (function () {
    function I18nPipe(i18nService) {
        this.i18nService = i18nService;
    }
    I18nPipe.prototype.transform = function (phrase, args) {
        return this.i18nService.getTranslation(phrase);
    };
    I18nPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'i18n',
            pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */]])
    ], I18nPipe);
    return I18nPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/i18n/i18n.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__("../../../../../src/app/shared/smartadmin.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languages_model__ = __webpack_require__("../../../../../src/app/shared/i18n/languages.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_json_api_service__ = __webpack_require__("../../../../../src/app/core/api/json-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var I18nService = (function () {
    function I18nService(jsonApiService, ref) {
        this.jsonApiService = jsonApiService;
        this.ref = ref;
        this.state = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.initLanguage(__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].defaultLocale || 'us');
        this.fetch(this.currentLanguage.key);
    }
    I18nService.prototype.fetch = function (locale) {
        var _this = this;
        this.jsonApiService.fetch("/langs/" + locale + ".json")
            .subscribe(function (data) {
            _this.data = data;
            _this.state.next(data);
            _this.ref.tick();
        });
    };
    I18nService.prototype.initLanguage = function (locale) {
        var language = __WEBPACK_IMPORTED_MODULE_2__languages_model__["a" /* languages */].find(function (it) {
            return it.key == locale;
        });
        if (language) {
            this.currentLanguage = language;
        }
        else {
            throw new Error("Incorrect locale used for I18nService: " + locale);
        }
    };
    I18nService.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.fetch(language.key);
    };
    I18nService.prototype.subscribe = function (sub, err) {
        return this.state.subscribe(sub, err);
    };
    I18nService.prototype.getTranslation = function (phrase) {
        return this.data && this.data[phrase] ? this.data[phrase] : phrase;
    };
    I18nService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_api_json_api_service__["a" /* JsonApiService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]])
    ], I18nService);
    return I18nService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/i18n/language-selector/language-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"header-dropdown-list hidden-xs ng-cloak\">\n  <li class=\"dropdown\" dropdown>\n    <a class=\"dropdown-toggle\" dropdownToggle> <img src=\"assets/img/blank.gif\"\n                                                                 class=\"flag flag-{{currentLanguage.key}}\"\n                                                                 alt=\"{{currentLanguage.alt}}\"> <span> {{currentLanguage.title}} </span>\n      <i class=\"fa fa-angle-down\"></i> </a>\n    <ul *dropdownMenu class=\"dropdown-menu\">\n      <li [class.active]=\"language==currentLanguage\"\n          *ngFor=\"let language of languages\">\n        <a (click)=\"setLanguage(language)\" class=\"dropdown-item\" ><img src=\"assets/img/blank.gif\" class=\"flag flag-{{language.key}}\"\n                                                    alt=\"{{language.alt}}\"> {{language.title}}</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/i18n/language-selector/language-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__languages_model__ = __webpack_require__("../../../../../src/app/shared/i18n/languages.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_service__ = __webpack_require__("../../../../../src/app/shared/i18n/i18n.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageSelectorComponent = (function () {
    function LanguageSelectorComponent(i18n) {
        this.i18n = i18n;
    }
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        this.languages = __WEBPACK_IMPORTED_MODULE_1__languages_model__["a" /* languages */];
        this.currentLanguage = this.i18n.currentLanguage;
    };
    LanguageSelectorComponent.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.i18n.setLanguage(language);
    };
    LanguageSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-language-selector',
            template: __webpack_require__("../../../../../src/app/shared/i18n/language-selector/language-selector.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* I18nService */]])
    ], LanguageSelectorComponent);
    return LanguageSelectorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/i18n/languages.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return languages; });
var languages = [
    {
        "key": "us",
        "alt": "United States",
        "title": "English (US)"
    },
    {
        "key": "fr",
        "alt": "France",
        "title": "Français"
    },
    {
        "key": "es",
        "alt": "Spanish",
        "title": "Español"
    },
    {
        "key": "de",
        "alt": "German",
        "title": "Deutsch"
    },
    {
        "key": "jp",
        "alt": "Japan",
        "title": "日本語"
    },
    {
        "key": "cn",
        "alt": "China",
        "title": "中文"
    },
    {
        "key": "zh",
        "alt": "Chinese",
        "title": "汉语/漢語"
    },
    {
        "key": "pt",
        "alt": "Portugal",
        "title": "Portugal"
    },
    {
        "key": "ru",
        "alt": "Russia",
        "title": "Русский язык"
    },
    {
        "key": "kr",
        "alt": "Korea",
        "title": "한국어"
    }
];


/***/ }),

/***/ "../../../../../src/app/shared/layout/app-layouts/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"extr-page\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/app-layouts/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__("../../../../../src/app/shared/layout/app-layouts/auth-layout.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/app-layouts/empty-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/app-layouts/empty-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__ = __webpack_require__("../../../../../src/app/shared/animations/fade-zoom-in-top.decorator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmptyLayoutComponent = (function () {
    function EmptyLayoutComponent() {
    }
    EmptyLayoutComponent.prototype.ngOnInit = function () {
    };
    EmptyLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__["a" /* FadeZoomInTop */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-empty-layout',
            template: __webpack_require__("../../../../../src/app/shared/layout/app-layouts/empty-layout.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], EmptyLayoutComponent);
    return EmptyLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/app-layouts/main-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<sa-header></sa-header>\n\n\n<sa-navigation></sa-navigation>\n\n\n<div id=\"main\" role=\"main\">\n  <sa-layout-switcher></sa-layout-switcher>\n\n  <sa-ribbon></sa-ribbon>\n\n  <router-outlet></router-outlet>\n</div>\n\n<sa-footer></sa-footer>\n\n<sa-shortcut></sa-shortcut>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/app-layouts/main-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__ = __webpack_require__("../../../../../src/app/shared/animations/fade-zoom-in-top.decorator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainLayoutComponent = (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__["a" /* FadeZoomInTop */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__("../../../../../src/app/shared/layout/app-layouts/main-layout.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-footer\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6\">\n            <span class=\"txt-color-white\">SmartAdmin 1.9.0 - Web Application Framework © 2017-2019</span>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n            <div class=\"txt-color-white inline-block\">\n                <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i>\n                    <strong>52 mins ago &nbsp;</strong> </i>\n\n                <div class=\"btn-group\" dropdown dropup=\"true\">\n                    <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" dropdownToggle>\n                        <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" *dropdownMenu style=\"right: 0px; left: auto\">\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span>\n                                </p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <button class=\"btn btn-block btn-default\">refresh</button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-footer',
            template: __webpack_require__("../../../../../src/app/shared/layout/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/activities/activities-message/activities-message.component.html":
/***/ (function(module, exports) {

module.exports = "<span class={{item.status}}>\n  <a class=\"msg\">\n    <img src={{item.image}} alt=\"\" class=\"air air-top-left margin-top-5\" width=\"40\"\n         height=\"40\"/>\n    <span class=\"from\">{{item.title}}</span>\n    <span>{{item.time}}</span>\n    <span class=\"subject\">{{item.subject}}</span>\n    <span class=\"msg-body\">{{item.message}}</span>\n  </a>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/activities/activities-message/activities-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesMessageComponent = (function () {
    function ActivitiesMessageComponent() {
    }
    ActivitiesMessageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActivitiesMessageComponent.prototype, "item", void 0);
    ActivitiesMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[activitiesMessage]',
            template: __webpack_require__("../../../../../src/app/shared/layout/header/activities/activities-message/activities-message.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesMessageComponent);
    return ActivitiesMessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/activities/activities-notification/activities-notification.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"padding-10\">\n  <em class=\"badge padding-5 no-border-radius bg-color-blueLight pull-left margin-right-5\">\n    <i [ngClass]=\"setClasses()\"></i>\n  </em>\n  <span>{{item.message}}<br/>\n    <span class=\"pull-right font-xs text-muted\"><i>{{item.time}}</i></span>\n  </span>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/activities/activities-notification/activities-notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesNotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesNotificationComponent = (function () {
    function ActivitiesNotificationComponent() {
    }
    ActivitiesNotificationComponent.prototype.ngOnInit = function () {
    };
    ActivitiesNotificationComponent.prototype.setClasses = function () {
        var classes = {
            'fa fa-fw fa-2x': true
        };
        classes[this.item.icon] = true;
        return classes;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActivitiesNotificationComponent.prototype, "item", void 0);
    ActivitiesNotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[activitiesNotification]',
            template: __webpack_require__("../../../../../src/app/shared/layout/header/activities/activities-notification/activities-notification.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesNotificationComponent);
    return ActivitiesNotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/activities/activities-task/activities-task.component.html":
/***/ (function(module, exports) {

module.exports = "<span>\n  <div class=\"bar-holder no-padding\">\n    <p class=\"margin-bottom-5\">\n      <i *ngIf=\"item.status == 'PRIMARY'\" class=\"fa fa-warning text-warning\"></i>\n        <strong>{{item.status}}:</strong> <i>{{item.title}}</i>\n        <span class=\"pull-right semi-bold\"\n              [ngClass]=\"{\n                'pull-right': true,\n                'semi-bold':true,\n                'text-danger': item.status == 'CRITICAL',\n                'text-muted': item.status != 'CRITICAL'\n              }\">\n          <span *ngIf=\"item.width == 100\">\n            <i class=\"fa fa-check text-success\"></i> Complete\n          </span>\n          <span *ngIf=\"item.width != 100\">{{item.width + '%'}}</span>\n        </span>\n    </p>\n    <div class=\"progress\" [class]=\"item.size\">\n      <div [ngClass]=\"setProgressClasses()\" [style.width]=\"item.width + '%'\"></div>\n    </div>\n    <em class=\"note no-margin\">last updated on {{lastUpdate | moment: \"MMMM Do, h:mm a\"}}</em>\n  </div>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/activities/activities-task/activities-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesTaskComponent = (function () {
    function ActivitiesTaskComponent() {
    }
    ActivitiesTaskComponent.prototype.ngOnInit = function () {
    };
    ActivitiesTaskComponent.prototype.setProgressClasses = function () {
        return {
            'progress-bar': true,
            'progress-bar-success': this.item.status == 'MINOR' || this.item.status == 'NORMAL',
            'bg-color-teal': this.item.status == 'PRIMARY' || this.item.status == 'URGENT',
            'progress-bar-danger': this.item.status == 'CRITICAL'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActivitiesTaskComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActivitiesTaskComponent.prototype, "lastUpdate", void 0);
    ActivitiesTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[activitiesTask]',
            template: __webpack_require__("../../../../../src/app/shared/layout/header/activities/activities-task/activities-task.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesTaskComponent);
    return ActivitiesTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<span id=\"activity\" class=\"activity-dropdown\" (click)=\"onToggle()\">\n  <i class=\"fa fa-user\"></i>\n  <b class=\"badge bg-color-red\">{{count}}</b>\n</span>\n\n<div class=\"ajax-dropdown\" #dropdown>\n  <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n    <label [ngClass]=\"{\n      'btn btn-default': true,\n      active: activity==currentActivity\n    }\" *ngFor=\"let activity of activities\"\n           (click)=\"setActivity(activity)\"\n    >\n      <input type=\"radio\" name=\"activity\"/>\n      {{activity.title}} ({{activity.data.length}})\n    </label>\n\n  </div>\n\n  <!-- notification content -->\n   <div class=\"ajax-notifications custom-scroll\">\n      <ul class=\"notification-body\" *ngIf=\"currentActivity\" >\n        <ng-template ngFor let-item [ngForOf]=\"currentActivity.data\">\n\n          <li activitiesMessage *ngIf=\"item.type == 'message'\" [item]=\"item\"></li>\n          <li activitiesNotification *ngIf=\"item.type == 'notification'\" [item]=\"item\"></li>\n          <li activitiesTask *ngIf=\"item.type == 'task'\" [item]=\"item\" [lastUpdate]=\"lastUpdate\"></li>\n\n        </ng-template>\n\n      </ul>\n    </div>\n  <!-- end notification content -->\n\n  <!-- footer: refresh area -->\n      <span> Last updated on: {{lastUpdate | moment:\"h:mm:ss a\"}}\n    <button type=\"button\" (click)=\"update()\"\n            class=\"btn btn-xs btn-default pull-right\">\n        <i class=\"fa fa-refresh\" *ngIf=\"!loading\"></i>\n        <i class=\"fa fa-refresh fa-spin\" *ngIf=\"loading\"></i>\n        <span *ngIf=\"loading\">loading...</span>\n    </button>\n    </span>\n  <!-- end footer -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activities_service__ = __webpack_require__("../../../../../src/app/shared/layout/header/activities/activities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesComponent = (function () {
    function ActivitiesComponent(el, renderer, activitiesService) {
        this.el = el;
        this.renderer = renderer;
        this.activitiesService = activitiesService;
        this.active = false;
        this.loading = false;
        this.activities = [];
        this.count = 0;
        this.lastUpdate = new Date();
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activitiesService.getActivities().subscribe(function (data) {
            _this.activities = data;
            _this.count = data.reduce(function (sum, it) { return sum + it.data.length; }, 0);
            _this.currentActivity = data[0];
        });
    };
    ActivitiesComponent.prototype.setActivity = function (activity) {
        this.currentActivity = activity;
    };
    ActivitiesComponent.prototype.onToggle = function () {
        var _this = this;
        var dropdown = $('.ajax-dropdown', this.el.nativeElement);
        this.active = !this.active;
        if (this.active) {
            dropdown.fadeIn();
            this.documentSub = this.renderer.listenGlobal('document', 'mouseup', function (event) {
                if (!_this.el.nativeElement.contains(event.target)) {
                    dropdown.fadeOut();
                    _this.active = false;
                    _this.documentUnsub();
                }
            });
        }
        else {
            dropdown.fadeOut();
            this.documentUnsub();
        }
    };
    ActivitiesComponent.prototype.update = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.lastUpdate = new Date();
            _this.loading = false;
        }, 1000);
    };
    ActivitiesComponent.prototype.ngOnDestroy = function () {
        this.documentUnsub();
    };
    ActivitiesComponent.prototype.documentUnsub = function () {
        this.documentSub && this.documentSub();
        this.documentSub = null;
    };
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-activities',
            template: __webpack_require__("../../../../../src/app/shared/layout/header/activities/activities.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */]])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/activities/activities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__ = __webpack_require__("../../../../../src/app/core/api/json-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesService = (function () {
    function ActivitiesService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.url = '/activities/activities.json';
    }
    ActivitiesService.prototype.getActivities = function () {
        return this.jsonApiService.fetch(this.url);
    };
    ActivitiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */]])
    ], ActivitiesService);
    return ActivitiesService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/collapse-menu/collapse-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"hide-menu\" class=\"btn-header pull-right\">\n        <span> <a (click)=\"onToggle()\" title=\"Collapse Menu\"><i\n                class=\"fa fa-reorder\"></i></a> </span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/collapse-menu/collapse-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__("../../../../../src/app/shared/layout/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollapseMenuComponent = (function () {
    function CollapseMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    CollapseMenuComponent.prototype.onToggle = function () {
        this.layoutService.onCollapseMenu();
    };
    CollapseMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-collapse-menu',
            template: __webpack_require__("../../../../../src/app/shared/layout/header/collapse-menu/collapse-menu.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]])
    ], CollapseMenuComponent);
    return CollapseMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/full-screen/full-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n        <span> <a (click)=\"onToggle()\" title=\"Full Screen\"><i\n                class=\"fa fa-arrows-alt\"></i></a> </span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/full-screen/full-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullScreenComponent = (function () {
    function FullScreenComponent() {
    }
    FullScreenComponent.prototype.ngOnInit = function () {
    };
    FullScreenComponent.prototype.onToggle = function () {
        var $body = $('body');
        var documentMethods = {
            enter: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'],
            exit: ['cancelFullScreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msCancelFullScreen']
        };
        if (!$body.hasClass("full-screen")) {
            $body.addClass("full-screen");
            document.documentElement[documentMethods.enter.filter(function (method) {
                return document.documentElement[method];
            })[0]]();
        }
        else {
            $body.removeClass("full-screen");
            document[documentMethods.exit.filter(function (method) {
                return document[method];
            })[0]]();
        }
    };
    FullScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-full-screen',
            template: __webpack_require__("../../../../../src/app/shared/layout/header/full-screen/full-screen.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FullScreenComponent);
    return FullScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div id=\"logo-group\">\n\n    <!-- PLACE YOUR LOGO HERE -->\n    <span id=\"logo\"> <img src=\"assets/img/logo.png\" alt=\"SmartAdmin\"> </span>\n    <!-- END LOGO PLACEHOLDER -->\n\n    <!-- Note: The activity badge color changes when clicked and resets the number to 0\n    Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->\n    <sa-activities></sa-activities>\n  </div>\n\n\n  <sa-recent-projects></sa-recent-projects>\n\n\n  <!-- pulled right: nav area -->\n  <div class=\"pull-right\">\n\n    <sa-collapse-menu></sa-collapse-menu>\n\n    <!-- #MOBILE -->\n    <!-- Top menu profile link : this shows only when top menu is active -->\n    <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\">\n      <li class=\"\">\n        <a href=\"#\" class=\"dropdown-toggle no-margin userdropdown\" data-toggle=\"dropdown\">\n          <img src=\"assets/img/avatars/sunny.png\" alt=\"John Doe\" class=\"online\"/>\n        </a>\n        <ul class=\"dropdown-menu pull-right\">\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"><i\n              class=\"fa fa-cog\"></i> Setting</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a routerLink=\"/app-views/profile\" class=\"padding-10 padding-top-0 padding-bottom-0\"> <i\n              class=\"fa fa-user\"></i>\n              <u>P</u>rofile</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"\n               data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i> <u>S</u>hortcut</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"\n               data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i> Full <u>S</u>creen</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a routerLink=\"/auth/login\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\"><i\n              class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong></a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <!-- logout button -->\n    <sa-logout></sa-logout>\n    <!-- end logout button -->\n\n    <!-- search mobile button (this is hidden till mobile view port) -->\n    <div id=\"search-mobile\" class=\"btn-header transparent pull-right\">\n      <span> <a (click)=\"toggleSearchMobile()\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\n    </div>\n    <!-- end search mobile button -->\n\n    <!-- input: search field -->\n    <form #searchForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"header-search pull-right\">\n      <input id=\"search-fld\" type=\"text\" name=\"param\" required\n             placeholder=\"Find reports and more\">\n      <button type=\"submit\">\n        <i class=\"fa fa-search\"></i>\n      </button>\n      <a id=\"cancel-search-js\" (click)=\"toggleSearchMobile()\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\n    </form>\n    <!-- end input: search field -->\n\n    <!-- fullscreen button -->\n    <sa-full-screen></sa-full-screen>\n    <!-- end fullscreen button -->\n\n    <!-- #Voice Command: Start Speech -->\n    <sa-speech-button></sa-speech-button>\n    <!-- end voice command -->\n\n\n    <!-- multiple lang dropdown : find all flags in the flags page -->\n    <sa-language-selector></sa-language-selector>\n    <!-- end multiple lang -->\n\n\n\n  </div>\n  <!-- end pulled right: nav area -->\n\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.searchMobileActive = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSearchMobile = function () {
        this.searchMobileActive = !this.searchMobileActive;
        $('body').toggleClass('search-mobile', this.searchMobileActive);
    };
    HeaderComponent.prototype.onSubmit = function () {
        this.router.navigate(['/miscellaneous/search']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-header',
            template: __webpack_require__("../../../../../src/app/shared/layout/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_popover__ = __webpack_require__("../../../../ngx-popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collapse_menu_collapse_menu_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/collapse-menu/collapse-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recent_projects_recent_projects_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/recent-projects/recent-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__full_screen_full_screen_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/full-screen/full-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activities_activities_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activities_activities_message_activities_message_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/activities/activities-message/activities-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__activities_activities_notification_activities_notification_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/activities/activities-notification/activities-notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activities_activities_task_activities_task_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/activities/activities-task/activities-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_utils_module__ = __webpack_require__("../../../../../src/app/shared/utils/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__i18n_i18n_module__ = __webpack_require__("../../../../../src/app/shared/i18n/i18n.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_module__ = __webpack_require__("../../../../../src/app/shared/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__voice_control_voice_control_module__ = __webpack_require__("../../../../../src/app/shared/voice-control/voice-control.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__voice_control_voice_control_module__["a" /* VoiceControlModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__["b" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_12__utils_utils_module__["a" /* UtilsModule */], __WEBPACK_IMPORTED_MODULE_13__i18n_i18n_module__["a" /* I18nModule */], __WEBPACK_IMPORTED_MODULE_14__user_user_module__["a" /* UserModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_popover__["PopoverModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__activities_activities_message_activities_message_component__["a" /* ActivitiesMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__activities_activities_notification_activities_notification_component__["a" /* ActivitiesNotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__activities_activities_task_activities_task_component__["a" /* ActivitiesTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_5__recent_projects_recent_projects_component__["a" /* RecentProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__full_screen_full_screen_component__["a" /* FullScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_4__collapse_menu_collapse_menu_component__["a" /* CollapseMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__activities_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/recent-projects/recent-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"project-context hidden-xs dropdown\" dropdown>\n\n  <span class=\"label\">{{ 'Projects' | i18n }}:</span>\n    <span class=\"project-selector dropdown-toggle\" dropdownToggle>{{'Recent projects'| i18n}} <i ng-if=\"projects.length\"\n                                                                                                            class=\"fa fa-angle-down\"></i></span>\n\n  <ul *dropdownMenu class=\"dropdown-menu\">\n    <li *ngFor=\"let project of projects\">\n      <a href=\"{{project.href}}\">{{project.title}}</a>\n    </li>\n    <li class=\"divider\"></li>\n    <li>\n      <a (click)=\"clearProjects()\"><i class=\"fa fa-power-off\"></i> Clear</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/recent-projects/recent-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__ = __webpack_require__("../../../../../src/app/shared/layout/header/recent-projects/recent-projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecentProjectsComponent = (function () {
    function RecentProjectsComponent(projectsService) {
        this.projectsService = projectsService;
    }
    RecentProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.projectsService.getProjects();
    };
    RecentProjectsComponent.prototype.clearProjects = function () {
        this.projectsService.clearProjects();
        this.projects = this.projectsService.getProjects();
    };
    RecentProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-recent-projects',
            template: __webpack_require__("../../../../../src/app/shared/layout/header/recent-projects/recent-projects.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */]])
    ], RecentProjectsComponent);
    return RecentProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/recent-projects/recent-projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentProjectsService = (function () {
    function RecentProjectsService() {
        this.projects = [
            {
                "href": "/",
                "title": "Online e-merchant management system - attaching integration with the iOS"
            },
            {
                "href": "/",
                "title": "Notes on pipeline upgradee"
            },
            {
                "href": "/",
                "title": "Assesment Report for merchant account"
            }
        ];
    }
    RecentProjectsService.prototype.getProjects = function () {
        return this.projects;
    };
    RecentProjectsService.prototype.clearProjects = function () {
        this.projects = [];
    };
    RecentProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RecentProjectsService);
    return RecentProjectsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/layout-switcher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\" [class.activate]=\"isActivated\"><span id=\"demo-setting\" (click)=\"onToggle()\"><i\n  class=\"fa fa-cog txt-color-blueDark\"></i></span>\n\n  <form>\n    <legend class=\"no-padding margin-bottom-10\">Layout Options</legend>\n    <section>\n      <label><input type=\"checkbox\" (click)=\"onFixedHeader()\" [(ngModel)]=\"store.fixedHeader\" name=\"fixedHeader\"\n                    class=\"checkbox style-0\"><span>Fixed Header</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedNavigation()\" [(ngModel)]=\"store.fixedNavigation\" name=\"fixedNavigation\"\n                    class=\"checkbox style-0\"><span>Fixed Navigation</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedRibbon()\" [(ngModel)]=\"store.fixedRibbon\" name=\"fixedRibbon\"\n                    class=\"checkbox style-0\"><span>Fixed Ribbon</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedPageFooter()\" [(ngModel)]=\"store.fixedPageFooter\" name=\"fixedPageFooter\"\n                    class=\"checkbox style-0\"><span>Fixed Footer</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onInsideContainer()\" [(ngModel)]=\"store.insideContainer\" name=\"insideContainer\"\n                    class=\"checkbox style-0\"><span>Inside <b>.container</b></span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onRtl()\" [(ngModel)]=\"store.rtl\" name=\"rtl\"\n                    class=\"checkbox style-0\"><span>RTL</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onMenuOnTop()\" [(ngModel)]=\"store.menuOnTop\" name=\"menuOnTop\"\n                    class=\"checkbox style-0\"><span>Menu on <b>top</b></span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onColorblindFriendly()\" [(ngModel)]=\"store.colorblindFriendly\" name=\"colorblindFriendly\"\n                    class=\"checkbox style-0\"><span>For Colorblind <div\n        class=\"font-xs text-right\">(experimental)\n            </div></span>\n      </label><span id=\"smart-bgimages\"></span></section>\n    <section><h6 class=\"margin-top-10 semi-bold margin-bottom-5\">Clear Localstorage</h6><a\n      (click)=\"factoryReset()\" class=\"btn btn-xs btn-block btn-primary\" id=\"reset-smart-widget\"><i\n      class=\"fa fa-refresh\"></i> Factory Reset</a></section>\n\n    <h6 class=\"margin-top-10 semi-bold margin-bottom-5\">SmartAdmin Skins</h6>\n\n\n    <section id=\"smart-styles\">\n          <a *ngFor=\"let skin of store.skins\"\n             (click)=\"onSmartSkin(skin)\"\n             [class]=\"skin.skinBtnClass\"\n             [ngStyle]=\"skin.style\">\n             <i *ngIf=\"skin.name == store.smartSkin\" class=\"fa fa-check fa-fw\"></i> {{skin.label}} <sup *ngIf=\"skin.beta\">beta</sup></a>\n        </section>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/layout-switcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutSwitcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__("../../../../../src/app/shared/layout/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutSwitcherComponent = (function () {
    function LayoutSwitcherComponent(layoutService) {
        this.layoutService = layoutService;
    }
    LayoutSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.layoutService.subscribe(function (store) {
            _this.store = store;
        });
        this.store = this.layoutService.store;
    };
    LayoutSwitcherComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LayoutSwitcherComponent.prototype.onToggle = function () {
        this.isActivated = !this.isActivated;
    };
    LayoutSwitcherComponent.prototype.onSmartSkin = function (skin) {
        this.layoutService.onSmartSkin(skin);
    };
    LayoutSwitcherComponent.prototype.onFixedHeader = function () {
        this.layoutService.onFixedHeader();
    };
    LayoutSwitcherComponent.prototype.onFixedNavigation = function () {
        this.layoutService.onFixedNavigation();
    };
    LayoutSwitcherComponent.prototype.onFixedRibbon = function () {
        this.layoutService.onFixedRibbon();
    };
    LayoutSwitcherComponent.prototype.onFixedPageFooter = function () {
        this.layoutService.onFixedPageFooter();
    };
    LayoutSwitcherComponent.prototype.onInsideContainer = function () {
        this.layoutService.onInsideContainer();
    };
    LayoutSwitcherComponent.prototype.onRtl = function () {
        this.layoutService.onRtl();
    };
    LayoutSwitcherComponent.prototype.onMenuOnTop = function () {
        this.layoutService.onMenuOnTop();
    };
    LayoutSwitcherComponent.prototype.onColorblindFriendly = function () {
        this.layoutService.onColorblindFriendly();
    };
    LayoutSwitcherComponent.prototype.factoryReset = function () {
        this.layoutService.factoryReset();
    };
    LayoutSwitcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-layout-switcher',
            template: __webpack_require__("../../../../../src/app/shared/layout/layout-switcher.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]])
    ], LayoutSwitcherComponent);
    return LayoutSwitcherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__("../../../../../src/app/shared/layout/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__ = __webpack_require__("../../../../../src/app/shared/layout/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ribbon_ribbon_component__ = __webpack_require__("../../../../../src/app/shared/layout/ribbon/ribbon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shortcut_shortcut_component__ = __webpack_require__("../../../../../src/app/shared/layout/shortcut/shortcut.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_switcher_component__ = __webpack_require__("../../../../../src/app/shared/layout/layout-switcher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_layouts_main_layout_component__ = __webpack_require__("../../../../../src/app/shared/layout/app-layouts/main-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_layouts_empty_layout_component__ = __webpack_require__("../../../../../src/app/shared/layout/app-layouts/empty-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_layouts_auth_layout_component__ = __webpack_require__("../../../../../src/app/shared/layout/app-layouts/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ribbon_route_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/shared/layout/ribbon/route-breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_utils_module__ = __webpack_require__("../../../../../src/app/shared/utils/utils.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SmartadminLayoutModule = (function () {
    function SmartadminLayoutModule() {
    }
    SmartadminLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_15__utils_utils_module__["a" /* UtilsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["g" /* TooltipModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["b" /* BsDropdownModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ribbon_ribbon_component__["a" /* RibbonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shortcut_shortcut_component__["a" /* ShortcutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__layout_switcher_component__["a" /* LayoutSwitcherComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_layouts_main_layout_component__["a" /* MainLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_layouts_empty_layout_component__["a" /* EmptyLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__app_layouts_auth_layout_component__["a" /* AuthLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__ribbon_route_breadcrumbs_component__["a" /* RouteBreadcrumbsComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ribbon_ribbon_component__["a" /* RibbonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shortcut_shortcut_component__["a" /* ShortcutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__layout_switcher_component__["a" /* LayoutSwitcherComponent */],
            ]
        })
    ], SmartadminLayoutModule);
    return SmartadminLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__("../../../../../src/app/shared/smartadmin.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var store = {
    smartSkin: localStorage.getItem('sm-skin') || __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].smartSkin,
    skin: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].skins.find(function (_skin) {
        return _skin.name == (localStorage.getItem('sm-skin') || __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].smartSkin);
    }),
    skins: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].skins,
    fixedHeader: localStorage.getItem('sm-fixed-header') == 'true',
    fixedNavigation: localStorage.getItem('sm-fixed-navigation') == 'true',
    fixedRibbon: localStorage.getItem('sm-fixed-ribbon') == 'true',
    fixedPageFooter: localStorage.getItem('sm-fixed-page-footer') == 'true',
    insideContainer: localStorage.getItem('sm-inside-container') == 'true',
    rtl: localStorage.getItem('sm-rtl') == 'true',
    menuOnTop: localStorage.getItem('sm-menu-on-top') == 'true',
    colorblindFriendly: localStorage.getItem('sm-colorblind-friendly') == 'true',
    shortcutOpen: false,
    isMobile: (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())),
    device: '',
    mobileViewActivated: false,
    menuCollapsed: false,
    menuMinified: false,
};
var LayoutService = (function () {
    function LayoutService(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.store = store;
        this.trigger();
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'resize').debounceTime(100).map(function () {
            _this.trigger();
        }).subscribe();
    }
    LayoutService.prototype.trigger = function () {
        this.processBody(this.store);
        this.subject.next(this.store);
    };
    LayoutService.prototype.subscribe = function (next, err, complete) {
        return this.subject.subscribe(next, err, complete);
    };
    LayoutService.prototype.onSmartSkin = function (skin) {
        this.store.skin = skin;
        this.store.smartSkin = skin.name;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedHeader = function () {
        this.store.fixedHeader = !this.store.fixedHeader;
        if (this.store.fixedHeader == false) {
            this.store.fixedRibbon = false;
            this.store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedNavigation = function () {
        this.store.fixedNavigation = !this.store.fixedNavigation;
        if (this.store.fixedNavigation) {
            this.store.insideContainer = false;
            this.store.fixedHeader = true;
        }
        else {
            this.store.fixedRibbon = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedRibbon = function () {
        this.store.fixedRibbon = !this.store.fixedRibbon;
        if (this.store.fixedRibbon) {
            this.store.fixedHeader = true;
            this.store.fixedNavigation = true;
            this.store.insideContainer = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedPageFooter = function () {
        this.store.fixedPageFooter = !this.store.fixedPageFooter;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onInsideContainer = function () {
        this.store.insideContainer = !this.store.insideContainer;
        if (this.store.insideContainer) {
            this.store.fixedRibbon = false;
            this.store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onRtl = function () {
        this.store.rtl = !this.store.rtl;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onMenuOnTop = function () {
        this.store.menuOnTop = !this.store.menuOnTop;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onColorblindFriendly = function () {
        this.store.colorblindFriendly = !this.store.colorblindFriendly;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onCollapseMenu = function (value) {
        if (typeof value !== 'undefined') {
            this.store.menuCollapsed = value;
        }
        else {
            this.store.menuCollapsed = !this.store.menuCollapsed;
        }
        this.trigger();
    };
    LayoutService.prototype.onMinifyMenu = function () {
        this.store.menuMinified = !this.store.menuMinified;
        this.trigger();
    };
    LayoutService.prototype.onShortcutToggle = function (condition) {
        if (condition == null) {
            this.store.shortcutOpen = !this.store.shortcutOpen;
        }
        else {
            this.store.shortcutOpen = !!condition;
        }
        this.trigger();
    };
    LayoutService.prototype.dumpStorage = function () {
        localStorage.setItem('sm-skin', this.store.smartSkin);
        localStorage.setItem('sm-fixed-header', this.store.fixedHeader);
        localStorage.setItem('sm-fixed-navigation', this.store.fixedNavigation);
        localStorage.setItem('sm-fixed-ribbon', this.store.fixedRibbon);
        localStorage.setItem('sm-fixed-page-footer', this.store.fixedPageFooter);
        localStorage.setItem('sm-inside-container', this.store.insideContainer);
        localStorage.setItem('sm-rtl', this.store.rtl);
        localStorage.setItem('sm-menu-on-top', this.store.menuOnTop);
        localStorage.setItem('sm-colorblind-friendly', this.store.colorblindFriendly);
    };
    LayoutService.prototype.factoryReset = function () {
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
            content: "Would you like to RESET all your saved widgets and clear LocalStorage?",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Yes" && localStorage) {
                localStorage.clear();
                location.reload();
            }
        });
    };
    LayoutService.prototype.processBody = function (state) {
        var $body = $('body');
        $body.removeClass(state.skins.map(function (it) { return (it.name); }).join(' '));
        $body.addClass(state.skin.name);
        $("#logo img").attr('src', state.skin.logo);
        $body.toggleClass('fixed-header', state.fixedHeader);
        $body.toggleClass('fixed-navigation', state.fixedNavigation);
        $body.toggleClass('fixed-ribbon', state.fixedRibbon);
        $body.toggleClass('fixed-page-footer', state.fixedPageFooter);
        $body.toggleClass('container', state.insideContainer);
        $body.toggleClass('smart-rtl', state.rtl);
        $body.toggleClass('menu-on-top', state.menuOnTop);
        $body.toggleClass('colorblind-friendly', state.colorblindFriendly);
        $body.toggleClass('shortcut-on', state.shortcutOpen);
        state.mobileViewActivated = $(window).width() < 979;
        $body.toggleClass('mobile-view-activated', state.mobileViewActivated);
        if (state.mobileViewActivated) {
            $body.removeClass('minified');
        }
        if (state.isMobile) {
            $body.addClass("mobile-detected");
        }
        else {
            $body.addClass("desktop-detected");
        }
        if (state.menuOnTop)
            $body.removeClass('minified');
        if (!state.menuOnTop) {
            $body.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
            $body.toggleClass("hidden-menu", state.menuCollapsed);
            $body.removeClass("minified");
        }
        else if (state.menuOnTop && state.mobileViewActivated) {
            $body.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
            $body.toggleClass("hidden-menu", state.menuCollapsed);
            $body.removeClass("minified");
        }
        if (state.menuMinified && !state.menuOnTop && !state.mobileViewActivated) {
            $body.addClass("minified");
            $body.removeClass("hidden-menu");
            $body.removeClass("hidden-menu-mobile-lock");
        }
    };
    LayoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/navigation/big-breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigBreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigBreadcrumbsComponent = (function () {
    function BigBreadcrumbsComponent() {
    }
    BigBreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BigBreadcrumbsComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], BigBreadcrumbsComponent.prototype, "items", void 0);
    BigBreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-big-breadcrumbs',
            template: "\n   <div><h1 class=\"page-title txt-color-blueDark\">\n   <i class=\"fa-fw fa fa-{{icon}}\"></i>{{items[0]}}\n   <span *ngFor=\"let item of items.slice(1)\">> {{item}}</span>\n</h1></div>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], BigBreadcrumbsComponent);
    return BigBreadcrumbsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/navigation/minify-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinifyMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__("../../../../../src/app/shared/layout/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinifyMenuComponent = (function () {
    function MinifyMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    MinifyMenuComponent.prototype.toggle = function () {
        this.layoutService.onMinifyMenu();
    };
    MinifyMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-minify-menu',
            template: "<span class=\"minifyme\" (click)=\"toggle()\">\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n</span>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]])
    ], MinifyMenuComponent);
    return MinifyMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n\n  <!-- User info -->\n  <sa-login-info></sa-login-info>\n  <!-- end user info -->\n\n  <nav>\n    <!-- NOTE: Notice the gaps after each icon usage <i></i>..\n    Please note that these links work a bit different than\n    traditional href=\"\" links. See documentation for details.\n    -->\n\n    <ul saSmartMenu>\n\n        <li routerLinkActive=\"active\">\n            <a routerLink=\"/home\" title=\"Home\">\n                <i class=\"fa fa-lg fa-fw fa-home\"></i> <span class=\"menu-item-parent\">{{'Home' | i18n}}</span></a>\n        </li>\n        <!-- SS-links -->\n        <li>\n          <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-briefcase\"></i> <span class=\"menu-item-parent\">{{'Setup' | i18n}}</span> </a>\n\n          <ul>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/setup/branches\">{{'Branches' | i18n}}</a>\n            </li>\n          </ul>\n        </li>\n\n      <!--<li>\n        <a title=\"Dashboard\"><i class=\"fa fa-lg fa-fw fa-home\"></i> <span\n          class=\"menu-item-parent\">{{'Dashboard' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/dashboard/analytics\">{{'Analytics Dashboard' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/dashboard/social\">{{'Social Wall' | i18n}}</a>\n          </li>\n        </ul>\n      </li>\n\n      <li class=\"top-menu-invisible\">\n        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-cube txt-color-blue\"></i> <span class=\"menu-item-parent\">{{'SmartAdmin Intel' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/smartadmin/app-layouts\"><i class=\"fa fa-gear\"></i>\n              {{'App Layouts' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/smartadmin/prebuilt-skins\"><i class=\"fa fa-picture-o\"></i>\n              {{'Prebuilt Skins' | i18n}}</a>\n          </li>\n        </ul>\n      </li>\n\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/outlook\" title=\"Outlook\">\n          <i class=\"fa fa-lg fa-fw fa-inbox\"></i> <span class=\"menu-item-parent\">{{'Outlook' | i18n}}</span><span\n          class=\"badge pull-right inbox-badge margin-right-13\">14</span></a>\n      </li>\n\n      <li>\n        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-bar-chart-o\"></i> <span\n          class=\"menu-item-parent\">{{'Graphs' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/graphs/flot-charts\">{{'Flot Chart' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/graphs/morris-charts\">{{'Morris Charts' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/graphs/sparklines\">{{'Sparkline' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/graphs/easy-pie-charts\">{{'Easy Pie Charts' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/graphs/dygraphs\">{{'Dygraphs' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/graphs/chart-js\">Chart.js</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/graphs/highchart-tables\">Highchart Tables <span\n              class=\"badge pull-right inbox-badge bg-color-yellow\">new</span></a>\n          </li>\n        </ul>\n      </li>\n\n      <li>\n        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-table\"></i> <span\n          class=\"menu-item-parent\">{{'Tables' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/tables/normal\">{{'Normal Tables' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/tables/datatables\">{{'Data Tables' | i18n}} <span\n              class=\"badge inbox-badge bg-color-greenLight\">v1.10</span></a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/tables/ngx-datatable\">{{'Ngx Datatable' | i18n}} <span\n              class=\"badge inbox-badge bg-color-redLight\">new</span></a>\n          </li>\n        </ul>\n      </li>\n\n      <li>\n        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-pencil-square-o\"></i> <span\n          class=\"menu-item-parent\">{{'Forms' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/elements\">{{'Smart Form Elements' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/layouts\">{{'Smart Form Layouts' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/validation\">{{'Smart Form Validation' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/bootstrap-elements\">{{'Bootstrap Form Elements' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/bootstrap-validation\">{{'Bootstrap Form Validation' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/plugins\">{{'Form Plugins' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/wizards\">{{'Wizards' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/editors\">{{'Bootstrap Editors' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/dropzone\">{{'Dropzone' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/forms/image-cropping\">{{'Image Cropping' | i18n}} <span\n              class=\"badge pull-right inbox-badge bg-color-yellow\">new</span></a>\n          </li>\n        </ul>\n      </li>\n\n      <li>\n        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-desktop\"></i> <span\n          class=\"menu-item-parent\">{{'UI Elements' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/ui/general\">{{'General Elements' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/ui/buttons\">{{'Buttons' | i18n}}</a>\n          </li>\n          <li>\n            <a href=\"#\">{{'Icons' | i18n}}</a>\n            <ul>\n              <li routerLinkActive=\"active\">\n                <a routerLink=\"/ui/icons/font-awesome\"><i class=\"fa fa-plane\"></i> {{'Font Awesome' | i18n}}</a>\n              </li>\n              <li routerLinkActive=\"active\">\n                <a routerLink=\"/ui/icons/glyphicons\"><i class=\"glyphicon glyphicon-plane\"></i>\n                  {{'Glyph Icons' | i18n}}</a>\n              </li>\n              <li routerLinkActive=\"active\">\n                <a routerLink=\"/ui/icons/flags\"><i class=\"fa fa-flag\"></i> {{'Flags' | i18n}}</a>\n              </li>\n            </ul>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/ui/grid\">{{'Grid' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/ui/tree-views\">{{'Tree View' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/ui/nestable-lists\">{{'Nestable Lists' | i18n}}</a>\n          </li>\n           <li routerLinkActive=\"active\">\n            <a routerLink=\"/ui/typography\">{{'Typography' | i18n}}</a>\n          </li>\n          <li>\n            <a href=\"#\">{{'Six Level Menu' | i18n}}</a>\n            <ul>\n              <li>\n                <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> {{'Item #2' | i18n}}</a>\n                <ul>\n                  <li>\n                    <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> {{'Sub #2.1' | i18n}} </a>\n                    <ul>\n                      <li>\n                        <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i> {{'Item#2.1.1' | i18n}}</a>\n                      </li>\n                      <li>\n                        <a href=\"#\"><i class=\"fa fa-fw fa-plus\"></i>{{'Expand' | i18n}}</a>\n                        <ul>\n                          <li>\n                            <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i>\n                              {{'File' | i18n}}</a>\n                          </li>\n                          <li>\n                            <a href=\"#\"><i class=\"fa fa-fw fa-trash-o\"></i>\n                              {{'Delete' | i18n}}</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> {{'Item #3' | i18n}}</a>\n\n                <ul>\n                  <li>\n                    <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> {{'3ed Level' | i18n}}\n                    </a>\n                    <ul>\n                      <li>\n                        <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i>\n                          {{'File' | i18n}}</a>\n                      </li>\n                      <li>\n                        <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i>\n                          {{'File' | i18n}}</a>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/widgets\" title=\"Widgets\"><i class=\"fa fa-lg fa-fw fa-list-alt\"></i><span\n          class=\"menu-item-parent\">{{'Widgets' | i18n}}</span></a>\n      </li>\n\n      <li>\n        <a href=\"#\">\n          <i class=\"fa fa-lg fa-fw fa-cloud\"><em>3</em></i> <span\n          class=\"menu-item-parent\">{{'Cool Features' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/calendar\" title=\"Calendar\"><i\n              class=\"fa fa-lg fa-fw fa-calendar\"></i> <span\n              class=\"menu-item-parent\">{{'Calendar' | i18n}}</span></a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/maps\"><i class=\"fa fa-lg fa-fw fa-map-marker\"></i> <span class=\"menu-item-parent\">{{'GMap Skins' | i18n}}</span><span\n              class=\"badge bg-color-greenLight pull-right inbox-badge\">9</span></a>\n          </li>\n        </ul>\n      </li>\n\n      <li>\n        <a href=\"#\">\n          <i class=\"fa fa-lg fa-fw fa-puzzle-piece\"></i> <span\n          class=\"menu-item-parent\">{{'App Views' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/app-views/projects\"><i class=\"fa fa-file-text-o\"></i>\n              {{'Projects' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/app-views/blog\"><i class=\"fa fa-paragraph\"></i> {{'Blog' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/app-views/gallery\"><i class=\"fa fa-picture-o\"></i>\n              {{'Gallery' | i18n}}</a>\n          </li>\n\n          <li>\n            <a href=\"#\"><i class=\"fa fa-comments\"></i> {{'Forum Layout' | i18n}}</a>\n            <ul>\n              <li routerLinkActive=\"active\">\n                <a routerLink=\"/app-views/forum/general-view\"><i class=\"fa fa-picture-o\"></i>\n                  {{'General View' | i18n}}</a>\n              </li>\n              <li routerLinkActive=\"active\">\n                <a routerLink=\"/app-views/forum/topic-view\"><i class=\"fa fa-picture-o\"></i>\n                  {{'Topic View' | i18n}}</a>\n              </li>\n              <li routerLinkActive=\"active\">\n                <a routerLink=\"/app-views/forum/post-view\"><i class=\"fa fa-picture-o\"></i>\n                  {{'Post View' | i18n}}</a>\n              </li>\n            </ul>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/app-views/profile\"><i class=\"fa fa-group\"></i>\n              {{'Profile' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/app-views/timeline\"><i class=\"fa fa-clock-o\"></i>\n              {{'Timeline' | i18n}}</a>\n          </li>\n        </ul>\n      </li>\n\n      <li>\n        <a href=\"#\">\n          <i class=\"fa fa-lg fa-fw fa-shopping-cart\"></i> <span\n          class=\"menu-item-parent\">{{'E-Commerce' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/e-commerce/orders\" title=\"Orders\"> {{'Orders' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/e-commerce/products-view\" title=\"Products View\"> {{'Products View' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/e-commerce/product-details\" title=\"Products Detail\"> {{'Products Detail' | i18n}}</a>\n          </li>\n        </ul>\n      </li>\n\n      <li>\n        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-windows\"></i> <span\n          class=\"menu-item-parent\">{{'Miscellaneous' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/miscellaneous/pricing-tables\">{{'Pricing Tables' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/miscellaneous/invoice\">{{'Invoice' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/auth/login\">{{'Login' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/auth/register\">{{'Register' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/auth/forgot-password\">{{'Forgot Password' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/auth/locked\">{{'Locked Screen' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/miscellaneous/error404\">{{'Error 404' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/miscellaneous/error500\">{{'Error 500' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/miscellaneous/blank\">{{'Blank Page' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/miscellaneous/email-template\">{{'Email Template' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/miscellaneous/search\">{{'Search Page' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/miscellaneous/ckeditor\">{{'CK Editor' | i18n}}</a>\n          </li>\n        </ul>\n      </li>-->\n\n    </ul>\n  </nav>\n\n  <sa-minify-menu></sa-minify-menu>\n\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-navigation',
            template: __webpack_require__("../../../../../src/app/shared/layout/navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_module__ = __webpack_require__("../../../../../src/app/shared/i18n/i18n.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/shared/layout/navigation/big-breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__ = __webpack_require__("../../../../../src/app/shared/layout/navigation/minify-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_component__ = __webpack_require__("../../../../../src/app/shared/layout/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__ = __webpack_require__("../../../../../src/app/shared/layout/navigation/smart-menu.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_module__ = __webpack_require__("../../../../../src/app/shared/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import {ChatModule} from "../../chat/chat.module";
var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_module__["a" /* I18nModule */],
                __WEBPACK_IMPORTED_MODULE_7__user_user_module__["a" /* UserModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__["a" /* BigBreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__["a" /* MinifyMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__["a" /* SmartMenuDirective */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__["a" /* BigBreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__["a" /* MinifyMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__["a" /* SmartMenuDirective */],
            ]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/navigation/smart-menu.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__ = __webpack_require__("../../../../../src/app/shared/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers__ = __webpack_require__("../../../../timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_timers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SmartMenuDirective = (function () {
    function SmartMenuDirective(menu, router, layoutService) {
        var _this = this;
        this.menu = menu;
        this.router = router;
        this.layoutService = layoutService;
        this.processLayout = function (layoutStore) {
            if (layoutStore.menuOnTop) {
                _this.$menu.find('li.open').each(function (i, li) {
                    _this.toggle($(li), false);
                });
            }
            else {
                _this.$menu.find('li.active').each(function (i, li) {
                    $(li).parents('li').each(function (j, parentLi) {
                        _this.toggle($(parentLi), true);
                    });
                });
            }
            if (layoutStore.mobileViewActivated) {
                $('body').removeClass("minified");
            }
        };
        this.$menu = $(this.menu.nativeElement);
    }
    SmartMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.processLayout(store);
        });
        // collapse menu on mobiles
        $('[routerLink]', this.$menu).on('click', function () {
            if (_this.layoutService.store.mobileViewActivated) {
                _this.layoutService.onCollapseMenu();
            }
        });
    };
    SmartMenuDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.$menu.find('li:has(> ul)').each(function (i, li) {
            var $menuItem = $(li);
            var $a = $menuItem.find('>a');
            var sign = $('<b class="collapse-sign"><em class="fa fa-plus-square-o"/></b>');
            $a.on('click', function (e) {
                _this.toggle($menuItem);
                e.stopPropagation();
                return false;
            }).append(sign);
        });
        Object(__WEBPACK_IMPORTED_MODULE_3_timers__["setTimeout"])(function () {
            _this.processLayout(_this.layoutService.store);
        }, 200);
    };
    SmartMenuDirective.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    SmartMenuDirective.prototype.toggle = function ($el, condition) {
        var _this = this;
        if (condition === void 0) { condition = !$el.data('open'); }
        $el.toggleClass('open', condition);
        if (condition) {
            $el.find('>ul').slideDown();
        }
        else {
            $el.find('>ul').slideUp();
        }
        $el.find('>a>.collapse-sign>em')
            .toggleClass('fa-plus-square-o', !condition)
            .toggleClass('fa-minus-square-o', condition);
        $el.data('open', condition);
        if (condition) {
            $el.siblings('.open').each(function (i, it) {
                var sib = $(it);
                _this.toggle(sib, false);
            });
        }
    };
    SmartMenuDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[saSmartMenu]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__["a" /* LayoutService */]])
    ], SmartMenuDirective);
    return SmartMenuDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/ribbon/ribbon.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- RIBBON -->\n<div id=\"ribbon\">\n  <ng-template #tipContent><i class=\"text-warning fa fa-warning\"></i> Warning! This will reset all your widget settings.</ng-template>\n\n    <span class=\"ribbon-button-alignment\">\n      <span id=\"refresh\" class=\"btn btn-ribbon\" (click)=\"resetWidgets()\"\n            placement=\"bottom\"\n            [tooltip]=\"tipContent\">\n        <i class=\"fa fa-refresh\"></i>\n      </span>\n    </span>\n  <sa-route-breadcrumbs></sa-route-breadcrumbs>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/ribbon/ribbon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RibbonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__("../../../../../src/app/shared/layout/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RibbonComponent = (function () {
    function RibbonComponent(layoutService) {
        this.layoutService = layoutService;
    }
    RibbonComponent.prototype.ngOnInit = function () {
    };
    RibbonComponent.prototype.resetWidgets = function () {
        this.layoutService.factoryReset();
    };
    RibbonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-ribbon',
            template: __webpack_require__("../../../../../src/app/shared/layout/ribbon/ribbon.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]])
    ], RibbonComponent);
    return RibbonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/ribbon/route-breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteBreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteBreadcrumbsComponent = (function () {
    function RouteBreadcrumbsComponent(router) {
        this.router = router;
        this.items = [];
    }
    RouteBreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.extract(this.router.routerState.root);
        this.sub = this.router.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; })
            .subscribe(function (v) {
            _this.items = [];
            _this.extract(_this.router.routerState.root);
        });
    };
    RouteBreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RouteBreadcrumbsComponent.prototype.extract = function (route) {
        var _this = this;
        var pageTitle = route.data.value['pageTitle'];
        if (pageTitle && this.items.indexOf(pageTitle) == -1) {
            this.items.push(route.data.value['pageTitle']);
        }
        if (route.children) {
            route.children.forEach(function (it) {
                _this.extract(it);
            });
        }
    };
    RouteBreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-route-breadcrumbs',
            template: "\n        <ol class=\"breadcrumb\">\n           <li *ngFor=\"let item of items\">{{item}}</li>\n        </ol>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RouteBreadcrumbsComponent);
    return RouteBreadcrumbsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/shortcut/shortcut.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"shortcut\" [@shortcutState]=\"state\">\n  <ul>\n    <li>\n      <a (click)=\"shortcutTo(['outlook'])\" class=\"jarvismetro-tile big-cubes bg-color-blue\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-envelope fa-4x\"></i> <span>Mail <span\n        class=\"label pull-right bg-color-darken\">14</span></span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['calendar'])\" class=\"jarvismetro-tile big-cubes bg-color-orangeDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-calendar fa-4x\"></i> <span>Calendar</span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['maps'])\" class=\"jarvismetro-tile big-cubes bg-color-purple\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-map-marker fa-4x\"></i> <span>Maps</span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['miscellaneous/invoice'])\" class=\"jarvismetro-tile big-cubes bg-color-blueDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-book fa-4x\"></i> <span>Invoice <span\n        class=\"label pull-right bg-color-darken\">99</span></span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['app-views/gallery'])\" class=\"jarvismetro-tile big-cubes bg-color-greenLight\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-picture-o fa-4x\"></i> <span>Gallery </span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['app-views/profile'])\" class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-user fa-4x\"></i> <span>My Profile </span> </span> </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/shortcut/shortcut.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_service__ = __webpack_require__("../../../../../src/app/shared/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShortcutComponent = (function () {
    function ShortcutComponent(layoutService, router, renderer, el) {
        this.layoutService = layoutService;
        this.router = router;
        this.renderer = renderer;
        this.el = el;
        this.state = 'out';
    }
    ShortcutComponent.prototype.shortcutTo = function (route) {
        this.router.navigate(route);
        this.layoutService.onShortcutToggle(false);
    };
    ShortcutComponent.prototype.ngOnInit = function () {
    };
    ShortcutComponent.prototype.listen = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.state = store.shortcutOpen ? 'in' : 'out';
            if (store.shortcutOpen) {
                _this.documentSub = _this.renderer.listenGlobal('document', 'mouseup', function (event) {
                    if (!_this.el.nativeElement.contains(event.target)) {
                        _this.layoutService.onShortcutToggle(false);
                        _this.documentUnsub();
                    }
                });
            }
            else {
                _this.documentUnsub();
            }
        });
    };
    ShortcutComponent.prototype.ngAfterContentInit = function () {
        this.listen();
    };
    ShortcutComponent.prototype.ngAfterViewInit = function () {
    };
    ShortcutComponent.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    ShortcutComponent.prototype.documentUnsub = function () {
        this.documentSub && this.documentSub();
        this.documentSub = null;
    };
    ShortcutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-shortcut',
            template: __webpack_require__("../../../../../src/app/shared/layout/shortcut/shortcut.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('shortcutState', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        height: 0,
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        height: '*',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('250ms ease-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('250ms 300ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ShortcutComponent);
    return ShortcutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/smartadmin.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    defaultLocale: "us",
    API_URL: "assets/api",
    menu_speed: 200,
    smartSkin: "smart-style-0",
    skins: [
        {
            name: "smart-style-0",
            logo: "assets/img/logo.png",
            skinBtnClass: "btn btn-block btn-xs txt-color-white margin-right-5",
            style: {
                backgroundColor: '#4E463F'
            },
            label: "Smart Default"
        },
        {
            name: "smart-style-1",
            logo: "assets/img/logo-white.png",
            skinBtnClass: "btn btn-block btn-xs txt-color-white",
            style: {
                background: '#3A4558'
            },
            label: "Dark Elegance"
        },
        {
            name: "smart-style-2",
            logo: "assets/img/logo-blue.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-darken margin-top-5",
            style: {
                background: '#fff'
            },
            label: "Ultra Light"
        },
        {
            name: "smart-style-3",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#f78c40'
            },
            label: "Google Skin"
        },
        {
            name: "smart-style-4",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#bbc0cf',
                border: '1px solid #59779E',
                color: '#17273D !important'
            },
            label: "PixelSmash"
        },
        {
            name: "smart-style-5",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: 'rgba(153, 179, 204, 0.2)',
                border: '1px solid rgba(121, 161, 221, 0.8)',
                color: '#17273D !important'
            },
            label: "Glass"
        }
    ],
    GOOGLE_API_KEY: 'AIzaSyDd8YW8k_J-Jkti-W4QNk5dL8O_5_2QUWY',
    sound_path: "assets/sound/",
    sound_on: true,
    /**
     * DEBUGGING MODE
     * debugState = true; will spit all debuging message inside browser console.
     * The colors are best displayed in chrome browser.
     */
    debugState: false,
    debugStyle: 'font-weight: bold; color: #00f;',
    debugStyle_green: 'font-weight: bold; font-style:italic; color: #46C246;',
    debugStyle_red: 'font-weight: bold; color: #ed1c24;',
    debugStyle_warning: 'background-color:yellow',
    debugStyle_success: 'background-color:green; font-weight:bold; color:#fff;',
    debugStyle_error: 'background-color:#ed1c24; font-weight:bold; color:#fff;',
    /**
     *  VOICE CONTROL
     */
    voice_command: true,
    voice_command_auto: false,
    /**
     *  Sets the language to the default 'en-US'. (supports over 50 languages
     *  by google)
     *
     *  Afrikaans         ['af-ZA']
     *  Bahasa Indonesia  ['id-ID']
     *  Bahasa Melayu     ['ms-MY']
     *  CatalГ            ['ca-ES']
     *  ДЊeЕЎtina         ['cs-CZ']
     *  Deutsch           ['de-DE']
     *  English           ['en-AU', 'Australia']
     *                    ['en-CA', 'Canada']
     *                    ['en-IN', 'India']
     *                    ['en-NZ', 'New Zealand']
     *                    ['en-ZA', 'South Africa']
     *                    ['en-GB', 'United Kingdom']
     *                    ['en-US', 'United States']
     *  EspaГ±ol          ['es-AR', 'Argentina']
     *                    ['es-BO', 'Bolivia']
     *                    ['es-CL', 'Chile']
     *                    ['es-CO', 'Colombia']
     *                    ['es-CR', 'Costa Rica']
     *                    ['es-EC', 'Ecuador']
     *                    ['es-SV', 'El Salvador']
     *                    ['es-ES', 'EspaГ±a']
     *                    ['es-US', 'Estados Unidos']
     *                    ['es-GT', 'Guatemala']
     *                    ['es-HN', 'Honduras']
     *                    ['es-MX', 'MГ©xico']
     *                    ['es-NI', 'Nicaragua']
     *                    ['es-PA', 'PanamГЎ']
     *                    ['es-PY', 'Paraguay']
     *                    ['es-PE', 'PerГє']
     *                    ['es-PR', 'Puerto Rico']
     *                    ['es-DO', 'RepГєblica Dominicana']
     *                    ['es-UY', 'Uruguay']
     *                    ['es-VE', 'Venezuela']
     *  Euskara           ['eu-ES']
     *  FranГ§ais         ['fr-FR']
     *  Galego            ['gl-ES']
     *  Hrvatski          ['hr_HR']
     *  IsiZulu           ['zu-ZA']
     *  ГЌslenska         ['is-IS']
     *  Italiano          ['it-IT', 'Italia']
     *                    ['it-CH', 'Svizzera']
     *  Magyar            ['hu-HU']
     *  Nederlands        ['nl-NL']
     *  Norsk bokmГҐl     ['nb-NO']
     *  Polski            ['pl-PL']
     *  PortuguГЄs        ['pt-BR', 'Brasil']
     *                    ['pt-PT', 'Portugal']
     *  RomГўnДѓ          ['ro-RO']
     *  SlovenДЌina       ['sk-SK']
     *  Suomi             ['fi-FI']
     *  Svenska           ['sv-SE']
     *  TГјrkГ§e          ['tr-TR']
     *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
     *  PСѓСЃСЃРєРёР№     ['ru-RU']
     *  РЎСЂРїСЃРєРё      ['sr-RS']
     *  н•њкµ­м–ґ         ['ko-KR']
     *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
     *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
     *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
     *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
     *  ж—Ґжњ¬иЄћ         ['ja-JP']
     *  Lingua latД«na    ['la']
     */
    voice_command_lang: 'en-US',
    /**
     *  Use localstorage to remember on/off (best used with HTML Version)
     */
    voice_localStorage: false,
    /**
     * Voice Commands
     * Defines all voice command variables and functions
     */
    voice_commands: {
        'show dashboard': {
            type: 'navigate', payload: ['/dashboard/+analytics']
        },
        'show +social': {
            type: 'navigate', payload: ['/dashboard/+social']
        },
        'show outlook': {
            type: 'navigate', payload: ['/outlook']
        },
        'show graphs': {
            type: 'navigate', payload: ['/graphs/chart-js']
        },
        'show flot chart': {
            type: 'navigate', payload: ['/graphs/flot-charts']
        },
        'show morris chart': {
            type: 'navigate', payload: ['/graphs/morris-charts']
        },
        'show inline chart': {
            type: 'navigate', payload: ['/graphs/sparklines']
        },
        'show dygraphs': {
            type: 'navigate', payload: ['/graphs/dygraphs']
        },
        'show tables': {
            type: 'navigate', payload: ['/tables/normal']
        },
        'show data table': {
            type: 'navigate', payload: ['/tables/datatables']
        },
        'show form': {
            type: 'navigate', payload: ['/forms/elements']
        },
        'show form layouts': {
            type: 'navigate', payload: ['/forms/layouts']
        },
        'show form validation': {
            type: 'navigate', payload: ['/forms/validation']
        },
        'show form elements': {
            type: 'navigate', payload: ['/forms/bootstrap-elements']
        },
        'show form plugins': {
            type: 'navigate', payload: ['/forms/plugins']
        },
        'show form wizards': {
            type: 'navigate', payload: ['/forms/wizards']
        },
        'show bootstrap editor': {
            type: 'navigate', payload: ['/forms/editors']
        },
        'show dropzone': {
            type: 'navigate', payload: ['/forms/dropzone']
        },
        'show image cropping': {
            type: 'navigate', payload: ['/forms/image-cropping']
        },
        'show general elements': {
            type: 'navigate', payload: ['/ui/general-elements']
        },
        'show buttons': {
            type: 'navigate', payload: ['/ui/buttons']
        },
        'show fontawesome': {
            type: 'navigate', payload: ['/ui/icons/font-awesome']
        },
        'show glyph icons': {
            type: 'navigate', payload: ['/ui/icons/glyphicons']
        },
        'show flags': {
            type: 'navigate', payload: ['/ui/icons/flags']
        },
        'show grid': {
            type: 'navigate', payload: ['/ui/grid']
        },
        'show tree view': {
            type: 'navigate', payload: ['/ui/treeviews']
        },
        'show nestable lists': {
            type: 'navigate', payload: ['/ui/nestable-lists']
        },
        'show jquery U I': {
            type: 'navigate', payload: ['/ui/jquery-ui']
        },
        'show typography': {
            type: 'navigate', payload: ['/ui/typography']
        },
        'show calendar': {
            type: 'navigate', payload: ['/calendar']
        },
        'show widgets': {
            type: 'navigate', payload: ['/widgets']
        },
        'show gallery': {
            type: 'navigate', payload: ['/app-views/gallery']
        },
        'show maps': {
            type: 'navigate', payload: ['/maps']
        },
        'go back': function () {
            history.back();
        },
        'scroll up': function () {
            jQuery('html, body').animate({ scrollTop: 0 }, 100);
        },
        'scroll down': function () {
            jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 100);
        },
        'hide navigation': {
            type: 'layout',
            payload: 'hide navigation'
        },
        'show navigation': {
            type: 'layout',
            payload: 'show navigation'
        },
        'mute': {
            type: 'sound',
            payload: 'mute',
        },
        'sound on': {
            type: 'sound',
            payload: 'sound on',
        },
        'stop': {
            type: 'voice',
            payload: 'stop'
        },
        'help': {
            type: 'voice',
            payload: 'help on'
        },
        'got it': {
            type: 'voice',
            payload: 'help off'
        },
        'logout': {
            type: 'navigate',
            payload: ['/auth/login'],
        },
    }
};
// required for SmartNotification 
window['jQuery'].sound_on = config.sound_on;
window['jQuery'].sound_path = config.sound_path;


/***/ }),

/***/ "../../../../../src/app/shared/sound/sound.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound_service__ = __webpack_require__("../../../../../src/app/shared/sound/sound.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SoundModule = (function () {
    function SoundModule() {
    }
    SoundModule_1 = SoundModule;
    SoundModule.forRoot = function () {
        return {
            ngModule: SoundModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */]]
        };
    };
    SoundModule = SoundModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */]]
        })
    ], SoundModule);
    return SoundModule;
    var SoundModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sound/sound.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__("../../../../../src/app/shared/smartadmin.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SoundService = (function () {
    function SoundService(notificationService) {
        this.notificationService = notificationService;
        this.config = {
            basePath: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_path,
            mainExt: '.mp3',
            alternateExt: '.ogg',
        };
    }
    SoundService_1 = SoundService;
    SoundService.prototype.get = function (name) {
        var _this = this;
        if (SoundService_1.cache[name]) {
            return Promise.resolve(SoundService_1.cache[name]);
        }
        else {
            return new Promise(function (resolve, reject) {
                var audioElement = document.createElement('audio');
                if (navigator.userAgent.match('Firefox/')) {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.alternateExt);
                }
                else {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.mainExt);
                }
                audioElement.addEventListener('error', reject);
                audioElement.load();
                SoundService_1.cache[name] = audioElement;
                resolve(audioElement);
            });
        }
    };
    SoundService.prototype.play = function (name) {
        if (__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on) {
            this.get(name).then(function (audio) {
                audio.play();
            });
        }
    };
    SoundService.prototype.mute = function () {
        __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on = false;
        this.notificationService.smallBox({
            title: "MUTE",
            content: "All sounds have been muted!",
            color: "#a90329",
            timeout: 4000,
            icon: "fa fa-volume-off"
        });
    };
    SoundService.prototype.soundOn = function () {
        __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on = true;
        this.notificationService.smallBox({
            title: "UNMUTE",
            content: "All sounds have been turned on!",
            color: "#40ac2b",
            sound_file: 'voice_alert',
            timeout: 5000,
            icon: "fa fa-volume-up"
        });
    };
    SoundService.cache = {};
    SoundService = SoundService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */]])
    ], SoundService);
    return SoundService;
    var SoundService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/login-info/login-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-info\">\n  <span *ngIf=\"user?.picture\"><a (click)=\"toggleShortcut()\">\n\t   <img [src]=\"user.picture\" alt=\"me\"\n          class=\"online\"/><span>{{user.username }}</span> <i class=\"fa fa-angle-down\"></i>\n    </a>\n   </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/user/login-info/login-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__ = __webpack_require__("../../../../../src/app/shared/layout/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginInfoComponent = (function () {
    function LoginInfoComponent(userService, layoutService) {
        this.userService = userService;
        this.layoutService = layoutService;
    }
    LoginInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoginInfo().subscribe(function (user) {
            _this.user = user;
        });
    };
    LoginInfoComponent.prototype.toggleShortcut = function () {
        this.layoutService.onShortcutToggle();
    };
    LoginInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-login-info',
            template: __webpack_require__("../../../../../src/app/shared/user/login-info/login-info.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__["a" /* LayoutService */]])
    ], LoginInfoComponent);
    return LoginInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(router, notificationService) {
        this.router = router;
        this.notificationService = notificationService;
    }
    LogoutComponent.prototype.showPopup = function () {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
            content: "You can improve your security further after logging out by closing this opened browser",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Yes") {
                _this.logout();
            }
        });
    };
    LogoutComponent.prototype.logout = function () {
        this.router.navigate(['/auth/login']);
    };
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-logout',
            template: "\n<div id=\"logout\" (click)=\"showPopup()\" class=\"btn-header transparent pull-right\">\n        <span> <a routerlink=\"/auth/login\" title=\"Sign Out\" data-action=\"userLogout\"\n                  data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\"><i\n          class=\"fa fa-sign-out\"></i></a> </span>\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__ = __webpack_require__("../../../../../src/app/shared/user/login-info/login-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__("../../../../../src/app/shared/user/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__["a" /* LoginInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__["a" /* LoginInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__ = __webpack_require__("../../../../../src/app/core/api/json-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.userInfo = {
            username: 'Guest'
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    UserService.prototype.getLoginInfo = function () {
        var _this = this;
        return this.jsonApiService.fetch('/user/login-info.json')
            .do(function (user) {
            _this.userInfo = user;
            _this.user.next(user);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utils/body.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyService = (function () {
    function BodyService() {
        this.$body = $('body');
    }
    BodyService.prototype.addClass = function (className) {
        this.$body.addClass(className);
    };
    BodyService.prototype.removeClass = function (className) {
        this.$body.removeClass(className);
    };
    BodyService.prototype.toggleClass = function (className, state) {
        this.$body.toggleClass(className, state);
    };
    BodyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BodyService);
    return BodyService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utils/field-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FieldFilterPipe = (function () {
    function FieldFilterPipe() {
    }
    FieldFilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value)
            return items;
        return items.filter(function (it) { return it[field].toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    FieldFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'fieldFilter',
        })
    ], FieldFilterPipe);
    return FieldFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utils/moment.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format(format);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'moment'
        })
    ], MomentPipe);
    return MomentPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utils/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.smallBox = function (data, cb) {
        $.smallBox(data, cb);
    };
    NotificationService.prototype.bigBox = function (data, cb) {
        $.bigBox(data, cb);
    };
    NotificationService.prototype.smartMessageBox = function (data, cb) {
        $.SmartMessageBox(data, cb);
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utils/time.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeDirective = (function () {
    function TimeDirective() {
    }
    TimeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'time' })
    ], TimeDirective);
    return TimeDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utils/toggle-active.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleActiveDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleActiveDirective = (function () {
    function ToggleActiveDirective() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.active'), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ToggleActiveDirective.prototype, "saToggleActive", void 0);
    ToggleActiveDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[saToggleActive]'
        }),
        __metadata("design:paramtypes", [])
    ], ToggleActiveDirective);
    return ToggleActiveDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utils/utils.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_pipe__ = __webpack_require__("../../../../../src/app/shared/utils/moment.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_directive__ = __webpack_require__("../../../../../src/app/shared/utils/time.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/utils/field-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body_service__ = __webpack_require__("../../../../../src/app/shared/utils/body.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__ = __webpack_require__("../../../../../src/app/shared/utils/toggle-active.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UtilsModule = (function () {
    function UtilsModule() {
    }
    UtilsModule_1 = UtilsModule;
    UtilsModule.forRoot = function () {
        return {
            ngModule: UtilsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__body_service__["a" /* BodyService */], __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]]
        };
    };
    UtilsModule = UtilsModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__["a" /* ToggleActiveDirective */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["a" /* MomentPipe */], __WEBPACK_IMPORTED_MODULE_2__time_directive__["a" /* TimeDirective */], __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__["a" /* FieldFilterPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__["a" /* ToggleActiveDirective */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["a" /* MomentPipe */], __WEBPACK_IMPORTED_MODULE_2__time_directive__["a" /* TimeDirective */], __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__["a" /* FieldFilterPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__body_service__["a" /* BodyService */], __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]]
        })
    ], UtilsModule);
    return UtilsModule;
    var UtilsModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/voice-control/speech-button/speech-button.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"speech-btn\" class=\"btn-header transparent pull-right hidden-sm hidden-xs\" *ngIf=\"enabled\">\n  <div [popover]=\"speechPopover\">\n    <a title=\"Voice Command\" id=\"voice-command-btn\" (click)=\"toggleVoiceControl()\"><i\n        class=\"fa fa-microphone\"></i></a>\n  </div>\n  <popover-content #speechPopover [closeOnClickOutside]=\"true\"\n                   placement=\"bottom\">\n    <ng-template [ngIf]=\"!hasError\">\n      <h4 class=\"vc-title\">Voice command activated <br/>\n        <small>Please speak clearly into the mic</small>\n      </h4>\n      <a (click)=\"openHelpModal()\" class=\"btn btn-success\">See Commands</a>\n      <a class=\"btn bg-color-purple txt-color-white\"\n         (click)=\"speechPopover.hide()\">Close Popup</a>\n    </ng-template>\n    <ng-template [ngIf]=\"hasError\">\n      <h4 class=\"vc-title-error text-center\">\n        <i class=\"fa fa-microphone-slash\"></i> Voice command failed\n        <br/>\n        <small class=\"txt-color-red\">Must <strong>\"Allow\"</strong> Microphone</small>\n        <br/>\n        <small class=\"txt-color-red\">Must have <strong>Internet Connection</strong>\n        </small>\n      </h4>\n    </ng-template>\n  </popover-content>\n</div>\n\n\n<ng-template #helpTemplate>\n      <div class=\"modal-body\">\n\n        <h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1>\n        <hr class=\"simple\">\n        <h5>Instruction</h5>\n\n        Click <span class=\"text-success\">\"Allow\"</span> to access your microphone and activate Voice Command.\n        You will notice a <span class=\"text-primary\"><strong>BLUE</strong> Flash</span> on the microphone icon\n        indicating activation.\n        The icon will appear <span class=\"text-danger\"><strong>RED</strong></span> <span class=\"label label-danger\"><i\n          class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=\"text-danger\">\"Deny\"</span> access or don't have\n        any microphone installed.\n        <br>\n        <br>\n        As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not\n        being used). In which case Voice Command will prompt you again to <span class=\"text-success\">\"Allow\"</span> or\n        <span class=\"text-danger\">\"Deny\"</span> access to your microphone.\n        <br>\n        <br>\n        If you host your page over <strong>http<span class=\"text-success\">s</span></strong> (secure socket layer)\n        protocol you can wave this security measure and have an unintrupted Voice Command.\n        <br>\n        <br>\n        <h5>Commands</h5>\n        <ul>\n          <li>\n            <strong>'show' </strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show\n            inbox\"</strong> or <strong>\"show calendar\"</strong>\n          </li>\n          <li>\n            <strong>'mute' </strong> - mutes all sound effects for the theme.\n          </li>\n          <li>\n            <strong>'sound on'</strong> - unmutes all sound effects for the theme.\n          </li>\n          <li>\n            <span class=\"text-danger\"><strong>'stop'</strong></span> - deactivates voice command.\n          </li>\n          <li>\n            <span class=\"text-primary\"><strong>'help'</strong></span> - brings up the command list\n          </li>\n          <li>\n            <span class=\"text-danger\"><strong>'got it'</strong></span> - closes help modal\n          </li>\n          <li>\n            <strong>'hide navigation'</strong> - toggle navigation collapse\n          </li>\n          <li>\n            <strong>'show navigation'</strong> - toggle navigation to open (can be used again to close)\n          </li>\n          <li>\n            <strong>'scroll up'</strong> - scrolls to the top of the page\n          </li>\n          <li>\n            <strong>'scroll down'</strong> - scrollts to the bottom of the page\n          </li>\n          <li>\n            <strong>'go back' </strong> - goes back in history (history -1 click)\n          </li>\n          <li>\n            <strong>'logout'</strong> - logs you out\n          </li>\n        </ul>\n        <br>\n        <h5>Adding your own commands</h5>\n        Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored\n        inside <strong>smartadmin.config.js</strong> file under the <code>config.voice_commands = &#123;&#123;'&#123;...&#125;'&#125;&#125;</code>.\n\n        <hr class=\"simple\">\n        <div class=\"text-right\">\n          <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"closeHelpModal()\">\n            Got it!\n          </button>\n        </div>\n\n      </div>\n</ng-template>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/voice-control/speech-button/speech-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voice_control_service__ = __webpack_require__("../../../../../src/app/shared/voice-control/voice-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voice_recognition_service__ = __webpack_require__("../../../../../src/app/shared/voice-control/voice-recognition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_timers__ = __webpack_require__("../../../../timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_timers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpeechButtonComponent = (function () {
    function SpeechButtonComponent(modalService, voiceControlService, voiceRecognitionService) {
        var _this = this;
        this.modalService = modalService;
        this.voiceControlService = voiceControlService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.hasError = false;
        this.enabled = false;
        this.isToggled = false;
        this.subs = {
            speech: null,
            help: null
        };
        this.enabled = this.voiceControlService.state.enabled && this.voiceControlService.state.available;
        this.subs.speech = this.voiceControlService.speechEvent$.subscribe(function (event) {
            _this.respondTo(event);
        });
        this.subs.help = this.voiceControlService.showHelp$.subscribe(function (value) {
            if (value) {
                _this.openHelpModal();
            }
            else {
                _this.closeHelpModal();
            }
        });
    }
    SpeechButtonComponent.prototype.ngOnInit = function () { };
    SpeechButtonComponent.prototype.ngOnDestroy = function () {
        this.subs.speech && this.subs.speech.unsubscribe();
        this.subs.help && this.subs.help.unsubscribe();
    };
    SpeechButtonComponent.prototype.openHelpModal = function () {
        this.modalRef = this.modalService.show(this.helpTemplate);
    };
    SpeechButtonComponent.prototype.closeHelpModal = function () {
        this.modalRef && this.modalRef.hide();
    };
    SpeechButtonComponent.prototype.toggleVoiceControl = function () {
        var _this = this;
        this.isToggled = !this.isToggled;
        if (!this.voiceControlService.state.started) {
            this.voiceControlService.voiceControlOn();
        }
        else {
            this.voiceControlService.voiceControlOff();
        }
        if (!this.isToggled) {
            Object(__WEBPACK_IMPORTED_MODULE_4_timers__["setTimeout"])(function () {
                _this.speechPopover.hide();
            }, 10);
        }
    };
    SpeechButtonComponent.prototype.respondTo = function (event) {
        if (!event)
            return;
        switch (event.type) {
            case 'start':
                this.hasError = false;
                break;
            case 'error':
                this.hasError = true;
                break;
            case 'match':
            case 'no match':
                if (this.isToggled) {
                    this.speechPopover.hide();
                }
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('speechPopover'),
        __metadata("design:type", Object)
    ], SpeechButtonComponent.prototype, "speechPopover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('helpTemplate'),
        __metadata("design:type", Object)
    ], SpeechButtonComponent.prototype, "helpTemplate", void 0);
    SpeechButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-speech-button',
            template: __webpack_require__("../../../../../src/app/shared/voice-control/speech-button/speech-button.component.html"),
            styles: [".vc-title-error {display: block;}"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__voice_control_service__["a" /* VoiceControlService */],
            __WEBPACK_IMPORTED_MODULE_2__voice_recognition_service__["a" /* VoiceRecognitionService */]])
    ], SpeechButtonComponent);
    return SpeechButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/voice-control/speech-recognition.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
var SpeechRecognition = (window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition']);


/***/ }),

/***/ "../../../../../src/app/shared/voice-control/voice-control.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceControlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sound_sound_module__ = __webpack_require__("../../../../../src/app/shared/sound/sound.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__ = __webpack_require__("../../../../../src/app/shared/utils/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voice_control_service__ = __webpack_require__("../../../../../src/app/shared/voice-control/voice-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__speech_button_speech_button_component__ = __webpack_require__("../../../../../src/app/shared/voice-control/speech-button/speech-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__ = __webpack_require__("../../../../../src/app/shared/voice-control/voice-recognition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_popover__ = __webpack_require__("../../../../ngx-popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_popover__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var VoiceControlModule = (function () {
    function VoiceControlModule() {
    }
    VoiceControlModule_1 = VoiceControlModule;
    VoiceControlModule.forRoot = function () {
        return {
            ngModule: VoiceControlModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_5__voice_control_service__["a" /* VoiceControlService */], __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__["a" /* VoiceRecognitionService */]]
        };
    };
    VoiceControlModule = VoiceControlModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["d" /* ModalModule */], __WEBPACK_IMPORTED_MODULE_8_ngx_popover__["PopoverModule"], __WEBPACK_IMPORTED_MODULE_3__sound_sound_module__["a" /* SoundModule */], __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__["a" /* UtilsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__speech_button_speech_button_component__["a" /* SpeechButtonComponent */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__speech_button_speech_button_component__["a" /* SpeechButtonComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__voice_control_service__["a" /* VoiceControlService */], __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__["a" /* VoiceRecognitionService */]],
        })
    ], VoiceControlModule);
    return VoiceControlModule;
    var VoiceControlModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/voice-control/voice-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__("../../../../../src/app/shared/smartadmin.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound_sound_service__ = __webpack_require__("../../../../../src/app/shared/sound/sound.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speech_recognition_api__ = __webpack_require__("../../../../../src/app/shared/voice-control/speech-recognition.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voice_recognition_service__ = __webpack_require__("../../../../../src/app/shared/voice-control/voice-recognition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_body_service__ = __webpack_require__("../../../../../src/app/shared/utils/body.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_layout_service__ = __webpack_require__("../../../../../src/app/shared/layout/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VoiceControlService = (function () {
    function VoiceControlService(componentFactoryResolver, app, soundService, voiceRecognitionService, notificationService, bodyService, router, layoutService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.app = app;
        this.soundService = soundService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.notificationService = notificationService;
        this.bodyService = bodyService;
        this.router = router;
        this.layoutService = layoutService;
        this.state = {
            enabled: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command,
            available: false,
            autoStart: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_auto,
            localStorage: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_localStorage,
            lang: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_lang,
            started: false,
        };
        this.showHelp$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.speechEvent$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.state.available = !!__WEBPACK_IMPORTED_MODULE_3__speech_recognition_api__["a" /* SpeechRecognition */];
        if (__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_auto) {
            this.voiceControlOn();
        }
        this.voiceRecognitionService.events
            .do(function (event) { return _this.speechEvent$.next(event); })
            .subscribe(function (event) {
            return _this.respondToEvent(event);
        });
    }
    VoiceControlService.prototype.showHelp = function () {
        this.showHelp$.next(true);
    };
    VoiceControlService.prototype.hideHelp = function () {
        this.showHelp$.next(false);
    };
    VoiceControlService.prototype.voiceControlOn = function () {
        this.soundService.play('voice_on');
        if (!this.voiceRecognitionService.commandsList.length) {
            this.voiceRecognitionService.addCommands(__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_commands);
        }
        this.voiceRecognitionService.start();
        this.state.started = true;
        this.bodyService.addClass('voice-command-active');
    };
    VoiceControlService.prototype.voiceControlOff = function () {
        this.soundService.play('voice_off');
        this.voiceRecognitionService.abort();
        this.state.started = false;
        this.bodyService.removeClass('voice-command-active');
    };
    VoiceControlService.prototype.respondToEvent = function (event) {
        switch (event.type) {
            case 'start':
                this.bodyService.removeClass("service-not-allowed");
                this.bodyService.addClass("service-allowed");
                break;
            case 'error':
                this.bodyService.removeClass("service-allowed");
                this.bodyService.addClass("service-not-allowed");
                break;
            case 'match':
                this.notificationService.smallBox({
                    title: event.payload,
                    content: "loading...",
                    color: "#333",
                    sound_file: 'voice_alert',
                    timeout: 2000
                });
                break;
            case 'no match':
                this.notificationService.smallBox({
                    title: "Error: <strong>" + ' " ' + event.payload + ' " ' + "</strong> no match found!",
                    content: "Please speak clearly into the microphone",
                    color: "#a90329",
                    timeout: 5000,
                    icon: "fa fa-microphone"
                });
                break;
            case 'action':
                this.respondToAction(event);
                break;
        }
    };
    VoiceControlService.prototype.respondToAction = function (action) {
        switch (action.actionType) {
            case 'voice':
                switch (action.payload) {
                    case 'help on':
                        this.showHelp();
                        break;
                    case 'help off':
                        this.hideHelp();
                        break;
                    case 'stop':
                        this.voiceControlOff();
                        this.notificationService.smallBox({
                            title: "VOICE COMMAND OFF",
                            content: "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                            color: "#40ac2b",
                            sound_file: 'voice_off',
                            timeout: 8000,
                            icon: "fa fa-microphone-slash"
                        });
                        break;
                }
                break;
            case 'navigate':
                this.router.navigate(action.payload);
                break;
            case 'layout':
                switch (action.payload) {
                    case 'show navigation':
                        this.layoutService.onCollapseMenu(false);
                        break;
                    case 'hide navigation':
                        this.layoutService.onCollapseMenu(true);
                        break;
                }
                break;
            case 'sound':
                switch (action.payload) {
                    case 'mute':
                        this.soundService.mute();
                        break;
                    case 'sound on':
                        this.soundService.soundOn();
                        break;
                }
                break;
        }
    };
    VoiceControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_2__sound_sound_service__["a" /* SoundService */],
            __WEBPACK_IMPORTED_MODULE_4__voice_recognition_service__["a" /* VoiceRecognitionService */],
            __WEBPACK_IMPORTED_MODULE_5__utils_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_6__utils_body_service__["a" /* BodyService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__layout_layout_service__["a" /* LayoutService */]])
    ], VoiceControlService);
    return VoiceControlService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/voice-control/voice-recognition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceRecognitionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_recognition_api__ = __webpack_require__("../../../../../src/app/shared/voice-control/speech-recognition.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__ = __webpack_require__("../../../../../src/app/shared/smartadmin.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VoiceRecognitionService = (function () {
    function VoiceRecognitionService() {
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.commandsList = [];
        this.callbacks = {
            start: [],
            error: [],
            end: [],
            result: [],
            resultMatch: [],
            resultNoMatch: [],
            errorNetwork: [],
            errorPermissionBlocked: [],
            errorPermissionDenied: []
        };
        this.autoRestart = false;
        this.lastStartedAt = 0;
    }
    VoiceRecognitionService.prototype.commandToRegExp = function (command) {
        var optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g;
        command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
            return optional ? match : '([^\\s]+)';
        }).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
        return new RegExp('^' + command + '$', 'i');
    };
    ;
    VoiceRecognitionService.prototype.isInitialized = function () {
        return !!this.recognition;
    };
    ;
    VoiceRecognitionService.prototype.initIfNeeded = function () {
        if (!this.isInitialized()) {
            this.init({}, false);
        }
    };
    ;
    // Initialize smartSpeechRecognition with a list of commands to recognize.
    // e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
    // smartSpeechRecognition understands commands with named variables, splats, and optional words.
    VoiceRecognitionService.prototype.init = function (commands, resetCommands) {
        var _this = this;
        if (resetCommands === void 0) { resetCommands = true; }
        var recognition = this.recognition;
        // Abort previous instances of recognition already running
        if (recognition && recognition.abort) {
            recognition.abort();
        }
        // initiate SpeechRecognition
        recognition = new __WEBPACK_IMPORTED_MODULE_1__speech_recognition_api__["a" /* SpeechRecognition */]();
        // Set the max number of alternative transcripts to try and match with a command
        recognition.maxAlternatives = 5;
        recognition.continuous = true;
        // Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
        recognition.lang = __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].voice_command_lang || 'en-US';
        recognition.onstart = function () {
            // invokeCallbacks(callbacks.start);
            //debugState
            if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle_success);
                console.log('Language setting is set to: ' + recognition.lang, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
            }
            _this.events.next({
                type: 'start'
            });
        };
        recognition.onerror = function (event) {
            // this.invokeCallbacks(this.callbacks.error);
            switch (event.error) {
                case 'network':
                    // this.invokeCallbacks(this.callbacks.errorNetwork);
                    break;
                case 'not-allowed':
                case 'service-not-allowed':
                    // if permission to use the mic is denied, turn off auto-restart
                    _this.autoRestart = false;
                    //debugState
                    if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                        console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle_warning);
                    }
                    // determine if permission was denied by user or automatically.
                    if (new Date().getTime() - _this.lastStartedAt < 200) {
                        // invokeCallbacks(callbacks.errorPermissionBlocked);
                    }
                    else {
                        // invokeCallbacks(callbacks.errorPermissionDenied);
                        //console.log("You need your mic to be active")
                    }
                    _this.events.emit({
                        type: 'error',
                        payload: event
                    });
                    break;
            }
        };
        recognition.onend = function () {
            // invokeCallbacks(this.callbacks.end);
            // smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
            _this.events.emit({
                type: 'end',
                payload: event
            });
            if (_this.autoRestart) {
                // play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
                var timeSinceLastStart = new Date().getTime() - _this.lastStartedAt;
                if (timeSinceLastStart < 1000) {
                    setTimeout(function () {
                        _this.start({});
                    }, 1000 - timeSinceLastStart);
                }
                else {
                    _this.start({});
                }
            }
        };
        recognition.onresult = function (event) {
            // this.invokeCallbacks(this.callbacks.result);
            var results = event.results[event.resultIndex];
            var commandText;
            // go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
            for (var i = 0; i < results.length; i++) {
                // the text recognized
                commandText = results[i].transcript.trim();
                if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                    console.log('Speech recognized: %c' + commandText, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
                }
                var _loop_1 = function (j, l) {
                    var result = _this.commandsList[j].command.exec(commandText);
                    if (result) {
                        var parameters = result.slice(1);
                        if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                            console.log('command matched: %c' + _this.commandsList[j].originalPhrase, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
                            if (parameters.length) {
                                console.log('with parameters', parameters);
                            }
                        }
                        if (_this.commandsList[j].type == 'action') {
                            setTimeout(function () {
                                _this.events.emit(_this.commandsList[j]);
                            }, 50);
                        }
                        else {
                            // execute the matched command
                            _this.commandsList[j].callback.apply(_this, parameters);
                        }
                        // this.invokeCallbacks(this.callbacks.resultMatch);
                        // for commands "sound on", "stop" and "mute" do not play sound or display message
                        var ignoreCallsFor = ["sound on", "mute", "stop"];
                        if (ignoreCallsFor.indexOf(_this.commandsList[j].originalPhrase) < 0) {
                            _this.events.emit({
                                type: 'match',
                                payload: _this.commandsList[j].originalPhrase
                            });
                        } // end if
                        return { value: true };
                    }
                };
                // try and match recognized text to one of the commands on the list
                for (var j = 0, l = _this.commandsList.length; j < l; j++) {
                    var state_1 = _loop_1(j, l);
                    if (typeof state_1 === "object")
                        return state_1.value;
                } // end for
            } // end for
            // invokeCallbacks(callbacks.resultNoMatch);
            //console.log("no match found for: " + commandText)
            _this.events.emit({
                type: 'no match',
                payload: commandText
            });
            return false;
        };
        // build commands list
        if (resetCommands) {
            this.commandsList = [];
        }
        if (commands.length) {
            this.addCommands(commands);
        }
        this.recognition = recognition;
    };
    // Start listening (asking for permission first, if needed).
    // Call this after you've initialized smartSpeechRecognition with commands.
    // Receives an optional options object:
    // { autoRestart: true }
    VoiceRecognitionService.prototype.start = function (options) {
        if (options === void 0) { options = {}; }
        this.initIfNeeded();
        if (options.autoRestart !== undefined) {
            this.autoRestart = !!options.autoRestart;
        }
        else {
            this.autoRestart = true;
        }
        this.lastStartedAt = new Date().getTime();
        this.recognition.start();
    };
    // abort the listening session (aka stop)
    VoiceRecognitionService.prototype.abort = function () {
        this.autoRestart = false;
        if (this.recognition && this.recognition.abort) {
            this.recognition.abort();
        }
    };
    // Turn on output of debug messages to the console. Ugly, but super-handy!
    VoiceRecognitionService.prototype.debug = function (newState) {
        if (arguments.length > 0) {
            __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState = !!newState;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState = true;
        }
    };
    // Set the language the user will speak in. If not called, defaults to 'en-US'.
    // e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
    VoiceRecognitionService.prototype.setLanguage = function (language) {
        this.initIfNeeded();
        this.recognition.lang = language;
    };
    // Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
    VoiceRecognitionService.prototype.addCommands = function (commands) {
        var _this = this;
        var action, command;
        this.initIfNeeded();
        Object.keys(commands).forEach(function (phrase) {
            action = window[commands[phrase]] || commands[phrase];
            //convert command to regex
            command = _this.commandToRegExp(phrase);
            if (typeof action === 'function') {
                _this.commandsList.push({
                    type: 'function',
                    command: command,
                    callback: action,
                    originalPhrase: phrase
                });
            }
            if (typeof action === 'object') {
                _this.commandsList.push({
                    type: 'action',
                    command: command,
                    payload: action.payload,
                    actionType: action.type,
                    originalPhrase: phrase
                });
            }
        });
        if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
            console.log('Commands successfully loaded: %c' + this.commandsList.length, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
        }
    };
    // Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
    VoiceRecognitionService.prototype.removeCommands = function (commandsToRemove) {
        if (commandsToRemove === undefined) {
            this.commandsList = [];
            return;
        }
        commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
        this.commandsList = this.commandsList.filter(function (command) {
            for (var i = 0; i < commandsToRemove.length; i++) {
                if (commandsToRemove[i] === command.originalPhrase) {
                    return false;
                }
            }
            return true;
        });
    };
    ;
    // Lets the user add a callback of one of 9 types:
    // start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
    // Can also optionally receive a context for the callback function as the third argument
    VoiceRecognitionService.prototype.addCallback = function (type, callback, context) {
        if (this.callbacks[type] === undefined) {
            return;
        }
        var cb = window[callback] || callback;
        if (typeof cb !== 'function') {
            return;
        }
        this.callbacks[type].push({
            callback: cb,
            context: context || this
        });
    };
    VoiceRecognitionService.prototype.invokeCallbacks = function (callbacks) {
        callbacks.forEach(function (callback) {
            callback.callback.apply(callback.context);
        });
    };
    ;
    VoiceRecognitionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], VoiceRecognitionService);
    return VoiceRecognitionService;
}());



/***/ }),

/***/ "../../../../../src/app/ss-setup/components/branch-add/branch-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ss-setup/components/branch-add/branch-add.component.html":
/***/ (function(module, exports) {

module.exports = "<form id=\"smart-form-register\" class=\"smart-form\">\n  <header>\n    Add new branch here\n  </header>\n  <fieldset>\n    <section>\n      <label class=\"input\">\n        <input type=\"text\" name=\"brancName\" placeholder=\"Branch Name\" [(ngModel)]=\"branch.branchName\"/>\n      </label>\n    </section>\n    <section>\n      <label class=\"input\">\n        <input type=\"text\" name=\"companyName\" placeholder=\"Company Name\" [(ngModel)]=\"branch.companyName\"/>\n      </label>\n    </section>\n    <section>\n      <label class=\"input\">\n        <input type=\"text\" name=\"districtName\" placeholder=\"District Name\" [(ngModel)]=\"branch.districtName\"/>\n      </label>\n    </section>\n    <section>\n      <label class=\"input\">\n        <input type=\"text\" name=\"regionName\" placeholder=\"Region Name\" [(ngModel)]=\"branch.regionName\" />\n      </label>\n    </section>\n  </fieldset><footer>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addBranch()\">\n      Done\n    </button>\n  </footer>\n</form>"

/***/ }),

/***/ "../../../../../src/app/ss-setup/components/branch-add/branch-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_branch_branch_service__ = __webpack_require__("../../../../../src/app/ss-setup/services/branch/branch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BranchAddComponent = (function () {
    function BranchAddComponent(branchService) {
        this.branchService = branchService;
        this.branch = {};
    }
    BranchAddComponent.prototype.ngOnInit = function () {
    };
    BranchAddComponent.prototype.addBranch = function () {
        this.branchService.addBranch(this.branch);
        this.branch = {};
    };
    BranchAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-branch-add',
            template: __webpack_require__("../../../../../src/app/ss-setup/components/branch-add/branch-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ss-setup/components/branch-add/branch-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_branch_branch_service__["a" /* BranchService */]])
    ], BranchAddComponent);
    return BranchAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ss-setup/components/branch-list/branch-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ss-setup/components/branch-list/branch-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Branches list</h1>\n<ul>\n    <li *ngFor=\"let item of branches\">\n       <strong> {{item.branchName}} from {{item.companyName}} </strong>/ {{item.districtName}} / {{item.regionName}}\n    </li>\n</ul>\n    "

/***/ }),

/***/ "../../../../../src/app/ss-setup/components/branch-list/branch-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_branch_branch_service__ = __webpack_require__("../../../../../src/app/ss-setup/services/branch/branch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BranchListComponent = (function () {
    function BranchListComponent(branchService) {
        this.branchService = branchService;
        this.branches = [];
    }
    BranchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchService.getBranches().subscribe(function (t) {
            _this.branches = t;
        });
    };
    BranchListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-branch-list',
            template: __webpack_require__("../../../../../src/app/ss-setup/components/branch-list/branch-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ss-setup/components/branch-list/branch-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_branch_branch_service__["a" /* BranchService */]])
    ], BranchListComponent);
    return BranchListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ss-setup/components/branch/branch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ss-setup/components/branch/branch.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <div class=\"well\">             \n            <app-branch-list></app-branch-list>\n          </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"well\">\n          <app-branch-add></app-branch-add>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ss-setup/components/branch/branch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BranchComponent = (function () {
    function BranchComponent() {
    }
    BranchComponent.prototype.ngOnInit = function () {
    };
    BranchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-branch',
            template: __webpack_require__("../../../../../src/app/ss-setup/components/branch/branch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ss-setup/components/branch/branch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BranchComponent);
    return BranchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ss-setup/services/branch/branch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BranchService = (function () {
    function BranchService(afs) {
        this.afs = afs;
        this.branchCollection = this.afs.collection('Branch');
        this.branches = this.branchCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    BranchService.prototype.getBranches = function () {
        return this.branches;
    };
    BranchService.prototype.addBranch = function (branch) {
        this.branchCollection.add(branch);
    };
    BranchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], BranchService);
    return BranchService;
}());



/***/ }),

/***/ "../../../../../src/app/ss-setup/ss-setup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setupRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsSetupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_branch_branch_component__ = __webpack_require__("../../../../../src/app/ss-setup/components/branch/branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");


var setupRoutes = [
    {
        path: 'branches',
        component: __WEBPACK_IMPORTED_MODULE_0__components_branch_branch_component__["a" /* BranchComponent */],
        data: {
            pageTitle: 'Branch Setup'
        }
    }
];
var SsSetupRoutingModule = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(setupRoutes);


/***/ }),

/***/ "../../../../../src/app/ss-setup/ss-setup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsSetupModule", function() { return SsSetupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_branch_branch_service__ = __webpack_require__("../../../../../src/app/ss-setup/services/branch/branch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ss_setup_routing_module__ = __webpack_require__("../../../../../src/app/ss-setup/ss-setup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_branch_list_branch_list_component__ = __webpack_require__("../../../../../src/app/ss-setup/components/branch-list/branch-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_branch_branch_component__ = __webpack_require__("../../../../../src/app/ss-setup/components/branch/branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_branch_add_branch_add_component__ = __webpack_require__("../../../../../src/app/ss-setup/components/branch-add/branch-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Angular-Firebae module imports
 */
var SsSetupModule = (function () {
    function SsSetupModule() {
    }
    SsSetupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__ss_setup_routing_module__["a" /* SsSetupRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__components_branch_list_branch_list_component__["a" /* BranchListComponent */], __WEBPACK_IMPORTED_MODULE_6__components_branch_branch_component__["a" /* BranchComponent */], __WEBPACK_IMPORTED_MODULE_7__components_branch_add_branch_add_component__["a" /* BranchAddComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_branch_branch_service__["a" /* BranchService */]]
        })
    ], SsSetupModule);
    return SsSetupModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAIPa906Cb2_gdvaCuZEHSuQAR5UGkCuPk',
        authDomain: 'servsuite-gps-demo.firebaseapp.com',
        databaseURL: 'https://servsuite-gps-demo.firebaseio.com',
        projectId: 'servsuite-gps-demo',
        storageBucket: 'servsuite-gps-demo.appspot.com',
        messagingSenderId: '175866059081'
    }
};


/***/ }),

/***/ "../../../../../src/lib.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_skipWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skipWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery_ui_npm_jquery_ui_min_js__ = __webpack_require__("../../../../jquery-ui-npm/jquery-ui.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery_ui_npm_jquery_ui_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery_ui_npm_jquery_ui_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_imports_loader_jQuery_jquery_jquery_color_jquery_color_js__ = __webpack_require__("../../../../imports-loader/index.js?jQuery=jquery!../../../../jquery-color/jquery.color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_imports_loader_jQuery_jquery_jquery_color_jquery_color_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_imports_loader_jQuery_jquery_jquery_color_jquery_color_js__);
// RxJS



// import 'rxjs/add/operator/mergeMap';





// Smartadmin Dependencies
window['jQuery'] = __webpack_require__("../../../../jquery/dist/jquery.js");
window['$'] = window['jQuery'];

__webpack_require__("../../../../bootstrap/js/tooltip.js"); // required for X-editable
__webpack_require__("../../../../bootstrap/js/popover.js"); // required for X-editable
__webpack_require__("../../../../bootstrap/js/dropdown.js"); // required for bootstrap-colorpicker
__webpack_require__("../../../../bootstrap/js/tab.js"); //
__webpack_require__("../../../../bootstrap/js/modal.js"); //
window['moment'] = __webpack_require__("../../../../moment/moment.js");

__webpack_require__("../../../../smartadmin-plugins/notification/SmartNotification.min.js");


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__("../../../../../src/lib.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map