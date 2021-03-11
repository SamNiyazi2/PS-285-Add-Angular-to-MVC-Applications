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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var product_1 = require("./product");
var product_service_1 = require("./product.service");
var category_service_1 = require("../category/category.service");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(categoryService, location, productService, activatedRoute) {
        this.categoryService = categoryService;
        this.location = location;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.messages = [];
        this.categories = [];
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
                _this.product.price = 0;
                _this.product.categoryId = 0;
                _this.product.url = "http://www.fairwaytech.com";
            }
        });
        this.getCategories();
    };
    ProductDetailComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (errors) { return _this.handleErrors(errors); });
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailComponent.prototype.updateProduct = function (product) {
        var _this = this;
        this.productService.updateProduct(product).subscribe(function () {
            _this.goBack();
            toastr.success('Record was updated');
        }, function (errors) {
            _this.handleErrors(errors);
            toastr.error('Failed to update record');
        });
    };
    ProductDetailComponent.prototype.addProduct = function (product) {
        var _this = this;
        this.productService.addProduct(product).subscribe(function () {
            _this.goBack();
            toastr.success('Record was added');
        }, function (errors) {
            _this.handleErrors(errors);
            toastr.error('Failed to update record');
        });
    };
    ProductDetailComponent.prototype.saveProduct = function () {
        if (this.product) {
            if (this.product.productId) {
                this.updateProduct(this.product);
            }
            else {
                this.addProduct(this.product);
            }
        }
    };
    ProductDetailComponent.prototype.handleErrors = function (errors) {
        this.messages = [];
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var msg = errors_1[_i];
            this.messages.push(msg);
        }
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './product-detail.component.html'
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService, common_1.Location, product_service_1.ProductService, router_1.ActivatedRoute])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map