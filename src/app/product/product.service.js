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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.url = '/api/productApi';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.url).map(this.extractData).catch(this.handleErrors);
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
    ProductService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProductService.prototype.handleErrors = function (error) {
        var errors = [];
        switch (error.status) {
            case 400:
                var err = error.json();
                if (err.modelState) {
                    var valErrors1 = err.modelState;
                    for (var key in valErrors1) {
                        for (var i = 0; i < valErrors1[key].length; i++) {
                            errors.push(valErrors1[key][i]);
                        }
                    }
                }
                else if (err.message) {
                    errors.push('[err-ssn-20210309-1934-A]: ' + err.message);
                }
                else {
                    error.push('[err-ssn-20210309-1934-B]: ' + 'An Unknown error occurred.');
                }
                break;
            case 404:
                errors.push('No product data is available');
                break;
            case 500:
                errors.push('[err-ssn-20210309-1934-C]: ' + error.json().exceptionMessage);
                break;
            default:
                error.push('[err-ssn-20210309-1934-D]: Status: ' + error.status + ' - Error message: ' + error.statusText);
        }
        console.error('An error occurred', errors);
        return Observable_1.Observable.throw(errors);
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map