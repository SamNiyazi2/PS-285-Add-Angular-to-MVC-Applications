"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var lowerCaseUrlSerializer_1 = require("./lowerCaseUrlSerializer");
var product_service_1 = require("./product/product.service");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var product_list_component_1 = require("./product/product-list.component");
var category_service_1 = require("./category/category.service");
var product_detail_component_1 = require("./product/product-detail.component");
var AutoFocusDirective_1 = require("./AutoFocusDirective");
var index_1 = require("./errorMessages/index");
var index_2 = require("./errorMessages/index");
var index_3 = require("./shared/index");
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