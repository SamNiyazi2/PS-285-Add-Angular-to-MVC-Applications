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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.url = '/api/CategoryApi';
    }
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
    CategoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map