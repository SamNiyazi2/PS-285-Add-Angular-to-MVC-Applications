webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/AutoFocusDirective.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/11/2021 09:45 am - SSN 
// https://netbasal.com/autofocus-that-works-anytime-in-angular-apps-68cb89a3f057
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoFocusDirective = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(host) {
        this.host = host;
    }
    AutoFocusDirective.prototype.ngAfterViewInit = function () {
        if (this.host.nativeElement) {
            this.host.nativeElement.focus();
            this.host.nativeElement.classList.add('testClass');
        }
    };
    var _a;
    AutoFocusDirective = __decorate([
        core_1.Directive({
            selector: '[autofocus-v2]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" ? _a : Object])
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());
exports.AutoFocusDirective = AutoFocusDirective;
//# sourceMappingURL=AutoFocusDirective.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/09/2021 04:35 pm - SSN - [20210309-1631] - [001] - M03-07 - Angular routing
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var product_list_component_1 = __webpack_require__("../../../../../src/app/product/product-list.component.ts");
var product_detail_component_1 = __webpack_require__("../../../../../src/app/product/product-detail.component.ts");
var routes = [
    {
        // All routes must be in lowercase
        // All routes must be in lowercase
        // All routes must be in lowercase
        // All routes must be in lowercase
        path: 'product_ang',
        component: product_list_component_1.ProductListComponent
    },
    //{
    //    path: 'product/product_ang',
    //    redirectTo: 'productlist'
    //},
    {
        path: 'productdetail/:id',
        component: product_detail_component_1.ProductDetailComponent
    },
    {
        path: '**',
        redirectTo: 'product_ang'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ptc-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var lowerCaseUrlSerializer_1 = __webpack_require__("../../../../../src/app/lowerCaseUrlSerializer.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/product/product.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var product_list_component_1 = __webpack_require__("../../../../../src/app/product/product-list.component.ts");
var category_service_1 = __webpack_require__("../../../../../src/app/category/category.service.ts");
var product_detail_component_1 = __webpack_require__("../../../../../src/app/product/product-detail.component.ts");
var AutoFocusDirective_1 = __webpack_require__("../../../../../src/app/AutoFocusDirective.ts");
var index_1 = __webpack_require__("../../../../../src/app/errorMessages/index.ts");
var index_2 = __webpack_require__("../../../../../src/app/errorMessages/index.ts");
var index_3 = __webpack_require__("../../../../../src/app/shared/index.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                AutoFocusDirective_1.AutoFocusDirective,
                index_1.ErrorMessageFilterPipe,
                index_2.ErrorMessagesDisplayComponent,
                index_3.NotLowerCaseValidatorDirective,
                index_3.MinValidatorDirective,
                index_3.MaxValidatorDirective,
                index_3.ErrorcheckerValidatorDirective
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                {
                    provide: router_1.UrlSerializer,
                    useClass: lowerCaseUrlSerializer_1.LowerCaseUrlSerializer
                },
                product_service_1.ProductService,
                category_service_1.CategoryService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/10/2021 01:08 pm - SSN - [20210310-1305] - [002] - M05-04 - Create category classes to call web API
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/observable/throw.js");
var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.url = '/api/CategoryApi';
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(this.url).map(this.extractData).catch(this.handleErrors);
    };
    CategoryService.prototype.getSearchCategories = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url + '/SearchCategories', null, options).map(this.extractData).catch(this.handleErrors);
    };
    CategoryService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CategoryService.prototype.handleErrors = function (error) {
        var errors = [];
        switch (error.status) {
            case 400:
                var err = error.json();
                if (err.message) {
                    errors.push('[err-ssn-20210310-1320-A]: ' + err.message);
                }
                else {
                    error.push('[err-ssn-20210310-1320-B]: ' + 'An Unknown error occurred.');
                }
                break;
            case 404:
                errors.push('No product data is available');
                break;
            case 500:
                errors.push('[err-ssn-20210310-1320-C]: ' + error.json().exceptionMessage);
                break;
            default:
                error.push('[err-ssn-20210310-1320-D]: Status: ' + error.status + ' - Error message: ' + error.statusText);
        }
        console.error('[20210310-1320] An error occurred', errors);
        return Observable_1.Observable.throw(errors);
    };
    var _a;
    CategoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" ? _a : Object])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/errorMessages/errorMessage.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/11/2021 01:25 pm - SSN
Object.defineProperty(exports, "__esModule", { value: true });
exports.ccl = exports.createErrorMessage = void 0;
function createErrorMessage(key, msg) {
    return { key: key, msg: msg };
}
exports.createErrorMessage = createErrorMessage;
function ccl(msg, color) {
    if (color === void 0) { color = 'cyan'; }
    var d = new Date();
    var t = d.toLocaleTimeString();
    if (typeof (msg) == 'string') {
        if (msg === '') {
            console.log(' ');
        }
        else {
            console.log("%c" + t + ": " + msg, "color:" + color);
        }
    }
    else {
        console.log(msg);
    }
}
exports.ccl = ccl;
//# sourceMappingURL=errorMessage.model.js.map

/***/ }),

/***/ "../../../../../src/app/errorMessages/errorMessagesDisplay.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\" *ngIf=\"applicableErrorMessage  && applicableErrorMessage .length\">-->\r\n\r\n<div class=\"row\" [ngClass]=\"{delayedDisplay:applicableErrorMessage  && applicableErrorMessage.length,cssHidden:!(applicableErrorMessage  && applicableErrorMessage.length)}\">\r\n    <div class=\"col-xs-12 cssErrorMessages\">\r\n        <!--alert alert-warning alert-short-->\r\n            <ul>\r\n                <li *ngFor=\"let msg of applicableErrorMessage \">{{msg.msg}}</li>\r\n            </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/errorMessages/errorMessagesDisplay.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessagesDisplayComponent = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var errorMessage_model_1 = __webpack_require__("../../../../../src/app/errorMessages/errorMessage.model.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
// 03/11/2021 02:12 pm - SSN 
// 05/29/2021 12:16 am - SSN - [20210528-1458] - [004] - Angular validations - New product
var ErrorMessagesDisplayComponent = /** @class */ (function () {
    function ErrorMessagesDisplayComponent() {
        this.applicableErrorMessage = [];
    }
    ErrorMessagesDisplayComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.applicableErrorMessage.splice(0, this.applicableErrorMessage.length);
        if (this.control && this.control.errors) {
            var dbErrorNo_1 = 0;
            for (var _i = 0, _a = this.errorMessages.filter(function (r) { return r.key.toLocaleLowerCase() == _this.keyname.toLocaleLowerCase(); }); _i < _a.length; _i++) {
                var error2 = _a[_i];
                if (this.control.errors) {
                    this.control.errors["dbError" + dbErrorNo_1++] = error2.msg;
                }
            }
            ;
            if (!this.control.pristine || this.mouseOverSave) {
                for (var error1 in this.control.errors) {
                    this.applicableErrorMessage.push(errorMessage_model_1.createErrorMessage(this.keyname, error1 + ": " + JSON.stringify(this.control.errors[error1])));
                }
                ;
            }
        }
        var dbErrorNo = 0;
        for (var _b = 0, _c = this.errorMessages.filter(function (r) { return r.key.toLocaleLowerCase() == _this.keyname.toLocaleLowerCase() || (r.key.toLocaleLowerCase() + '--').startsWith(_this.keyname.toLocaleLowerCase()); }); _b < _c.length; _b++) {
            var error3 = _c[_b];
            errorMessage_model_1.ccl('dberror');
            errorMessage_model_1.ccl(error3);
            this.applicableErrorMessage.push(errorMessage_model_1.createErrorMessage(this.keyname, error3.msg));
        }
        ;
    };
    var _a;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ErrorMessagesDisplayComponent.prototype, "errorMessages", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ErrorMessagesDisplayComponent.prototype, "keyvalue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorMessagesDisplayComponent.prototype, "keyname", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof forms_1.FormControl !== "undefined" && forms_1.FormControl) === "function" ? _a : Object)
    ], ErrorMessagesDisplayComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ErrorMessagesDisplayComponent.prototype, "mouseOverSave", void 0);
    ErrorMessagesDisplayComponent = __decorate([
        core_1.Component({
            selector: 'error-messages-display',
            template: __webpack_require__("../../../../../src/app/errorMessages/errorMessagesDisplay.component.html")
        })
    ], ErrorMessagesDisplayComponent);
    return ErrorMessagesDisplayComponent;
}());
exports.ErrorMessagesDisplayComponent = ErrorMessagesDisplayComponent;
//# sourceMappingURL=errorMessagesDisplay.component.js.map

/***/ }),

/***/ "../../../../../src/app/errorMessages/errorMessagesFilter.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessageFilterPipe = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
// 03/11/2021 01:42 pm - SSN 
// https://medium.com/@ghoul.ahmed5/pure-vs-impure-pipe-in-angular-2152cf073e4d
var ErrorMessageFilterPipe = /** @class */ (function () {
    function ErrorMessageFilterPipe() {
    }
    ErrorMessageFilterPipe.prototype.transform = function (errorMessages, key) {
        if (!errorMessages || !key) {
            return errorMessages;
        }
        return errorMessages.filter(function (r) { return r.key === key; });
    };
    ErrorMessageFilterPipe = __decorate([
        core_1.Pipe({
            name: 'errorMessageFilter',
            pure: true
        })
    ], ErrorMessageFilterPipe);
    return ErrorMessageFilterPipe;
}());
exports.ErrorMessageFilterPipe = ErrorMessageFilterPipe;
//# sourceMappingURL=errorMessagesFilter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/errorMessages/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errorMessage_model_1 = __webpack_require__("../../../../../src/app/errorMessages/errorMessage.model.ts");
Object.defineProperty(exports, "createErrorMessage", { enumerable: true, get: function () { return errorMessage_model_1.createErrorMessage; } });
Object.defineProperty(exports, "IErrorMessage", { enumerable: true, get: function () { return errorMessage_model_1.IErrorMessage; } });
var errorMessagesFilter_pipe_1 = __webpack_require__("../../../../../src/app/errorMessages/errorMessagesFilter.pipe.ts");
Object.defineProperty(exports, "ErrorMessageFilterPipe", { enumerable: true, get: function () { return errorMessagesFilter_pipe_1.ErrorMessageFilterPipe; } });
var errorMessagesDisplay_component_1 = __webpack_require__("../../../../../src/app/errorMessages/errorMessagesDisplay.component.ts");
Object.defineProperty(exports, "ErrorMessagesDisplayComponent", { enumerable: true, get: function () { return errorMessagesDisplay_component_1.ErrorMessagesDisplayComponent; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/lowerCaseUrlSerializer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/09/2021 04:56 pm - SSN - [20210309-1631] - [002] - M03-07 - Angular routing
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowerCaseUrlSerializer = void 0;
// https://www.codeproject.com/Questions/1231299/Angular-url-case-insensitive
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var LowerCaseUrlSerializer = /** @class */ (function (_super) {
    __extends(LowerCaseUrlSerializer, _super);
    function LowerCaseUrlSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowerCaseUrlSerializer.prototype.parse = function (url) {
        var path = url.split('?')[0];
        var query = url.split('?')[1] || '';
        var finalUrl = path.toLowerCase() + (query !== '' ? "?" + query : '');
        return _super.prototype.parse.call(this, finalUrl);
    };
    return LowerCaseUrlSerializer;
}(router_1.DefaultUrlSerializer));
exports.LowerCaseUrlSerializer = LowerCaseUrlSerializer;
//# sourceMappingURL=lowerCaseUrlSerializer.js.map

/***/ }),

/***/ "../../../../../src/app/product/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div (click)=\"setMouseOverSave(null)\">\r\n\r\n    <form #productForm=\"ngForm\">\r\n \r\n\r\n            <div class=\"row\" *ngIf=\"!product\">\r\n                <p class=\"alert alert-danger\">No product was selected.</p>\r\n                <p><a href=\"~/src/product_ang\">Products List</a></p>\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"row\" *ngIf=\"product\">\r\n\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"panel panel-primary\">\r\n\r\n                        <div class=\"panel-heading\">\r\n                            <h1 class=\"panel-title\">\r\n                                Product Information\r\n                                <span class=\"small\">(Angular)</span>\r\n                            </h1>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"panel-body\">\r\n\r\n                            <!-- Begin detail area -->\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"productName\">Product name</label>\r\n                                <input id=\"productName\"\r\n                                       name=\"productName\"\r\n                                       #productName=\"ngModel\"\r\n                                       required\r\n                                       minlength=\"4\"\r\n                                       maxlength=\"50\"\r\n                                       validateNotLowercase\r\n                                       type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       autofocus-v2\r\n                                       placeholder=\"Enter product name\"\r\n                                       title=\"Enter product naem\"\r\n                                       [(ngModel)]=\"product.productName\" />\r\n\r\n                                <error-messages-display [errorMessages]=\"messages\" [keyvalue]=\"productName.value\" keyname=\"productName\" [control]=\"productName\" [mouseOverSave]=\"mouseOverSave\"></error-messages-display>\r\n\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"categoryId\">Product Category</label>\r\n                                <select id=\"categoryId\"\r\n                                        name=\"categoryId\"\r\n                                        #categoryId=\"ngModel\"\r\n                                        required\r\n                                        [(ngModel)]=\"product.categoryId\"\r\n                                        class=\"form-control\">\r\n                                    <option value=\"\">Make a selection</option>\r\n                                    <option *ngFor=\"let cat of categories\" value=\"{{cat.categoryId}}\">{{cat.categoryName}}</option>\r\n                                </select>\r\n\r\n                                <error-messages-display [errorMessages]=\"messages\" [keyvalue]=\"categoryId.value\" keyname=\"categoryId\" [control]=\"categoryId\" [mouseOverSave]=\"mouseOverSave\"></error-messages-display>\r\n\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"introductionDate\">Introduction Date</label>\r\n                                <input id=\"introductionDate\"\r\n                                       name=\"introductionDate\"\r\n                                       #introductionDate=\"ngModel\"\r\n                                       required\r\n\r\n\r\n                                       type=\"date\"\r\n                                       class=\"form-control\"\r\n                                       placeholder=\"Enter introduction date\"\r\n                                       title=\"Enter introduction date\"\r\n                                       [(ngModel)]=\"product.introductionDate\" />\r\n\r\n                                <error-messages-display [errorMessages]=\"messages\" [keyvalue]=\"introductionDate.value\" keyname=\"introductionDate\" [control]=\"introductionDate\" [mouseOverSave]=\"mouseOverSave\"></error-messages-display>\r\n\r\n\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"price\">Price</label>\r\n                                <input id=\"price\"\r\n                                       name=\"price\"\r\n                                       #price=\"ngModel\"\r\n                                       required\r\n                                       min=2.10\r\n                                       max=3000\r\n                                       type=\"number\"\r\n                                       class=\"form-control\"\r\n                                       placeholder=\"Enter price\"\r\n                                       title=\"Enter price\"\r\n                                       [(ngModel)]=\"product.price\" />\r\n\r\n                                <error-messages-display [errorMessages]=\"messages\" [keyvalue]=\"price.value\" keyname=\"price\" [control]=\"price\" [mouseOverSave]=\"mouseOverSave\"></error-messages-display>\r\n\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"url\">URL</label>\r\n                                <input id=\"url\"\r\n                                       name=\"url\"\r\n                                       #url=\"ngModel\"\r\n                                       required\r\n                                       type=\"url\"\r\n\r\n                                       \r\n                                       errorchecker\r\n                                       fieldname=url\r\n                                       [errormessages]=\"messages\"\r\n\r\n                                       class=\"form-control\"\r\n                                       placeholder=\"Enter the URL\"\r\n                                       title=\"Enter the URL\"\r\n                                       [(ngModel)]=\"product.url\" />\r\n\r\n                                <error-messages-display [errorMessages]=\"messages\" [keyvalue]=\"url.value\" keyname=\"url\" [control]=\"url\" [mouseOverSave]=\"mouseOverSave\"></error-messages-display>\r\n\r\n                            </div>\r\n\r\n                            <!-- End detail area -->\r\n\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"panel-footer\">\r\n\r\n                            <span (mouseover)=\"setMouseOverSave(true)\" (mouseout)=\"setMouseOverSave(false)\">\r\n                                <button class=\"btn btn-success\" (click)=\"saveProduct(productForm)\" [disabled]=\"productForm.form.invalid\">Save</button>\r\n                            </span>\r\n                            <button class=\"btn btn-primary\" (click)=\"goBack()\">Cancel</button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/product/product-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/10/2021 04:12 pm - SSN - [20210310-1611] - [001] - M06-03 - Create product detail component classdetail component clas
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailComponent = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var product_1 = __webpack_require__("../../../../../src/app/product/product.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/product/product.service.ts");
var category_service_1 = __webpack_require__("../../../../../src/app/category/category.service.ts");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(categoryService, location, productService, activatedRoute, router) {
        this.categoryService = categoryService;
        this.location = location;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.messages = [];
        this.categories = [];
        this.mouseOverSave = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = parseInt(params['id']);
            if (id != -1) {
                _this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (errors) { return _this.handleErrors; });
            }
            else {
                _this.product = new product_1.Product();
                _this.product.categoryId = "";
            }
        });
        this.getCategories();
    };
    ProductDetailComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (categories) { return _this.categories = categories.slice(1, categories.length); }, function (errors) { return _this.handleErrors(errors); });
    };
    ProductDetailComponent.prototype.goBack = function () {
        // 04/10/2022 06:39 am - SSN - use router
        // this.location.back();
        this.router.navigate(['product_ang']);
    };
    ProductDetailComponent.prototype.updateProduct = function (product, formObj) {
        var _this = this;
        this.productService.updateProduct(product).subscribe(function () {
            _this.goBack();
            toastr.success('Record was updated');
        }, function (errors) {
            _this.handleErrors(errors);
            toastr.error('Failed to update record');
        });
    };
    ProductDetailComponent.prototype.addProduct = function (product, formObj) {
        var _this = this;
        // To trigger showing db errors.
        this.setMouseOverSave(false);
        this.productService.addProduct(product).subscribe(function () {
            _this.goBack();
            toastr.success('Record was added');
        }, function (errors) {
            _this.handleErrors(errors);
            toastr.error('Failed to update record');
            formObj.updateValueAndValidity();
            // To trigger showing db errors.
            _this.setMouseOverSave(true);
        });
    };
    ProductDetailComponent.prototype.saveProduct = function (formObj) {
        if (this.product) {
            if (this.product.productId) {
                this.updateProduct(this.product, formObj);
            }
            else {
                this.addProduct(this.product, formObj);
            }
        }
    };
    ProductDetailComponent.prototype.handleErrors = function (errors) {
        // this.messages = this.messages.slice(this.messages.length-1,0);
        this.messages = this.messages.slice(0, 0);
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var msg = errors_1[_i];
            this.messages.push(msg);
        }
    };
    // 05/29/2021 12:20 am - SSN - [20210528-1458] - [005] - Angular validations - New product
    ProductDetailComponent.prototype.setMouseOverSave = function (setting) {
        //if (setting== null) {
        //    this.mouseOverSave = false;
        //    return;
        //}
        if (setting == true && setting != this.mouseOverSave) {
            this.mouseOverSave = setting;
        }
        //if (setting == false && setting != this.mouseOverSave) {
        //    setTimeout(() => {
        //        this.mouseOverSave = false;
        //    }, 5000);
        //}
    };
    var _a, _b, _c, _d, _e;
    ProductDetailComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/product/product-detail.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _a : Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" ? _b : Object, typeof (_c = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _c : Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" ? _d : Object, typeof (_e = typeof router_2.Router !== "undefined" && router_2.Router) === "function" ? _e : Object])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Product List <span class=\"small\">(Angular)</span></h2>\r\n\r\n<div class=\"row\" *ngIf=\"haveProductRecords\">\r\n\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">\r\n                <h1 class=\"panel-title\">\r\n                    Serch for Products\r\n                </h1>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"searchCategoryId\">Product Category</label>\r\n                    <select id=\"searchCategoryId\" name=\"searchCategoryId\" class=\"form-control\" [(ngModel)]=\"searchEntity.categoryId\">\r\n                        <option *ngFor=\"let cat of searchCategories\" value=\"{{cat.categoryId}}\">\r\n                            {{cat.categoryName}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"searchProductName\">Product Name</label>\r\n                    <input type=\"text\" id=\"searchProductName\" name=\"searchProductName\" [(ngModel)]=\"searchEntity.productName\" class=\"form-control\" />\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"panel-footer\">\r\n\r\n                <button formnovalidate=\"formnovalidate\"\r\n                        class=\"btn btn-sm btn-primary\"\r\n                        (click)=\"search(this)\">\r\n                    <i class=\"glyphicon glyphicon-search\"></i>\r\n                    &nbsp; Search\r\n                </button>\r\n\r\n                <button formnovalidate=\"formnovalidate\"\r\n                        class=\"btn btn-sm btn-primary\"\r\n                        (click)=\"resetSearch()\">\r\n                    <i class=\"glyphicon glyphicon-share-alt\"></i>\r\n                    &nbsp; Reset\r\n                </button>\r\n\r\n                <button formnovalidate=\"formnovalidate\"\r\n                        class=\"btn btn-sm btn-success\"\r\n                        (click)=\"add()\">\r\n                    <i class=\"glyphicon  glyphicon-plus\"></i>\r\n                    &nbsp; Add\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"messages && messages.length\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"alert alert-danger\">\r\n            <ul>\r\n                <li *ngFor=\"let msg of messages\">{{msg}}</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\" *ngIf=\"products && products.length\">\r\n\r\n    <div class=\"col-xs-12\">\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n\r\n            <table class=\"table table-condensed table-bordered table-striped table-hover\">\r\n                <thead>\r\n\r\n                    <tr>\r\n                        <td>Edit</td>\r\n                        <td>Product Name</td>\r\n                        <td>Introduction Date</td>\r\n                        <td>URL</td>\r\n                        <td class=\"text-right\">Price</td>\r\n                        <td>Delete</td>\r\n                    </tr>\r\n                </thead>\r\n\r\n\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let product of products\">\r\n\r\n                        <td>\r\n                            <button class=\"btn btn-default btn-sm\"\r\n                                    (click)=\"selectProduct(product.productId)\">\r\n                                <i class=\"glyphicon glyphicon-edit\"></i>\r\n                            </button>\r\n                        </td>\r\n\r\n                        <td>{{product.productName}}</td>\r\n                        <td>{{product.introductionDate|date}}</td>\r\n                        <td>{{product.url}}</td>\r\n                        <td class=\"text-right\">{{product.price|currency:'USD':true}}</td>\r\n\r\n                        <td>\r\n                            <button class=\"btn btn-default btn-sm\"\r\n                                    (click)=\"deleteProduct(product)\">\r\n                                <i class=\"glyphicon glyphicon-trash\"></i>\"\r\n                            </button>\r\n                        </td>\r\n\r\n                    </tr>\r\n\r\n\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/product/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/09/2021 04:10 pm - SSN - [20210309-1551] - [001] - M03-06 - Add product list component and HTML
// 03/10/2021 01:29 pm - SSN - [20210310-1324] - [001] - M05-05 - Build product search class. Update product list component
// 03/10/2021 01:40 pm - SSN - [20210310-1335] - [001] - M05-06 - Calling the category Web API
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListComponent = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/product/product.service.ts");
var category_service_1 = __webpack_require__("../../../../../src/app/category/category.service.ts");
var productSearch_1 = __webpack_require__("../../../../../src/app/product/productSearch.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, categoryService, router) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.router = router;
        this.products = [];
        this.messages = [];
        this.searchCategories = [];
        this.searchEntity = new productSearch_1.ProductSearch();
        this.haveProductRecords = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.searchEntity.categoryId = 0;
        this.getSearchCategories();
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.haveProductRecords = products && products.length > 0;
        }, function (errors) { return _this.handleErrors(errors); });
    };
    ;
    ProductListComponent.prototype.add = function () {
        this.router.navigate(['/productdetail', -1]);
    };
    ProductListComponent.prototype.selectProduct = function (id) {
        this.router.navigate(['/productdetail', id]);
    };
    ProductListComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        if (confirm('Delete this product? \n\nName: ' + product.productName)) {
            // this.productService.deleteProduct(product.productId).subscribe(() => this.getProducts(), errors => this.handleErrors(errors));
            this.productService.deleteProduct(product.productId).subscribe(function () {
                _this.removeProductFromList(product);
                toastr.success('Record was deleted');
            }, function (errors) {
                _this.handleErrors(errors);
                toastr.success('Failed to delete record');
            });
        }
    };
    ProductListComponent.prototype.removeProductFromList = function (product) {
        var indexDeleted = this.products.findIndex(function (r) { return r.productId === product.productId; });
        this.products.splice(indexDeleted, 1);
    };
    ProductListComponent.prototype.addMessage = function (msg) {
        this.messages.push(msg);
    };
    ProductListComponent.prototype.clearMessages = function () {
        this.messages.splice(0, this.messages.length);
    };
    ProductListComponent.prototype.search = function (formObj) {
        var _this = this;
        this.clearMessages();
        var productName = this.searchEntity.productName;
        productName = (productName ? productName : "").trim();
        if (productName == "") {
            this.addMessage("Please enter product name. (Accepts partial entries)");
            return;
        }
        this.productService.search(this.searchEntity).subscribe(function (products) {
            _this.products = products;
            if (_this.products.length == 0) {
                if (_this.searchEntity.productName) {
                    _this.addMessage("No products were found that matched your provided input.");
                }
                else {
                    _this.addMessage("No products on file.");
                }
            }
        }, function (errors) { return _this.handleErrors(errors); });
    };
    ProductListComponent.prototype.resetSearch = function () {
        this.clearMessages();
        this.searchEntity.categoryId = 0;
        this.searchEntity.productName = '';
        this.getProducts();
    };
    ProductListComponent.prototype.getSearchCategories = function () {
        var _this = this;
        this.categoryService.getSearchCategories().subscribe(function (categories) { return _this.searchCategories = categories; }, function (errors) { return _this.handleErrors(errors); });
    };
    ProductListComponent.prototype.handleErrors = function (errors) {
        this.messages = [];
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var msg = errors_1[_i];
            this.messages.push(msg);
        }
    };
    var _a, _b, _c;
    ProductListComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/product/product-list.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object, typeof (_b = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _b : Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" ? _c : Object])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/09/2021 06:32 pm - SSN - [20210309-1828] - [002] - M04-06 - Creating the product and product service classes
// 03/10/2021 02:31 pm - SSN - [20210310-1429] - [001] - M05-08 - Modify product service to call search web API
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/observable/throw.js");
var index_1 = __webpack_require__("../../../../../src/app/errorMessages/index.ts");
var errorMessage_model_1 = __webpack_require__("../../../../../src/app/errorMessages/errorMessage.model.ts");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.url = '/api/productApi';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.url).map(this.extractData).catch(this.handleErrors);
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(this.url + '/' + id).map(this.extractData).catch(this.handleErrors);
    };
    ProductService.prototype.search = function (searchEntity) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url + '/search', searchEntity, options).map(this.extractData).catch(this.handleErrors);
    };
    ProductService.prototype.addProduct = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url, product, options).map(this.extractData).catch(this.handleErrors);
    };
    ProductService.prototype.updateProduct = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.url + '/' + product.productId, product, options).map(this.extractData).catch(this.handleErrors);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + '/' + id).map(function () { return null; }).catch(this.handleErrors);
    };
    ProductService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProductService.prototype.handleErrors = function (error) {
        var errors = [];
        errorMessage_model_1.ccl('handleRrros-product-service - 20210530-1430 [' + error.status + ']');
        switch (error.status) {
            case 400:
                errorMessage_model_1.ccl('handleRrros-product-service - 20210530-1430  - 400');
                var err = error.json();
                if (err.modelState) {
                    errorMessage_model_1.ccl('handleRrros-product-service - 20210530-1431 - err.modelState');
                    var valErrors1 = err.modelState;
                    for (var key in valErrors1) {
                        for (var i = 0; i < valErrors1[key].length; i++) {
                            errors.push(index_1.createErrorMessage(key, valErrors1[key][i]));
                        }
                    }
                }
                else
                    errorMessage_model_1.ccl('handleRrros-product-service - 20210530-1432 - NOT err.modelState');
                if (err.message) {
                    errors.push(index_1.createErrorMessage('', '[err-ssn-20210309-1934-A]: ' + err.message));
                }
                else {
                    error.push(index_1.createErrorMessage('', '[err-ssn-20210309-1934-B]: ' + 'An Unknown error occurred.'));
                }
                break;
            case 404:
                errors.push(index_1.createErrorMessage('', 'No product data is available'));
                break;
            case 500:
                errors.push(index_1.createErrorMessage('', '[err-ssn-20210309-1934-C]: ' + error.json().exceptionMessage));
                break;
            default:
                error.push(index_1.createErrorMessage('', '[err-ssn-20210309-1934-D]: Status: ' + error.status + ' - Error message: ' + error.statusText));
        }
        console.error('An error occurred', errors);
        return Observable_1.Observable.throw(errors);
    };
    var _a;
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" ? _a : Object])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/09/2021 06:30 pm - SSN - [20210309-1828] - [001] - M04-06 - Creating the product and product service classes
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/product/productSearch.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/10/2021 01:29 pm - SSN - [20210310-1324] - [001] - M05-05 - Build product search class. Update product list component
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSearch = void 0;
var ProductSearch = /** @class */ (function () {
    function ProductSearch() {
    }
    return ProductSearch;
}());
exports.ProductSearch = ProductSearch;
//# sourceMappingURL=productSearch.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var validator_notlowercase_1 = __webpack_require__("../../../../../src/app/shared/validator-notlowercase.ts");
Object.defineProperty(exports, "NotLowerCaseValidatorDirective", { enumerable: true, get: function () { return validator_notlowercase_1.NotLowerCaseValidatorDirective; } });
var validator_min_directive_1 = __webpack_require__("../../../../../src/app/shared/validator-min.directive.ts");
Object.defineProperty(exports, "MinValidatorDirective", { enumerable: true, get: function () { return validator_min_directive_1.MinValidatorDirective; } });
var validator_max_directive_1 = __webpack_require__("../../../../../src/app/shared/validator-max.directive.ts");
Object.defineProperty(exports, "MaxValidatorDirective", { enumerable: true, get: function () { return validator_max_directive_1.MaxValidatorDirective; } });
var validator_customdirective_1 = __webpack_require__("../../../../../src/app/shared/validator-customdirective.ts");
Object.defineProperty(exports, "ErrorcheckerValidatorDirective", { enumerable: true, get: function () { return validator_customdirective_1.ErrorcheckerValidatorDirective; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validator-customdirective.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 05/30/2021 12:21 pm - SSN - [20210530-1151] - [002] - MVC concurrency
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorcheckerValidatorDirective = exports.errorchecker = void 0;
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var errorMessage_model_1 = __webpack_require__("../../../../../src/app/errorMessages/errorMessage.model.ts");
exports.errorchecker = function (fieldname, errormessages) {
    errorMessage_model_1.ccl('errorchecker ');
    return function (c) {
        errorMessage_model_1.ccl('errorchecker -validate 1 ');
        errorMessage_model_1.ccl(c.value);
        errorMessage_model_1.ccl('errormessages:');
        errorMessage_model_1.ccl(errormessages);
        errorMessage_model_1.ccl('fieldname:');
        errorMessage_model_1.ccl(fieldname);
        if (!errormessages)
            return null;
        errorMessage_model_1.ccl('errorchecker -validate 2 ');
        var counter = 0;
        //            for (let msg of errormessages.filter(r => r.key == fieldname)) {
        for (var _i = 0, errormessages_1 = errormessages; _i < errormessages_1.length; _i++) {
            var msg = errormessages_1[_i];
            counter++;
        }
        errorMessage_model_1.ccl("errorchecker -validate 3 [{" + counter + "]");
        if (counter == 0)
            return null;
        errorMessage_model_1.ccl("errorchecker -validate 4 [{" + counter + "]");
        var result = null;
        result = {
            checkerrors: 'customerror-20210530-1228'
        };
        return result;
    };
};
var ErrorcheckerValidatorDirective = /** @class */ (function () {
    function ErrorcheckerValidatorDirective() {
    }
    ErrorcheckerValidatorDirective_1 = ErrorcheckerValidatorDirective;
    ErrorcheckerValidatorDirective.prototype.ngOnInit = function () {
        this.validator = exports.errorchecker(this.fieldname, this.errormessages);
        errorMessage_model_1.ccl('validator-custom - ngOnInit:', 'red');
        errorMessage_model_1.ccl('fieldname:');
        errorMessage_model_1.ccl(this.fieldname);
        errorMessage_model_1.ccl('errormessages:');
        errorMessage_model_1.ccl(this.errormessages);
    };
    ErrorcheckerValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    var ErrorcheckerValidatorDirective_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorcheckerValidatorDirective.prototype, "fieldname", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ErrorcheckerValidatorDirective.prototype, "errormessages", void 0);
    ErrorcheckerValidatorDirective = ErrorcheckerValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[errorchecker]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return ErrorcheckerValidatorDirective_1; }),
                    multi: true
                }]
        })
    ], ErrorcheckerValidatorDirective);
    return ErrorcheckerValidatorDirective;
}());
exports.ErrorcheckerValidatorDirective = ErrorcheckerValidatorDirective;
//# sourceMappingURL=validator-customdirective.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validator-max.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxValidatorDirective = exports.max = void 0;
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
// 03/11/2021 10:30 pm - SSN - [20210311-2229] - [001] - M08-10 - Create the use max validator directive
exports.max = function (max) {
    return function (c) {
        var result = null;
        if (max != undefined && max != null) {
            if (+c.value > +max) {
                result = { max: max };
            }
        }
        return result;
    };
};
var MaxValidatorDirective = /** @class */ (function () {
    function MaxValidatorDirective() {
    }
    MaxValidatorDirective_1 = MaxValidatorDirective;
    MaxValidatorDirective.prototype.ngOnInit = function () {
        this.validator = exports.max(this.max);
    };
    MaxValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    var MaxValidatorDirective_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MaxValidatorDirective.prototype, "max", void 0);
    MaxValidatorDirective = MaxValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[max]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return MaxValidatorDirective_1; }),
                    multi: true
                }]
        })
    ], MaxValidatorDirective);
    return MaxValidatorDirective;
}());
exports.MaxValidatorDirective = MaxValidatorDirective;
//# sourceMappingURL=validator-max.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validator-min.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/11/2021 09:39 pm - SSN - [20210311-2139] - [001] - M08-08 - Create the min validator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinValidatorDirective = exports.min = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
exports.min = function (min) {
    return function (c) {
        var result = null;
        if (min != undefined && min !== null) {
            var value = +c.value;
            if (value < +min) {
                result = { min: min };
            }
        }
        return result;
    };
};
var MinValidatorDirective = /** @class */ (function () {
    function MinValidatorDirective() {
    }
    MinValidatorDirective_1 = MinValidatorDirective;
    MinValidatorDirective.prototype.ngOnInit = function () {
        this.validator = exports.min(this.min);
    };
    MinValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    var MinValidatorDirective_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MinValidatorDirective.prototype, "min", void 0);
    MinValidatorDirective = MinValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[min]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return MinValidatorDirective_1; }),
                    multi: true
                }]
        })
    ], MinValidatorDirective);
    return MinValidatorDirective;
}());
exports.MinValidatorDirective = MinValidatorDirective;
//# sourceMappingURL=validator-min.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validator-notlowercase.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 03/11/2021 08:42 pm - SSN - [20210311-2041] - [001] - M08-05 - Create the NotLowerCase validator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotLowerCaseValidatorDirective = void 0;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
function notLowerCaseValidate(c) {
    var result = null;
    var value = c.value;
    if (value) {
        if (value.toString().trim().length > 1 && value.toString().trim() === value.toString().toLowerCase().trim()) {
            result = { validateNotLowercase: { value: value } };
        }
    }
    return result;
}
var NotLowerCaseValidatorDirective = /** @class */ (function () {
    function NotLowerCaseValidatorDirective() {
        this.validator = notLowerCaseValidate;
    }
    NotLowerCaseValidatorDirective_1 = NotLowerCaseValidatorDirective;
    // ValidationErrors  =??? { [key:string]: any }
    NotLowerCaseValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    var NotLowerCaseValidatorDirective_1;
    NotLowerCaseValidatorDirective = NotLowerCaseValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[validateNotLowercase]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return NotLowerCaseValidatorDirective_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], NotLowerCaseValidatorDirective);
    return NotLowerCaseValidatorDirective;
}());
exports.NotLowerCaseValidatorDirective = NotLowerCaseValidatorDirective;
//# sourceMappingURL=validator-notlowercase.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map