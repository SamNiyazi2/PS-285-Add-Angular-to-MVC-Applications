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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var productSearch_1 = require("./productSearch");
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
        this.router.navigate(['/product-detail', -1]);
    };
    ProductListComponent.prototype.search = function () {
        var _this = this;
        this.productService.search(this.searchEntity).subscribe(function (products) { return _this.products = products; }, function (errors) { return _this.handleErrors(errors); });
    };
    ProductListComponent.prototype.resetSearch = function () {
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
    ProductListComponent = __decorate([
        core_1.Component({
            templateUrl: './product-list.component.html',
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map