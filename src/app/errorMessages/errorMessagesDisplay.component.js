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
var errorMessage_model_1 = require("./errorMessage.model");
var forms_1 = require("@angular/forms");
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
        __metadata("design:type", forms_1.FormControl)
    ], ErrorMessagesDisplayComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ErrorMessagesDisplayComponent.prototype, "mouseOverSave", void 0);
    ErrorMessagesDisplayComponent = __decorate([
        core_1.Component({
            selector: 'error-messages-display',
            templateUrl: './errorMessagesDisplay.component.html?v=7'
        })
    ], ErrorMessagesDisplayComponent);
    return ErrorMessagesDisplayComponent;
}());
exports.ErrorMessagesDisplayComponent = ErrorMessagesDisplayComponent;
//# sourceMappingURL=errorMessagesDisplay.component.js.map