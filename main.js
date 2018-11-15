(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<tv-map></tv-map>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (route) { return route.data; }))
            .subscribe(function (event) { return _this.titleService.setTitle(event.title); });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _maps_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps/map/map.component */ "./src/app/maps/map/map.component.ts");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
/* harmony import */ var _errors_errors_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors/errors.module */ "./src/app/errors/errors.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _maps_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDhshvFaKlwMcb4W-3loUsCldP1OQ6UA7k'
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_6__["AgmDirectionModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _errors_errors_module__WEBPACK_IMPORTED_MODULE_7__["ErrorsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "./src/app/errors/not-found/not-found.component.ts");
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");
/* harmony import */ var _errors_global_error_global_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors/global-error/global-error.component */ "./src/app/errors/global-error/global-error.component.ts");
/* harmony import */ var _maps_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps/map/map.component */ "./src/app/maps/map/map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'user/:userName',
        pathMatch: 'full',
        component: _maps_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        resolve: {
            photos: _maps_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]
        },
        data: {
            title: 'Timeline'
        }
    },
    {
        path: 'p/add',
        component: _maps_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            title: 'Photo upload'
        }
    },
    {
        path: 'p/:photoId',
        component: _maps_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        data: {
            title: 'Photo detail'
        }
    },
    {
        path: 'error',
        component: _errors_global_error_global_error_component__WEBPACK_IMPORTED_MODULE_4__["GlobalErrorComponent"],
        data: {
            title: 'Error'
        }
    },
    {
        path: 'not-found',
        component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
        data: {
            title: 'Not found'
        }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/core/auth/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.userService.isLogged()) {
            this.router.navigate([''], {
                queryParams: {
                    fromUrl: state.url
                }
            });
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth/request.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/core/auth/request.interceptor.ts ***!
  \**************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token/token.service */ "./src/app/core/token/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(tokenService) {
        this.tokenService = tokenService;
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        if (this.tokenService.hasToken()) {
            var token = this.tokenService.getToken();
            req = req.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return next.handle(req);
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/request.interceptor */ "./src/app/core/auth/request.interceptor.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/alert/alert.module */ "./src/app/shared/components/alert/alert.module.ts");
/* harmony import */ var _shared_components_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/loading/loading.module */ "./src/app/shared/components/loading/loading.module.ts");
/* harmony import */ var _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/menu/menu.module */ "./src/app/shared/components/menu/menu.module.ts");
/* harmony import */ var _shared_directives_show_if_logged_show_if_logged_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/directives/show-if-logged/show-if-logged.module */ "./src/app/shared/directives/show-if-logged/show-if-logged.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertModule"],
                _shared_components_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__["LoadingModule"],
                _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_9__["MenuModule"],
                _shared_directives_show_if_logged_show_if_logged_module__WEBPACK_IMPORTED_MODULE_10__["ShowIfLoggedModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["RequestInterceptor"],
                    multi: true
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"mt-5\" *ngIf=\"(user$ | async) as user\">\r\n    <div class=\"fixed-bottom bg-white p-1\">\r\n        <div class=\"container\">\r\n            <div class=\"row text-center\">\r\n                <div class=\"col-6\">\r\n                    <a [routerLink]=\"['']\">\r\n                        <i class=\"fa fa-home fa-2x\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <a [routerLink]=\"['p', 'add']\">\r\n                        <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(userService) {
        this.userService = userService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.user$ = this.userService.getUser();
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"fixed-top\">\r\n\r\n    <nav class=\"navbar navbar-light bg-white\">\r\n        <a class=\"navbar-brand\">\r\n            <i tabindex=\"0\" (keyup.space)=\"menu.toggle()\" (click)=\"menu.toggle()\" class=\"fa fa-bars mr-2\"></i>\r\n            ALURAPIC\r\n        </a>\r\n        \r\n        <ap-menu #menu>\r\n            <ul class=\"list-unstyled\">\r\n                <li>\r\n                    <a showIfLogged [routerLink]=\"['p','add']\">Upload</a>\r\n                </li>\r\n            </ul>\r\n        </ap-menu>\r\n\r\n        <div *ngIf=\"(user$ | async) as user; else login\">\r\n            <i class=\"fa fa-user-circle mr-1\"></i>\r\n            <a class=\"mr-1\">{{ user.name}}</a>\r\n            <a (click)=\"logout()\">(Logout)</a>\r\n        </div>\r\n\r\n        <ng-template #login>\r\n            <span class=\"navbar-text\">\r\n                <a [routerLink]=\"['']\">Please, login!</a>\r\n            </span>\r\n        </ng-template> \r\n    </nav>\r\n    <div class=\"fixed-top\">\r\n        <ap-loading></ap-loading>\r\n        <ap-alert></ap-alert>\r\n    </div>\r\n</header>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user$ = userService.getUser();
    }
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/token/token.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/token/token.service.ts ***!
  \*********************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KEY = 'authToken';
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.hasToken = function () {
        return !!this.getToken();
    };
    TokenService.prototype.setToken = function (token) {
        window.localStorage.setItem(KEY, token);
    };
    TokenService.prototype.getToken = function () {
        return window.localStorage.getItem(KEY);
    };
    TokenService.prototype.removeToken = function () {
        window.localStorage.removeItem(KEY);
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/core/user/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token/token.service */ "./src/app/core/token/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(tokenService) {
        this.tokenService = tokenService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }
    UserService.prototype.setToken = function (token) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    };
    UserService.prototype.getUser = function () {
        return this.userSubject.asObservable();
    };
    UserService.prototype.decodeAndNotify = function () {
        var token = this.tokenService.getToken();
        var user = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
        this.userName = user.name;
        this.userSubject.next(user);
    };
    UserService.prototype.logout = function () {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    };
    UserService.prototype.isLogged = function () {
        return this.tokenService.hasToken();
    };
    UserService.prototype.getUserName = function () {
        return this.userName;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/errors/errors.module.ts":
/*!*****************************************!*\
  !*** ./src/app/errors/errors.module.ts ***!
  \*****************************************/
/*! exports provided: ErrorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsModule", function() { return ErrorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/errors/not-found/not-found.component.ts");
/* harmony import */ var _global_error_handler_global_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-error-handler/global-error-handler */ "./src/app/errors/global-error-handler/global-error-handler.ts");
/* harmony import */ var _global_error_global_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-error/global-error.component */ "./src/app/errors/global-error/global-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ErrorsModule = /** @class */ (function () {
    function ErrorsModule() {
    }
    ErrorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
                _global_error_global_error_component__WEBPACK_IMPORTED_MODULE_5__["GlobalErrorComponent"]
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
                    useClass: _global_error_handler_global_error_handler__WEBPACK_IMPORTED_MODULE_4__["GlobalErrorHandler"]
                }
            ]
        })
    ], ErrorsModule);
    return ErrorsModule;
}());



/***/ }),

/***/ "./src/app/errors/global-error-handler/global-error-handler.ts":
/*!*********************************************************************!*\
  !*** ./src/app/errors/global-error-handler/global-error-handler.ts ***!
  \*********************************************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var stacktrace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stacktrace-js */ "./node_modules/stacktrace-js/stacktrace.js");
/* harmony import */ var stacktrace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stacktrace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _server_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-log.service */ "./src/app/errors/global-error-handler/server-log.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(injector) {
        this.injector = injector;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        var location = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]);
        var userService = this.injector.get(_core_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]);
        var serverLogService = this.injector.get(_server_log_service__WEBPACK_IMPORTED_MODULE_4__["ServerLogService"]);
        var router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]);
        var url = location instanceof _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"]
            ? location.path()
            : '';
        var message = error.message
            ? error.message :
            error.toString();
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production)
            router.navigate(['/error']);
        stacktrace_js__WEBPACK_IMPORTED_MODULE_1__["fromError"](error)
            .then(function (stackFrames) {
            var stackAsString = stackFrames
                .map(function (sf) { return sf.toString(); })
                .join('\n');
            console.log(message);
            console.log(stackAsString);
            console.log('o que será enviado para o servidor');
            serverLogService.log({
                message: message,
                url: url,
                userName: userService.getUserName(),
                stack: stackAsString
            }).subscribe(function () { return console.log('Error logged on server'); }, function (err) {
                console.log(err);
                console.log('Fail to send error log to server');
            });
        });
    };
    GlobalErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}());



/***/ }),

/***/ "./src/app/errors/global-error-handler/server-log.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/errors/global-error-handler/server-log.service.ts ***!
  \*******************************************************************/
/*! exports provided: ServerLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerLogService", function() { return ServerLogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var API = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverLog;
var ServerLogService = /** @class */ (function () {
    function ServerLogService(http) {
        this.http = http;
    }
    ServerLogService.prototype.log = function (serverLog) {
        return this.http.post(API + '/infra/log', serverLog);
    };
    ServerLogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServerLogService);
    return ServerLogService;
}());



/***/ }),

/***/ "./src/app/errors/global-error/global-error.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/errors/global-error/global-error.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <h2>Ops! An error has ocurred!</h2>\r\n    <p>\r\n        Don´t worry, our team is aware of the problem!\r\n        <a [routerLink]=\"['']\">Return to the aplication.</a>\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/errors/global-error/global-error.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/errors/global-error/global-error.component.ts ***!
  \***************************************************************/
/*! exports provided: GlobalErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorComponent", function() { return GlobalErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalErrorComponent = /** @class */ (function () {
    function GlobalErrorComponent() {
    }
    GlobalErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./global-error.component.html */ "./src/app/errors/global-error/global-error.component.html")
        })
    ], GlobalErrorComponent);
    return GlobalErrorComponent;
}());



/***/ }),

/***/ "./src/app/errors/not-found/not-found.component.css":
/*!**********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errors/not-found/not-found.component.html":
/*!***********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <h2>This page is not available</h2>\n    <p>\n        The link you have accessed may be broken or \n        the page may have been removed.\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/errors/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/errors/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/errors/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/maps/map/map.component.css":
/*!********************************************!*\
  !*** ./src/app/maps/map/map.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    \r\n    z-index: -999; \r\n    position: absolute;\r\n    height: 100%; \r\n    width: 100%; \r\n    padding: 0px;\r\n    border-width: 0px;\r\n    margin: 0px;\r\n    left: 0px; \r\n    top: 0px; \r\n    touch-action: pan-x pan-y;\r\n  }\r\n\r\n  .timeline-wrapper {\r\n    max-width: 100%;\r\n    overflow-x: hidden;\r\n    position: relative;\r\n}\r\n\r\n  .map-page-content {\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  position: relative;\r\n  transition: height .218s cubic-bezier(0.4,0.0,0.2,1);\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n\r\n  .map-page-content-wrapper {\r\n  box-sizing: border-box;\r\n  height: 100%;\r\n  padding-top: 112px;\r\n  position: absolute;\r\n  width: 533px;\r\n  transition: padding-top .218s cubic-bezier(0.4,0.0,0.2,1);\r\n  box-shadow: 0 1px 4px rgba(0,0,0,.06), 0 3px 6px rgba(0,0,0,.26);\r\n}\r\n\r\n  .timeline-app-bar-header {\r\n  background-color: #fff;\r\n  height: 64px;\r\n  padding: 0 24px;\r\n  align-items: center;\r\n  display: flex;\r\n}\r\n\r\n  user agent stylesheet\r\ndiv {\r\n  display: block;\r\n}\r\n\r\n  body {\r\n  color: rgba(0,0,0,0.87);\r\n  font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  margin: 0;\r\n}\r\n\r\n  .header-title {\r\n  color: rgba(0,0,0,.65);\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  align-items: center;\r\n  display: flex;\r\n  transition: color .218s cubic-bezier(0.4,0.0,0.2,1);\r\n}\r\n\r\n  .header-title {\r\n  color: rgba(0,0,0,.65);\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  align-items: center;\r\n  display: flex;\r\n  transition: color .218s cubic-bezier(0.4,0.0,0.2,1);\r\n}\r\n\r\n  h1 {\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n}\r\n\r\n  user agent stylesheet\r\nh1 {\r\n  display: block;\r\n  font-size: 2em;\r\n  -webkit-margin-before: 0.67em;\r\n          margin-block-start: 0.67em;\r\n  -webkit-margin-after: 0.67em;\r\n          margin-block-end: 0.67em;\r\n  -webkit-margin-start: 0px;\r\n          margin-inline-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n          margin-inline-end: 0px;\r\n  font-weight: bold;\r\n}\r\n\r\n  .header-feature-name {\r\n  padding-left: 16px;\r\n}\r\n\r\n  .header-today-button {\r\n  color: rgba(0,0,0,.65);\r\n  margin-left: auto;\r\n  margin-right: -16px;\r\n}\r\n\r\n  .material-flat-button {\r\n  background: none;\r\n  border: none;\r\n  border-radius: 2px;\r\n  color: rgba(0,0,0,0.87);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  height: auto;\r\n  line-height: 36px;\r\n  margin: 0;\r\n  min-height: 36px;\r\n  min-width: 0;\r\n  outline: none;\r\n  padding: 0 16px;\r\n  text-transform: uppercase;\r\n  transition: all .218s cubic-bezier(0.4,0.0,0.2,1);\r\n}\r\n\r\n  user agent stylesheet\r\ninput[type=\"button\" i], input[type=\"submit\" i], input[type=\"reset\" i], input[type=\"file\" i]::-webkit-file-upload-button, button {\r\n  padding: 1px 6px;\r\n}\r\n\r\n  user agent stylesheet\r\ninput[type=\"button\" i], input[type=\"submit\" i], input[type=\"reset\" i], input[type=\"file\" i]::-webkit-file-upload-button, button {\r\n  align-items: flex-start;\r\n  text-align: center;\r\n  cursor: default;\r\n  color: buttontext;\r\n  background-color: buttonface;\r\n  box-sizing: border-box;\r\n  padding: 2px 6px 3px;\r\n  border-width: 2px;\r\n  border-style: outset;\r\n  border-color: buttonface;\r\n  border-image: initial;\r\n}\r\n\r\n  user agent stylesheet\r\ninput, textarea, select, button {\r\n  text-rendering: auto;\r\n  color: initial;\r\n  letter-spacing: normal;\r\n  word-spacing: normal;\r\n  text-transform: none;\r\n  text-indent: 0px;\r\n  text-shadow: none;\r\n  display: inline-block;\r\n  text-align: start;\r\n  margin: 0em;\r\n  font: 400 13.3333px Arial;\r\n}\r\n\r\n  user agent stylesheet\r\ninput, textarea, select, button, meter, progress {\r\n  -webkit-writing-mode: horizontal-tb !important;\r\n}\r\n\r\n  user agent stylesheet\r\nbutton {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n  body {\r\n  color: rgba(0,0,0,0.87);\r\n  font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/maps/map/map.component.html":
/*!*********************************************!*\
  !*** ./src/app/maps/map/map.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">   \r\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n\r\n    <agm-marker *ngFor=\"let i of agmMarkers\" \r\n      [latitude]=\"i.lat\" [longitude]=\"i.lng\" [iconUrl]=\"i.icn\">\r\n    </agm-marker>\r\n\r\n    <agm-direction\r\n    [waypoints]=\"waypoints\" \r\n    [renderOptions]=\"renderOptions\" \r\n    [markerOptions]=\"markerOptions\"    \r\n    *ngIf=\"dir\" \r\n      [origin]=\"dir.origin\" [destination]=\"dir.destination\">\r\n    </agm-direction>\r\n\r\n  </agm-map>  \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/maps/map/map.component.ts":
/*!*******************************************!*\
  !*** ./src/app/maps/map/map.component.ts ***!
  \*******************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.service */ "./src/app/maps/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent(MapService) {
        this.MapService = MapService;
        this.title = 'Trace View';
        this.lat = -23.689963;
        this.lng = -46.686912;
        this.mcar = "https://cdn3.iconfinder.com/data/icons/fatcow/32/link_add.png";
        this.agmMarkers = [
            {
                lat: 12.954517,
                lng: 77.3507335,
            }
        ];
        this.waypoints = [];
        this.renderOptions = {
            draggable: false,
            suppressMarkers: true,
        };
        this.markerOptions = {
            origin: {
                draggable: false,
                opacity: 0.0,
            },
            destination: {
                draggable: false,
                opacity: 0.0,
            },
        };
        this.dir = undefined;
        this.zoom = 14;
    }
    /*lat: Number = 24.799448;
    lng: Number = 120.979021;    */
    MapComponent.prototype.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
            });
        }
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MapService
            .getMessage()
            .subscribe(function (msg) {
            console.log("msg: " + JSON.stringify(msg));
            _this.updateMarkers(msg);
        });
        this.getDirection();
    };
    MapComponent.prototype.getDirection = function () {
        this.dir = {
            origin: { lat: this.lat, lng: this.lng },
            destination: { lat: -23.645765, lng: -46.804175 }
        };
    };
    MapComponent.prototype.updateMarkers = function (msg) {
        this.agmMarkers = [];
        var iterable = [
            {
                "lat": -23.689963, "lng": -46.686912
            },
            {
                "lat": -24.689963, "lng": -45.686912
            }
        ];
        for (var _i = 0, iterable_1 = iterable; _i < iterable_1.length; _i++) {
            var entry = iterable_1[_i];
            this.agmMarkers.push({
                lat: +entry.lat,
                lng: +entry.lng,
            });
        }
        for (var _a = 0, msg_1 = msg; _a < msg_1.length; _a++) {
            var entry = msg_1[_a];
            console.log("entry.latlng.lat: " + entry.lat);
            console.log("entry.latlng.lng: " + entry.lng);
            this.agmMarkers.push({
                lat: +entry.lat,
                lng: +entry.lng,
                icn: this.mcar
            });
        }
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tv-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/maps/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/maps/map/map.component.css")],
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/maps/map/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/maps/map/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MapService = /** @class */ (function () {
    function MapService() {
        this.Local = [];
    }
    MapService.prototype.getMessage = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ "lat": -23.689963, "lng": -46.686912 }, { "lat": -24.689963, "lng": -45.686912 });
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"text-center {{ getAlertClass(alert) }}\">\r\n    {{ alert.message }}\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/components/alert/alert.service.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./src/app/shared/components/alert/alert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertComponent = /** @class */ (function () {
    function AlertComponent(AlertService) {
        var _this = this;
        this.AlertService = AlertService;
        this.timeout = 3000;
        this.alerts = [];
        this.AlertService
            .getAlert()
            .subscribe(function (alert) {
            if (!alert) {
                _this.alerts = [];
                return;
            }
            _this.alerts.push(alert);
            setTimeout(function () { return _this.removeAlert(alert); }, _this.timeout);
        });
    }
    AlertComponent.prototype.removeAlert = function (alertToRemove) {
        this.alerts = this.alerts.filter(function (alert) { return alert != alertToRemove; });
    };
    AlertComponent.prototype.getAlertClass = function (alert) {
        if (!alert)
            return '';
        switch (alert.alertType) {
            case _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].DANGER:
                return 'alert alert-danger';
            case _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].INFO:
                return 'alert alert-info';
            case _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].SUCCESS:
                return 'alert alert-success';
            case _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].WARNING:
                return 'alert alert-warning';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "timeout", void 0);
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/shared/components/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/alert/alert.module.ts ***!
  \*********************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]],
            exports: [_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        })
    ], AlertModule);
    return AlertModule;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/alert/alert.service.ts ***!
  \**********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./src/app/shared/components/alert/alert.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.alertSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterRouteChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    _this.keepAfterRouteChange = false;
                }
                else {
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].SUCCESS, message, keepAfterRouteChange);
    };
    AlertService.prototype.warning = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].WARNING, message, keepAfterRouteChange);
    };
    AlertService.prototype.danger = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].DANGER, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].INFO, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (alertType, message, keepAfterRouteChange) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.alertSubject.next(new _alert__WEBPACK_IMPORTED_MODULE_2__["Alert"](alertType, message));
    };
    AlertService.prototype.getAlert = function () {
        return this.alertSubject.asObservable();
    };
    AlertService.prototype.clear = function () {
        this.alertSubject.next(null);
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/components/alert/alert.ts ***!
  \**************************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert(alertType, message) {
        this.alertType = alertType;
        this.message = message;
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["SUCCESS"] = 0] = "SUCCESS";
    AlertType[AlertType["WARNING"] = 1] = "WARNING";
    AlertType[AlertType["DANGER"] = 2] = "DANGER";
    AlertType[AlertType["INFO"] = 3] = "INFO";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/shared/components/loading/loading-type.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/loading/loading-type.ts ***!
  \***********************************************************/
/*! exports provided: LoadingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingType", function() { return LoadingType; });
var LoadingType;
(function (LoadingType) {
    LoadingType["LOADING"] = "loading";
    LoadingType["STOPPED"] = "stopped";
})(LoadingType || (LoadingType = {}));


/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\r\n    margin: 0;\r\n    background: linear-gradient(270deg, #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee);\r\n    -webkit-animation: progress 2s ease;\r\n            animation: progress 2s ease;\r\n    height: 0.2em;\r\n}\r\n\r\n@-webkit-keyframes progress {\r\n    0% {\r\n        width: 0;\r\n    }\r\n    100% {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@keyframes progress {\r\n    0% {\r\n        width: 0;\r\n    }\r\n    100% {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.stopped {\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr [ngClass]=\"loading$ | async\">\r\n"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.service */ "./src/app/shared/components/loading/loading.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(loadingService) {
        this.loadingService = loadingService;
    }
    LoadingComponent.prototype.ngOnInit = function () {
        this.loading$ = this.loadingService
            .getLoading()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (loadingType) { return loadingType.valueOf(); }));
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/shared/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loading/loading.interceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ "./src/app/shared/components/loading/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(loadingService) {
        this.loadingService = loadingService;
    }
    LoadingInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.loadingService.stop();
            }
            else {
                _this.loadingService.start();
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            _this.loadingService.stop();
            throw err;
        }));
    };
    LoadingInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/components/loading/loading.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.module.ts ***!
  \*************************************************************/
/*! exports provided: LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loading_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.interceptor */ "./src/app/shared/components/loading/loading.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"]],
            exports: [_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _loading_interceptor__WEBPACK_IMPORTED_MODULE_4__["LoadingInterceptor"],
                    multi: true
                }]
        })
    ], LoadingModule);
    return LoadingModule;
}());



/***/ }),

/***/ "./src/app/shared/components/loading/loading.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.service.ts ***!
  \**************************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-type */ "./src/app/shared/components/loading/loading-type.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoadingService.prototype.getLoading = function () {
        return this.loadingSubject
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_loading_type__WEBPACK_IMPORTED_MODULE_1__["LoadingType"].STOPPED));
    };
    LoadingService.prototype.start = function () {
        this.loadingSubject.next(_loading_type__WEBPACK_IMPORTED_MODULE_1__["LoadingType"].LOADING);
    };
    LoadingService.prototype.stop = function () {
        this.loadingSubject.next(_loading_type__WEBPACK_IMPORTED_MODULE_1__["LoadingType"].STOPPED);
    };
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-bar {\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 90%;\r\n    max-width: 320px;\r\n    margin: 0;\r\n    padding: 1em;\r\n    background: #f0f0f0;\r\n    top: 0;\r\n    left: -90%;\r\n    transition: left 0.3s ease-out;\r\n    z-index: 1;\r\n}\r\n\r\n.active-menu .menu-bar {\r\n    left: 0;\r\n}\r\n\r\n.active-menu .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0,0,0, 0.4);\r\n}"

/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{ 'active-menu': isShown }\">\r\n    <div class=\"menu-bar\">\r\n        <i \r\n            tabindex=\"0\" \r\n            class=\"fa fa-window-close\" \r\n            (keyup.space)=\"toggle()\" \r\n            (click)=\"toggle()\">\r\n        </i>\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"overlay\" (click)=\"toggle()\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.isShown = false;
    }
    MenuComponent.prototype.toggle = function () {
        this.isShown = !this.isShown;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/shared/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/shared/components/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/menu/menu.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/menu/menu.module.ts ***!
  \*******************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component */ "./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]],
            exports: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/show-if-logged/show-if-logged.directive.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/directives/show-if-logged/show-if-logged.directive.ts ***!
  \******************************************************************************/
/*! exports provided: ShowIfLoggedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowIfLoggedDirective", function() { return ShowIfLoggedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/user/user.service */ "./src/app/core/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowIfLoggedDirective = /** @class */ (function () {
    function ShowIfLoggedDirective(element, renderer, userService) {
        this.element = element;
        this.renderer = renderer;
        this.userService = userService;
    }
    ShowIfLoggedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.userService.getUser().subscribe(function (user) {
            if (user) {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'display', _this.currentDisplay);
            }
            else {
                _this.currentDisplay = getComputedStyle(_this.element.nativeElement).display;
                _this.renderer.setElementStyle(_this.element.nativeElement, 'display', 'none');
            }
        });
    };
    ShowIfLoggedDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[showIfLogged]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ShowIfLoggedDirective);
    return ShowIfLoggedDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/show-if-logged/show-if-logged.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/directives/show-if-logged/show-if-logged.module.ts ***!
  \***************************************************************************/
/*! exports provided: ShowIfLoggedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowIfLoggedModule", function() { return ShowIfLoggedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _show_if_logged_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-if-logged.directive */ "./src/app/shared/directives/show-if-logged/show-if-logged.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowIfLoggedModule = /** @class */ (function () {
    function ShowIfLoggedModule() {
    }
    ShowIfLoggedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_show_if_logged_directive__WEBPACK_IMPORTED_MODULE_1__["ShowIfLoggedDirective"]],
            exports: [_show_if_logged_directive__WEBPACK_IMPORTED_MODULE_1__["ShowIfLoggedDirective"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        })
    ], ShowIfLoggedModule);
    return ShowIfLoggedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    ApiUrl: 'http://localhost:3000',
    serverLog: 'http://localhost:7000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Git\trace-view2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map