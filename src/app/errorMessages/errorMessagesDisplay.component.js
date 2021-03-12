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
var core_1 = require("@angular/core");
// 03/11/2021 02:12 pm - SSN 
var ErrorMessagesDisplayComponent = /** @class */ (function () {
    function ErrorMessagesDisplayComponent() {
        this.applicableErrorMessage = [];
    }
    ErrorMessagesDisplayComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.applicableErrorMessage = this.errorMessages.filter(function (r) { return r.key === ((_this.keyname === "-") ? '' : _this.keyname) || (r.key && (r.key + "--").startsWith(_this.keyname)); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ErrorMessagesDisplayComponent.prototype, "errorMessages", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorMessagesDisplayComponent.prototype, "keyname", void 0);
    ErrorMessagesDisplayComponent = __decorate([
        core_1.Component({
            selector: 'error-messages-display',
            templateUrl: './errorMessagesDisplay.component.html',
        })
    ], ErrorMessagesDisplayComponent);
    return ErrorMessagesDisplayComponent;
}());
exports.ErrorMessagesDisplayComponent = ErrorMessagesDisplayComponent;
//# sourceMappingURL=errorMessagesDisplay.component.js.map