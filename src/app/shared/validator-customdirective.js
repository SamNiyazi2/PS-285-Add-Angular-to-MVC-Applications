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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var errorMessage_model_1 = require("../errorMessages/errorMessage.model");
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