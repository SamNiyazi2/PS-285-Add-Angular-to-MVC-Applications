"use strict";
// 03/10/2021 04:12 pm - SSN - [20210310-1611] - [001] - M06-03 - Create product detail component classdetail component clas
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_1 = require("./product");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(categoryService) {
        this.categoryService = categoryService;
        this.messages = [];
        this.categories = [];
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.product = new product_1.Product();
        this.product.price = 0;
        this.product.categoryId = 0;
        this.product.url = "http://www.fairwaytech.com";
        this.getCategories();
    };
    ProductDetailComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (errors) { return _this.handleErrors(errors); });
    };
    ProductDetailComponent.prototype.handleErrors = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var msg = errors_1[_i];
            this.messages.push(msg);
        }
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './product-detail.component.html'
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map