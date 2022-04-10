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
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var category_service_1 = require("../category/category.service");
var productSearch_1 = require("./productSearch");
var router_1 = require("@angular/router");
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
    ProductListComponent = __decorate([
        core_1.Component({
            templateUrl: './product-list.component.html',
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, category_service_1.CategoryService, router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map